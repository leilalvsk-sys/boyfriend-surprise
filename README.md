# ♡ The Boyfriend Surprise Website

A cute pink interactive multi-page surprise website.

## Pages

- `index.html` — the envelope + “are u my boyfriend?” question.
- `love.html` — the main pink scrapbook / love-board page.
- `midnight.html` — the dark “endless love.exe” Oregon-night page.
- `little-things.html` — playlist, random cat, love note and Oregon widgets.

## Run it

The easiest way is to open the folder in VS Code and use Live Server.

Or from the project folder:

```bash
python3 -m http.server 8000
```

Then open:

`http://localhost:8000`

## Personalize it

Most of the text is directly inside the HTML files.

For a real song, add an audio file such as:

`assets/our-song.mp3`

and connect it to the music player in `love.html`.

You can also replace the emoji / CSS illustrations with real photos of your boyfriend, your cats, Oregon, or screenshots/posters you want to include.

## Important

The site is intentionally made with plain HTML + CSS + JavaScript — no React, no framework — so every animation and interaction is easy to modify.
