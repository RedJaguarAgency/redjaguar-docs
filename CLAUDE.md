# Red Jaguar Docs (docs.redjaguar.agency)

Manual para clientes de los plugins de Red Jaguar. Sitio estático hecho con Astro Starlight. Plan, decisiones y pendientes en `docs/plan.md`. Hablar con Phi en español.

## Comandos

- `npm run dev`: sitio local en http://localhost:4321 (con `astro dev --background` para dejarlo corriendo).
- `npm run build`: genera `dist/` para revisar en local.
- **Publicar:** cada push a `main` publica solo en GitHub Pages (`.github/workflows/deploy.yml`), con el dominio `docs.redjaguar.agency` (`public/CNAME`). Nada de FTP.
- `bin/po-lookup.py <archivo.po> "<texto en inglés>"`: busca cómo está traducido un texto de la interfaz.

## Reglas

- **Solo para clientes.** Nada interno (firmar, publicar, Stripe, servidores): eso va en los `docs/` de cada repo.
- **Idiomas:** el inglés vive en la raíz de `src/content/docs/`; el español en `es/` con **la misma ruta**. El portugués irá en `pt-br/`. Cada página se escribe en los dos idiomas a la vez.
- **Las direcciones no cambian** porque los plugins enlazan a ellas. Si hay que mover una página, agregar la redirección en `redirects` de `astro.config.mjs`.
- **Los nombres de menús, botones y mensajes son los de la pantalla.** En español salen del `.po` del plugin (es_MX en News Sitemap & Schema). No inventar traducciones.
- **Revisar en el código** antes de afirmar cómo funciona algo (por ejemplo, las reglas de licencias en `redjaguar-licencias/includes/Activations.php` y en el `License/Gate.php` de cada plugin). Si el código y un texto del plugin no coinciden, anotarlo en los pendientes de ese plugin.
- **Estilo:** el de los plugins. Frases cortas, sin jerga, paso a paso. Sin precios (cambian en Stripe); enlazar a la tienda.
- **Plugin nuevo:** carpeta en `src/content/docs/<plugin>/` y en `es/`, un grupo en `sidebar` de `astro.config.mjs` y una tarjeta en las dos portadas (`index.mdx`).
- En el frontmatter, si `title` o `description` llevan `: `, van entre comillas (si no, el YAML falla).
- Antes de terminar: `npm run build` sin errores y revisar que no haya enlaces internos rotos.
- **Nada se publica sin confirmación de Phi.**

## Estructura

| Carpeta | Contenido |
|---|---|
| `src/content/docs/licenses/` | Licencias y cuenta (común a los plugins de pago) |
| `src/content/docs/news-sitemap-schema/` | News Sitemap & Schema (textos es_MX de su `.po`) |
| `src/content/docs/datamaps/` | DataMaps (textos es_ES de su `.po`) |
| `src/content/docs/newsroom-privacy-optimizer/` | Newsroom Privacy & Optimizer, gratis en WordPress.org (textos es_ES de su `.po`) |
| `src/assets/<plugin>/<en|es>/` | Capturas de pantalla, una por idioma. Se toman de los sitios locales de prueba con el idioma del usuario cambiado (y se restaura después) |
| `src/content/docs/news-sitemap-schema/checks.md` | Referencia de revisiones del diagnóstico, con un ancla por id; los plugins enlazan a `#<id>` |
| `docs/enlaces-de-ayuda.md` | Qué página del manual le toca a cada pantalla de cada plugin |
| `public/videos/datamaps/` | Los 5 videos tutoriales de DataMaps (en español; también en la versión en inglés hasta grabarlos en inglés) |
| `src/content/docs/support.md` | Soporte (roar@redjaguar.agency) |
| `src/styles/custom.css` | Colores originales de Starlight; solo el título en el rojo de la marca (#ee2a24), junto al logo (decisión de Phi, 2026-11-24) |
| `src/assets/logo-red-jaguar.svg` | Logo (cabeza de jaguar), también en `public/favicon.svg`. Los tres logos originales están en `docs/marca/` |
