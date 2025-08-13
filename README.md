Metandis Landing
=================

Deployment notes:

1. Custom domain (metandis.com): build with root base (default). The Vite config uses base = process.env.VITE_APP_BASE || '/'. Do NOT set VITE_APP_BASE.
2. GitHub project page fallback (https://routal-tech.github.io/metandis-landing/): set env VITE_APP_BASE=/metandis-landing/ for the build step.
3. SPA routing: Workflow copies index.html to 404.html so direct deep links resolve.
4. Legacy asset path redirect: Inline script in index.html rewrites old /metandis-landing/* paths after switching to custom domain.

Updating deployment:
Push to main triggers GitHub Pages workflow. After domain/base changes, force refresh (Ctrl+Shift+R) to bypass cached HTML referencing old asset paths.

Optional cleanup:
- Remove src/assets/site.webmanifest (now served from public/).
- Replace placeholder icon PNGs in public/ with real assets.

