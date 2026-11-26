# Privacy policy: ActivelyPlaying for Stream Deck

_Last updated: 2026-11-25_

ActivelyPlaying has no analytics, telemetry or ads, and it doesn't send your data to the developer or anyone else.

**What it reads.** Every few seconds it lists the programs running on your computer to recognize the game you're playing. The list stays on your computer.

**What it stores.** Your per-key settings in Stream Deck, and a cached copy of the public game list in `%LOCALAPPDATA%\streamdeck-now-playing`.

**Network connections.**
- **Discord:** once a day it downloads Discord's public list of recognized games (`discord.com`), and it fetches game icons from Discord's CDN (`cdn.discordapp.com`). These requests contain no information about you or what you're running. Discord doesn't need to be installed.
- **Settings panel:** loads the open-source sdpi-components UI library from `sdpi-components.dev` when you open a key's settings.

**Deleting your data.** Uninstall the plugin, and delete the `streamdeck-now-playing` folder in `%LOCALAPPDATA%` if you want to remove the cache too.

**Contact.** Open an issue at https://github.com/FadingToJosh/streamdeck-plugins/issues
