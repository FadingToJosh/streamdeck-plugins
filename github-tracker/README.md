# GitHub Tracker for Stream Deck: help and support

GitHub Tracker is a Stream Deck plugin that tells you when repositories you follow have **new commits or releases you haven't seen yet**. Press a key to open what changed, and hold it to mark it seen.

This folder holds the plugin's documentation. Support for all of FadingToJosh's Stream Deck plugins goes through this repository's issues. The plugin's source code isn't published here.

**Try it in your browser:** [interactive demo](https://fadingtojosh.github.io/streamdeck-plugins/github-tracker/demo/) (a simulation that uses the plugin's real key drawing).

## Get help

- **Something isn't working?** [Open a bug report](https://github.com/FadingToJosh/streamdeck-plugins/issues/new?template=bug_report.yml). Check [existing GitHub Tracker issues](https://github.com/FadingToJosh/streamdeck-plugins/issues?q=is%3Aissue+%22GitHub+Tracker%22) first.
- **Idea or question?** [Open a feature request or question](https://github.com/FadingToJosh/streamdeck-plugins/issues/new?template=feature_request.yml).
- **Never paste your token** into an issue. If you think you've exposed it, revoke it in your [GitHub token settings](https://github.com/settings/personal-access-tokens) and make a new one.

## Creating a read-only token

A token is optional for public repos and required for private ones. The guide explains how to make a fine-grained, read-only one:

[English](token-guide/en.md) · [Deutsch](token-guide/de.md) · [Español](token-guide/es.md) · [Français](token-guide/fr.md) · [日本語](token-guide/ja.md) · [한국어](token-guide/ko.md) · [Português](token-guide/pt.md) · [Русский](token-guide/ru.md) · [简体中文](token-guide/zh_CN.md)

The translations are machine-generated. If you spot a mistake, please open an issue.

## Quick reference

| | Key | Stream Deck + dial |
| --- | --- | --- |
| **Repo Tracker**: open the new changes | Press | Press, or tap the strip |
| **Repo Tracker**: totals when nothing is new | Press | Press |
| **Repo Tracker**: mark seen | Hold ~0.5 s | Hold, or long-touch the strip |
| **Update Alert**: next repo with changes | Press | Turn, or press |
| **Update Alert**: mark the shown repo seen | Hold | Hold, or long-touch |
| **Update Alert**: mark all seen | Hold on the count | Hold on the count |

On a Stream Deck Neo, Update Alert can go on the Infobar. It shows the count and cycles through updated repos. The Infobar is display-only.

Requirements: Stream Deck 7.6 or later, macOS 12+ or Windows 10+.

## Privacy

The plugin collects no data. It talks only to GitHub's API. See [PRIVACY.md](PRIVACY.md).

---

GitHub Tracker is an independent project. It is not affiliated with or endorsed by GitHub, Inc. or Elgato. GitHub is a trademark of GitHub, Inc.
