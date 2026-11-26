# Privacy policy: Fishing Pro for Stream Deck

_Last updated: 2026-11-25_

Fishing Pro has no analytics, telemetry or ads, and it doesn't send your data to the developer or anyone else.

**What it stores, on your computer only.** Your catches, sizes, rod progress and settings. If you turn on chat play, it also stores the display names of viewers who catch fish, with their tallies and records. All of it is kept in Stream Deck's plugin settings. A Streamer.bot WebSocket password, if you set one, is stored there too.

**Network connections.**
- **OBS overlay:** a small web server on `127.0.0.1` that only this computer can reach. Every link carries a random private token.
- **Twitch chat (optional):** a read-only, anonymous connection to Twitch chat (`irc-ws.chat.twitch.tv`) for the channel you enter. It uses no account or token and never posts.
- **Streamer.bot (optional):** connects to Streamer.bot's WebSocket server on your own computer (`127.0.0.1`) to read YouTube, Kick and Twitch chat.
- **Settings panel:** loads the open-source sdpi-components UI library from `sdpi-components.dev` when you open a key's settings.

Viewer names are shown only on your own keys and stream overlay.

**Deleting your data.**
- **Reset leaderboard** in the settings clears every viewer's name and tally.
- **Hide name** stops a viewer's name from ever being shown.
- Uninstalling the plugin deletes everything it stored.

**Contact.** Open an issue at https://github.com/FadingToJosh/streamdeck-plugins/issues
