// Shared pieces for the plugin demos: keys, dial segments and Neo infobars that a plugin's own code
// (bundled as plugin.js, running on a stand-in Stream Deck SDK) draws into.
//
// host.place() is the stand-in for Stream Deck putting an action on a deck; see each code repo's
// scripts/demo/sdk-shim.ts.

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

/**
 * A key on the deck. Pointer down/up are passed straight to the plugin as keyDown/keyUp, so the
 * plugin's own tap-vs-hold timing applies. `holdMs` only draws a ring to hint that holding does
 * something; it doesn't decide anything.
 */
export function placeKey(host, cell, uuid, { settings, holdMs = 0, onPress, alt = "" } = {}) {
	cell.className = "key live";
	cell.innerHTML = `<img alt="${esc(alt)}"><div class="title"></div>`;
	const img = cell.querySelector("img");
	const title = cell.querySelector(".title");
	let ring;
	if (holdMs) {
		cell.insertAdjacentHTML("beforeend", `<svg class="ring" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" pathLength="100" stroke-dasharray="0 100"/></svg>`);
		ring = cell.querySelector("svg.ring circle");
	}
	let alertTimer;
	const placed = host.place({
		uuid,
		controller: "Keypad",
		settings,
		onImage: (src) => { if (src) img.src = src; else img.removeAttribute("src"); },
		onTitle: (t) => { title.textContent = t ?? ""; },
		onAlert: (kind) => {
			cell.classList.remove("alert", "ok");
			cell.classList.add(kind);
			clearTimeout(alertTimer);
			alertTimer = setTimeout(() => cell.classList.remove(kind), 900);
		},
	});

	let raf = 0, downAt = 0, isDown = false;
	const spin = () => {
		const p = Math.min(1, (performance.now() - downAt) / holdMs);
		ring.setAttribute("stroke-dasharray", `${p * 100} 100`);
		if (p < 1 && isDown) raf = requestAnimationFrame(spin);
	};
	const down = (e) => {
		if (e.button > 0 || isDown) return;
		e.preventDefault();
		isDown = true;
		downAt = performance.now();
		cell.classList.add("down");
		cell.setPointerCapture?.(e.pointerId);
		if (ring) raf = requestAnimationFrame(spin);
		placed.keyDown();
		onPress?.();
	};
	const up = () => {
		if (!isDown) return;
		isDown = false;
		cell.classList.remove("down");
		if (ring) { cancelAnimationFrame(raf); ring.setAttribute("stroke-dasharray", "0 100"); }
		placed.keyUp();
	};
	cell.addEventListener("pointerdown", down);
	cell.addEventListener("pointerup", up);
	cell.addEventListener("pointercancel", up);
	cell.addEventListener("contextmenu", (e) => e.preventDefault());
	cell.tabIndex = 0;
	cell.setAttribute("role", "button");
	cell.addEventListener("keydown", (e) => { if ((e.key === " " || e.key === "Enter") && !e.repeat) { e.preventDefault(); down({ button: 0, preventDefault() {}, pointerId: 0 }); } });
	cell.addEventListener("keyup", (e) => { if (e.key === " " || e.key === "Enter") up(); });
	return placed;
}

/**
 * A touchscreen area drawn from a Stream Deck layout file: a Stream Deck + dial segment (200x100)
 * or a Neo infobar. Supports the item types the plugins use: pixmap, text, bar.
 */
export function makeLcd(el, layout, width, height) {
	el.classList.add("lcd");
	el.style.aspectRatio = `${width} / ${height}`;
	const pct = (v, of) => `${(v / of) * 100}%`;
	const items = new Map();
	for (const item of layout.items) {
		const [x, y, w, h] = item.rect;
		const node = document.createElement("div");
		node.className = "item";
		Object.assign(node.style, { left: pct(x, width), top: pct(y, height), width: pct(w, width), height: pct(h, height) });
		if (item.type === "pixmap") node.innerHTML = "<img alt=''>";
		else if (item.type === "text") {
			node.innerHTML = "<span></span>";
			const span = node.firstChild;
			span.style.textAlign = item.alignment ?? "center";
			// Font sizes in layouts are in layout pixels; scale with the element's width.
			span.style.fontSize = `${(item.font?.size ?? 14) / width * 100}cqw`;
			span.style.fontWeight = item.font?.weight ?? 400;
			span.style.color = item.color ?? "#fff";
		} else if (item.type === "bar" || item.type === "gbar") {
			node.innerHTML = `<div style="width:100%;height:40%;background:${item.background ?? "#333"};border-radius:3px;overflow:hidden"><i style="display:block;height:100%;width:0;background:${item.bar_fill_c ?? "#fff"}"></i></div>`;
		}
		el.appendChild(node);
		items.set(item.key, { item, node });
	}
	return {
		setFeedback(feedback) {
			for (const [key, raw] of Object.entries(feedback)) {
				const entry = items.get(key);
				if (!entry) continue;
				const v = raw !== null && typeof raw === "object" ? raw : { value: raw };
				const { item, node } = entry;
				if (item.type === "pixmap") { if (v.value) node.firstChild.src = v.value; }
				else if (item.type === "text") {
					node.firstChild.textContent = v.value ?? "";
					node.firstChild.style.color = v.color ?? item.color ?? "#fff";
				} else node.querySelector("i").style.width = `${Math.max(0, Math.min(100, Number(v.value) || 0))}%`;
			}
		},
	};
}

/** Places an action on a dial (Stream Deck +): the segment above it plus a pressable knob. */
export function placeDial(host, el, uuid, layout, { settings, onPress } = {}) {
	const lcd = makeLcd(el, layout, 200, 100);
	const placed = host.place({ uuid, controller: "Encoder", settings, onFeedback: (f) => lcd.setFeedback(f) });
	const knob = document.createElement("button");
	knob.className = "knob";
	knob.setAttribute("aria-label", "Press the dial");
	knob.addEventListener("pointerdown", () => { placed.dialDown(); onPress?.(); });
	knob.addEventListener("pointerup", () => placed.dialUp());
	el.after(knob);
	return placed;
}

/** Places an action on a Neo infobar. `layouts` maps the layout path the plugin asks for to its JSON. */
export function placeInfobar(host, el, uuid, layouts, { settings } = {}) {
	let lcd;
	let pending = null;
	return host.place({
		uuid,
		controller: "Neo",
		settings,
		onLayout: (path) => {
			el.innerHTML = "";
			lcd = makeLcd(el, layouts[path], 232, 50);
			if (pending) lcd.setFeedback(pending);
		},
		onFeedback: (f) => { if (lcd) lcd.setFeedback(f); else pending = f; },
	});
}

/** A small rolling log. */
export function makeLog(el, max = 12) {
	const lines = [];
	return (html) => {
		lines.unshift(html);
		lines.length = Math.min(lines.length, max);
		el.innerHTML = lines.map((l) => `<li>${l}</li>`).join("");
	};
}

/** The note under the deck that explains what just happened. */
export function makeToast(el) {
	let timer;
	return (text) => {
		el.textContent = text;
		el.classList.add("on");
		clearTimeout(timer);
		timer = setTimeout(() => el.classList.remove("on"), 2500);
	};
}

export { esc };
