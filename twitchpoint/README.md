# Twitchpoint for Stream Deck

Six keys that show what your [Twitchpoint](https://github.com/FadingToJosh/twitchpoint) instance is doing: the channel it's watching, drop progress, the next drop, the campaign ETA, and the next game in your queue.

**Try it in your browser:** [interactive demo](https://fadingtojosh.github.io/streamdeck-plugins/twitchpoint/demo/) (a simulation that runs the plugin's real keys against a pretend Twitchpoint server).

The keys refresh every 60 seconds while a drop is being farmed and every 5 minutes otherwise (both configurable). Press any key to refresh straight away.

Twitchpoint itself is a separate program, based on [miwidot/twitchpoint](https://github.com/miwidot/twitchpoint). This plugin only displays what it reports. It doesn't log in to Twitch or do any farming itself.

| Key | Shows | Example |
| --- | --- | --- |
| **Watching** | Channel holding the drop slot (or the first watched channel) + its game | `xQcOW` / Escape from Tarkov |
| **Drop Progress** | Minutes on the drop being farmed + bar | `56/120` |
| **Drop Position** | Which watch-time drop of the campaign this is | `4/5` |
| **Next Drop** | The drop after this one and its progress | `Weapon Skin` / 56/240m |
| **Campaign ETA** | Watch time until every reachable drop is earned, and the local clock time | `3h 04m` / ≈ 10:47 PM |
| **Next Game** | Next game with a running campaign, ranked by your wanted-games order. A live channel ("queued") beats a campaign nobody is streaming ("nobody live"). Games with no campaign are never shown. | `Marvel Rivals` / queued · #2 |

## Setup

1. Install the plugin and drag keys from the **Twitchpoint** category onto your deck.
2. Open any key's settings and set the server URL once. It's shared by all keys.
   - Twitchpoint on the same PC: keep the default, `http://127.0.0.1:8080`.
   - Twitchpoint on another machine (a Pi, a NAS): use that machine's LAN address, for example `http://192.168.1.50:8080`.

## Twitchpoint server requirements

* Same PC: nothing to do, the default `web_bind` (`127.0.0.1`) works.
* Another machine: set `"web_bind": "0.0.0.0"` in that machine's
  `config.json` (the default is localhost-only, also inside Docker). If you can
  open the dashboard from your PC's browser, this is already done.
* `/api/streamdeck` only exists in builds from this fork. Against an older
  build the plugin falls back to `/api/drops` + `/api/channels`, but then
  **Next Drop shows `n/a`** and **Campaign ETA only covers the current
  drop** (its label switches to "THIS DROP"), because the old endpoints don't
  expose per-drop data.

## Languages

English, German, French, Spanish, Japanese, Korean, and Chinese (Simplified and Traditional). The plugin follows Stream Deck's language. The translations haven't been reviewed by native speakers, so corrections are welcome as issues.

## Requirements

Stream Deck 7.1 or later on Windows 10+ or macOS 12+, and a running Twitchpoint instance.

## Get help

- [Report a bug](https://github.com/FadingToJosh/streamdeck-plugins/issues/new?template=bug_report.yml) and pick **Twitchpoint** in the form. Say whether the problem is in the keys or in Twitchpoint itself.
- [Ask a question or suggest something](https://github.com/FadingToJosh/streamdeck-plugins/issues/new?template=feature_request.yml).
- [Privacy policy](PRIVACY.md)

---

Not affiliated with or endorsed by Twitch Interactive, Inc. or Elgato.
