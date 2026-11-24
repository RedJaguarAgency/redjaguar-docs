# Enlaces de ayuda desde los plugins

Qué página del manual le corresponde a cada pantalla de cada plugin. Las direcciones son estables: no se cambian, y si una se mueve se deja una redirección en `astro.config.mjs`.

## Regla para todos los plugins

- Base: `https://docs.redjaguar.agency`.
- Idioma: si `get_user_locale()` empieza con `es`, se agrega `/es` después de la base. Si no, la versión en inglés (raíz). Cuando exista el portugués, `pt` irá a `/pt-br`.
- El enlace abre en una pestaña nueva, con el texto "Help" / "Ayuda" (traducible) y el aviso de "(opens in a new tab)" que ya usan los plugins.
- Un lugar sugerido: el botón "Help" de WordPress (`get_current_screen()->add_help_tab()` + `set_help_sidebar()`), o un enlace junto al título de la pantalla.

Ejemplo en PHP:

```php
function docs_url( string $path ): string {
	$base = 'https://docs.redjaguar.agency';
	if ( 0 === strpos( get_user_locale(), 'es' ) ) {
		$base .= '/es';
	}
	return $base . '/' . ltrim( $path, '/' );
}
```

## News Sitemap & Schema

| Pantalla (`page=`) | Ruta del manual |
|---|---|
| `news-sitemap-schema` (Panel) | `news-sitemap-schema/getting-started/` |
| `news-sitemap-schema-check` (Diagnóstico) | `news-sitemap-schema/readiness-check/` |
| cada problema del diagnóstico | `news-sitemap-schema/checks/#<id de la revisión>` (por ejemplo `#author_slug`) |
| `news-sitemap-schema-publisher` | `news-sitemap-schema/publisher/` |
| `news-sitemap-schema-policies` | `news-sitemap-schema/editorial-policies/` |
| `news-sitemap-schema-sitemap` | `news-sitemap-schema/news-sitemap/` |
| `news-sitemap-schema-schema` | `news-sitemap-schema/structured-data/` |
| `news-sitemap-schema-authors` | `news-sitemap-schema/authors/` |
| `news-sitemap-schema-protection` | `news-sitemap-schema/newsroom-protection/` |
| `news-sitemap-schema-about` | `news-sitemap-schema/glossary/` |
| `news-sitemap-schema-license` | `licenses/` |
| Panel del editor de bloques | `news-sitemap-schema/block-editor/` |

Si se agrega una revisión nueva al diagnóstico, hay que agregar su fila en `checks.md` (los dos idiomas) con su id como ancla.

## DataMaps

| Pantalla | Ruta del manual |
|---|---|
| `page=rjdm` (Bases de datos) | `datamaps/datasets/` |
| `page=rjdm-dataset&tab=overview` | `datamaps/datasets/` |
| `tab=fields` | `datamaps/fields/` |
| `tab=geo` | `datamaps/geography/` |
| `tab=records` | `datamaps/records/` |
| `tab=quality` | `datamaps/quality/` |
| `tab=import` | `datamaps/import/` (con hoja de Google: `datamaps/google-sheets/`) |
| `tab=views` | `datamaps/views/` (Mostrar en otro sitio: `datamaps/place-views/#show-in-another-site`, en español `#mostrar-en-otro-sitio`) |
| `tab=forms` | `datamaps/forms/` |
| `tab=settings` | `datamaps/datasets/#settings` (en español `#ajustes`); cifrado: `datamaps/getting-started/#encryption-of-private-fields` (`#cifrado-de-los-campos-privados`) |
| `page=rjdm-style` | `datamaps/style/` |
| Acerca de | `datamaps/` |
| Licencia de DataMaps | `licenses/` |

Ojo: las anclas cambian con el idioma (Starlight las arma con el título). Las rutas de página son iguales en los dos idiomas.

## Newsroom Privacy & Optimizer

| Pantalla (`page=`) | Ruta del manual |
|---|---|
| `pmpo` (Panel) | `newsroom-privacy-optimizer/media-library/` |
| `pmpo-settings` | `newsroom-privacy-optimizer/new-images/` |
| `pmpo-about` | `newsroom-privacy-optimizer/photo-metadata/` |

Al ser un plugin de WordPress.org, el enlace al manual externo está permitido; no debe cargar nada de afuera, solo enlazar.
