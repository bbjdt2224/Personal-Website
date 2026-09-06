# Personal Website

Justin True's personal portfolio site — built with React and Vite.

## Development

```
npm install
npm run dev
```

Navigate to `http://localhost:5173/`. The app hot-reloads as you edit source files.

## Build

```
npm run build
```

Outputs a production build to `dist/`. Preview it locally with:

```
npm run preview
```

## Content

Most section content lives in `src/config/` (projects, skills, accomplishments, hobbies, travel, baking) as plain data — edit those files rather than the components to update text, links, or photos. Static assets (images, resume) live in `public/`.

## Deployment

Deployed on Netlify. Build settings are defined in `netlify.toml` (`npm run build`, publish directory `dist`) — if the Netlify site's dashboard has its own build settings configured via the UI, those take precedence over `netlify.toml` and should match.
