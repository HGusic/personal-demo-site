# personal-demo-site

Personal portfolio site for **Haris Gusic** — software engineer based in Dallas, Texas.

Live content includes about/experience, education, selected projects, and contact links.

## Stack

- React 18
- Vite
- Plain CSS

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://127.0.0.1:5173`).

## Production build

```bash
npm run build
```

Output lands in `dist/`. That folder (or a zip of its contents) is what gets deployed to AWS Amplify.

```bash
npm run preview
```

Serves the production build locally for a quick check.

## Project structure

- `index.html` — app shell
- `src/App.jsx` — page content (about, experience, education, projects, contact)
- `src/App.css` / `src/index.css` — styles
- `vite.config.js` — Vite + React plugin

## Links

- Portfolio domain: [harisg.dev](https://harisg.dev) (when Amplify custom domain is active)
- GitHub: [github.com/HGusic](https://github.com/HGusic)
- LinkedIn: [linkedin.com/in/harisgusic123](https://www.linkedin.com/in/harisgusic123)
