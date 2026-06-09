# Sean Derham CV

Personal CV site for [seanderham.com/about](https://seanderham.com/about).

This project is deployed with **GitHub Actions** to GitHub Pages at
[seanderham1.github.io/cv-section](https://seanderham1.github.io/cv-section/).

## Local development

```bash
yarn install
yarn dev
```

Edit CV content in `src/data/resume-data.tsx`.

## Deployment

Pushes to `main` run `.github/workflows/nextjs.yml`.

In GitHub repo **Settings → Pages**, set **Build and deployment → Source** to
**GitHub Actions** (not “Deploy from a branch”). If branch deploy is enabled,
the repo README can temporarily replace the built CV after failed builds.
