# Manual de los plugins: plan

Fecha: 2026-11-24. Estado: fases 1, 2 y 3 (sin portugués) escritas, sin publicar.

## Decisiones tomadas

- **Para quién:** clientes. Lo interno (firmar, publicar, Stripe) no va aquí; sigue en los `docs/` de cada repo.
- **Dónde:** `docs.redjaguar.agency`.
- **Formato:** páginas en Markdown dentro de un repo nuevo, `redjaguar-docs/`. Con eso se genera un sitio estático (HTML).
- **Idiomas:** inglés y español desde el principio. Portugués más adelante.
- **Qué cubre:** todos los plugins, los de pago y el gratis. Agregar un plugin nuevo tiene que ser fácil.

## Herramienta: Astro Starlight

Starlight es un generador de sitios de documentación hecho con Astro. Lo elijo porque:

- Ya trae menú lateral, buscador, modo claro y oscuro y selector de idioma.
- Su sistema de idiomas está pensado para traducir poco a poco. Si una página no existe en español o en portugués, el sitio muestra la versión en inglés con un aviso. Así el portugués se puede ir agregando sin dejar enlaces rotos.
- El buscador (Pagefind) funciona sin servidor: está en los mismos archivos HTML y busca solo en el idioma de la página.
- No pone cookies ni rastreadores, igual que los plugins. No vamos a agregar analítica.
- La Mac ya tiene Node 22, que es lo que necesita.

## Direcciones

- El inglés queda en la raíz: `docs.redjaguar.agency/news-sitemap-schema/…`.
- El español va en `/es/…` y el portugués irá en `/pt-br/…`.
- Las direcciones usan las mismas palabras en inglés en todos los idiomas, por ejemplo `/es/news-sitemap-schema/readiness-check/`. Starlight reconoce que dos páginas son traducciones porque tienen la misma ruta.
- **Regla:** una dirección publicada no se cambia, porque los plugins van a enlazar a ella. Si hay que moverla, se agrega una redirección en `astro.config.mjs`.

## Estructura del sitio

Las carpetas de los productos tienen nombres cortos que no cambian. No tienen que ser iguales a los slugs de la tienda.

```
Inicio                         qué plugins hay, enlaces a cada uno

Licencias y cuenta             (común a los plugins de pago)
  Comprar una licencia
  Instalar un plugin desde el zip
  Activar la licencia
  Copias de prueba (staging., dev., test., localhost)
  Cambiar el sitio de una licencia
  Renovar, facturas y cancelar
  Qué pasa si la licencia vence o no hay licencia
  Licencias donadas: quién puede pedirlas y cómo
  Actualizaciones

News Sitemap & Schema          /news-sitemap-schema/
  Qué hace
  Primeros pasos (los 5 pasos del readme)
  Datos del medio (Publisher)
  Políticas editoriales y plantillas
  Sitemap de noticias
  Datos estructurados, con Yoast SEO y Rank Math
  Autores y "Proteger mi identidad"
  Crédito de las fotos
  Revisión de requisitos
  Referencia de revisiones: cada revisión con su ancla (#id)
  Protección de la redacción
  Revisión en el editor de bloques
  Alertas por correo
  Varios idiomas (Polylang, WPML, por categoría)
  WP-CLI
  Preguntas frecuentes
  Glosario
  Novedades (changelog)

DataMaps                       /datamaps/
  Qué hace
  Primeros pasos: licencia y clave de cifrado
  Bases de datos y campos
  Plantillas
  Importar CSV o XLSX
  Sincronizar con Google Sheets
  Campos calculados
  Formularios públicos
  Calidad de los datos
  Historial, verificación y roles
  Geografía (fronteras)
  Vistas públicas: mapa, portada, cifras, gráficas, línea de tiempo, tarjetas, tabla
  Filtros
  Poner las vistas en una página: bloque, shortcode, Elementor, insertar en otro sitio
  Estilos y colores
  Privacidad y seguridad
  Límites
  Videos tutoriales
  Preguntas frecuentes
  Novedades

Newsroom Privacy & Optimizer   /newsroom-privacy-optimizer/
  Qué hace
  Instalar (desde WordPress.org)
  Qué quita de las fotos
  Revisar la biblioteca de medios
  Nombres de archivo
  Originales a tamaño completo
  Imágenes más ligeras (WebP, AVIF)
  Ajustes
  Guía: metadatos de las fotos en una redacción
  WP-CLI
  Preguntas frecuentes
  Novedades

Soporte                        cómo pedir ayuda, qué datos mandar
```

Para agregar un plugin nuevo se crea su carpeta en `src/content/docs/<plugin>/`, con las mismas carpetas en `es/`, y se agrega un bloque al menú. El menú de cada plugin se arma solo a partir de sus archivos.

## Organización del repo

```
redjaguar-docs/
  CLAUDE.md                     reglas de este repo
  astro.config.mjs              idiomas, menú, redirecciones
  src/content/docs/             inglés (raíz)
    licenses/  news-sitemap-schema/  datamaps/  newsroom-privacy-optimizer/
    es/                         mismas rutas en español
  src/assets/<plugin>/<idioma>/ capturas de pantalla
  public/videos/                videos de DataMaps
  docs/plan.md                  este archivo
  bin/deploy.sh                 subir el sitio (fase 1)
```

