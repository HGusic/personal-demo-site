# personal-demo-site

Personal portfolio for [Haris](https://github.com/HGusic). A static Vite + React site with About (experience and education), Professional Projects, Projects, and Contact.

Live on AWS Amplify Hosting.

## Local

Needs Node.js 18+.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |

## Deploy / update Amplify

**If the app is connected to this GitHub repo:** merge or push the connected branch. Amplify rebuilds from `npm run build` and publishes `dist/`.

**If you still upload a zip by hand:**

```bash
npm run build
cd dist
zip -r ../site.zip .
```

In Amplify, open the app and upload `site.zip` (the zip of `dist/` contents, not the whole repo).
