# smartmur.github.io

Organization homepage for [SmartMur](https://github.com/SmartMur), deployed via GitHub Pages at [https://smartmur.github.io](https://smartmur.github.io).

## What is this?

A single-page static site showcasing SmartMur's open-source projects for self-hosted AI operations, homelab automation, and infrastructure management.

## Structure

```
.
├── index.html              # Main page
├── style.css               # Styles (dark theme, responsive)
├── assets/
│   ├── smartmur-logo.svg   # Organization logo
│   └── smartmur-banner.svg # Banner graphic
├── README.md
└── .gitignore
```

## Deployment

This repo is configured for GitHub Pages deployment from the `main` branch root. Push to `main` and the site goes live automatically.

## Local preview

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then open [http://localhost:8000](http://localhost:8000).

## License

MIT
