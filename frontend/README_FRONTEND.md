Frontend quick start (React + Vite + TypeScript + Tailwind)

1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

Files of interest:
- `tailwind.config.cjs` — Tailwind config with design tokens
- `postcss.config.cjs` — PostCSS config
- `src/index.css` — global Tailwind imports and base styles
- `src/components` — ProductCard and ProductGrid sample
- `src/data/sample-products.json` — demo data

To connect to your backend, replace the sample JSON imports with fetch calls to your endpoints.