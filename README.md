# Valorant Landing Page

A fan landing page for Valorant's agents and maps, with light and dark themes and a quick quiz that matches you to an agent role. My first landing page!

**[Live site](https://valorant.aniqa.dev)**

<table>
  <tr>
    <td width="50%"><a href="https://valorant.aniqa.dev"><img src="assets/valorant-light.png" alt="The landing page in light mode, with the hero and a grid of agent cards" width="100%"></a></td>
    <td width="50%"><a href="https://valorant.aniqa.dev"><img src="assets/og-img.png" alt="The landing page in dark mode" width="100%"></a></td>
  </tr>
</table>

## Tech

- HTML, CSS and JavaScript
- Google Fonts (Barlow Semi Condensed and Nunito)

## Features

- A grid of 24 agent cards, each with a text overlay that appears on hover (or tap on phones)
- 10 maps, each labeled with its real-world location (Lotus in the Western Ghats, Sunset in Los Angeles)
- A light and dark theme toggle
- "Find Your Match" asks three questions and suggests a role (Duelist, Initiator, Controller or Sentinel) with agents to try
- A download button linking to the official game site

## Design

- Agent art styled with shadows to look more 3D, with text overlays positioned on top
- A responsive grid that fills the width at any screen size, with breakpoints at 1200px and 480px
- Theme colors live in CSS variables, so the toggle swaps one class instead of restyling each element

## Project structure

- `index.html`: the page
- `styles.css`: theme variables, layout and the two breakpoints
- `button.js`: the theme toggle, the agent quiz and tap-to-hover on phones
- `assets/images/`: agent, map and logo art

## Key concepts

- **CSS Grid with `auto-fit` and `minmax`**, so the agent cards reflow without a breakpoint for every screen size.
- **Absolute positioning** to layer text over each agent card.
- **An empty `touchstart` listener** so phones apply `:hover` styles when you tap a card.

## Setup

No build step or API keys. Open `index.html`, or serve the folder locally:

```bash
git clone https://github.com/aniqatc/valorant.git
cd valorant
python3 -m http.server
```

## Changelog

### August 2024

- Fixed a hover bug and updated the agents and maps

### November 2023

- Moved theme colors into CSS variables and simplified the toggle

### November 2022

- Initial release