## Cómo se escribe

- **Fuentes:** el contenido sale de los `readme.txt`, de las pantallas de los plugins y de `instalacion-en-la-web.md`, que ya explica la cuenta y las licencias. No hay que escribir desde cero.
- **El inglés es la versión principal.** El español se escribe al mismo tiempo, no después.
- **Los nombres de menús y botones son los mismos que ve el usuario.** En español salen de los `.po` de cada plugin. News Sitemap & Schema tiene es_MX y es_ES; usamos es_MX. Así "Herramientas → Salud del sitio" en el manual es lo que aparece en la pantalla.
- **Estilo:** el mismo de los plugins. Frases cortas, sin jerga y paso a paso.
- **Capturas de pantalla:** pocas, solo donde ayudan. Van en los dos idiomas porque la interfaz cambia. Se toman de los sitios locales de desarrollo.
- **Videos:** los de DataMaps pesan poco (entre 2 y 4 MB cada uno, 13 MB el completo). Se pueden servir desde el mismo sitio, sin YouTube.

## Publicar

Cambio de plan del 2026-11-24: el sitio vive en **GitHub Pages**, no en el hosting.

- Cada push a `main` del repo `RedJaguarAgency/redjaguar-docs` compila y publica solo (`.github/workflows/deploy.yml`).
- El dominio está en `public/CNAME` y en Settings → Pages del repo.
- DNS en Namecheap: un registro CNAME `docs` → `redjaguaragency.github.io` (en lugar del A al hosting).
- La copia subida por FTP a `/docs.redjaguar.agency` del hosting ya no se usa y se puede borrar, junto con el subdominio del cPanel.

Nada se publica sin confirmación de Phi: un push a `main` es publicar.

## Mantenerlo al día

- Hay que agregar una regla al `CLAUDE.md` de cada plugin: si un cambio se ve en la pantalla, se actualiza su página del manual en los dos idiomas y la página de novedades.
- **Enlaces de ayuda en los plugins** (fase 3): cada pantalla tiene un enlace "Ayuda" a su página, en el idioma del usuario (`es_*` → `/es/`). Las revisiones de News Sitemap & Schema pueden enlazar a su ancla en la referencia. Esto lo hace la sesión de cada plugin; se anota en sus pendientes.

## Fases

1. **Base y primer plugin.** Se crea el sitio con Starlight, con el logo y los colores de Red Jaguar. Se escriben Inicio, Licencias y cuenta, News Sitemap & Schema y Soporte, en inglés y español. Primera publicación.
2. **Los otros plugins.** DataMaps, con los videos, y Newsroom Privacy & Optimizer.
3. **Mejoras.** Capturas de pantalla, la referencia completa de revisiones, los enlaces de ayuda dentro de los plugins y el portugués.

## Decisiones de Phi (2026-11-24)

- **Diseño:** primero lo funcional y cómodo para el cliente. Se quedan los colores originales de Starlight (los rojos propios no se leían). Solo el título va en rojo hasta tener el logo de Red Jaguar, que Phi pasará después.
- **Soporte:** roar@redjaguar.agency.
- **Videos de DataMaps:** los mismos videos en español en las dos versiones. Pendiente: grabarlos en inglés.
- **Licencias donadas:** solo una aclaración: los criterios y la asignación dependen de las organizaciones aliadas. Enlace al formulario de la tienda.

## Avance

- **2026-11-24, fase 1 escrita** (sin publicar): Inicio, Soporte, Licencias y cuenta (9 páginas) y News Sitemap & Schema (14 páginas), en inglés y español. `npm run build` da 51 páginas sin enlaces rotos. Encontré dos textos equivocados en News Sitemap & Schema; quedaron anotados en `gnews_easy/docs/pendientes.md`.

- **2026-11-24, fase 2 escrita:** DataMaps (18 páginas, con los 5 videos) y Newsroom Privacy & Optimizer (10 páginas), en inglés y español. 107 páginas en total, sin enlaces rotos. Repo con git local (sin subir a GitHub todavía).
- **2026-11-24, fase 3 (sin portugués):** referencia de las 79 revisiones del diagnóstico con un ancla por revisión (`news-sitemap-schema/checks/`), 16 capturas de pantalla (8 pantallas en inglés y en español, tomadas de los sitios locales de prueba), portadas de los videos y la tabla de enlaces de ayuda para los plugins (`docs/enlaces-de-ayuda.md`, anotada en los pendientes de cada plugin). Repo en GitHub: `RedJaguarAgency/redjaguar-docs` (quedó público).

## Pendientes

- Logo y colores exactos de Red Jaguar (Phi).
- Crear el subdominio `docs.redjaguar.agency` con SSL (Phi).
- Videos de DataMaps en inglés.
- Confirmar las direcciones en español de la tienda (Mi cuenta, licencia donada, términos, reembolsos). Por ahora el manual en español enlaza a las de inglés.
- `bin/deploy.sh` para subir `dist/` (fase 1, cuando exista el subdominio).
- Portugués (`pt-br/`).
- Que cada plugin ponga sus enlaces de ayuda (lo hace la sesión de cada plugin).
- Volver a tomar las capturas cuando cambien las pantallas.
