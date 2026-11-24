---
title: Sitemap de noticias
description: La lista de tus notas más recientes, en el formato que lee Google News.
sidebar:
  order: 5
---

Un sitemap de noticias lista las notas de las últimas 48 horas, con su título, fecha e idioma, para que los buscadores encuentren rápido las notas nuevas. El plugin lo hace y lo mantiene al día.

## La dirección de tu sitemap

Abre **News Schema → Sitemap**. Arriba ves la dirección, normalmente `https://tu-sitio/news-sitemap.xml`.

**Envíala una sola vez** en [Google Search Console](https://search.google.com/search-console) → **Sitemaps**. No hace falta avisarle a Google cada vez que publicas: lee el sitemap por su cuenta.

Si lo abres en el navegador, el sitemap se ve como XML simple. Eso es lo que leen los buscadores. La misma pantalla muestra una lista legible de las notas que tiene ahora.

## Qué entra

- Las notas publicadas en las **últimas 48 horas**, hasta 1,000.
- Solo los **tipos de contenido** que marques. Por defecto, las entradas. Páginas como "Quiénes somos" no van aquí.
- Solo las **categorías** que marques. Si no marcas ninguna, entran todas.

En un día tranquilo el sitemap puede estar vacío: "No hay notas publicadas en las últimas 48 horas." Es normal. Se vuelve a llenar con la siguiente nota.

## Dejar fuera una nota

En el editor de bloques, en el panel de ajustes de la nota, marca **Excluir del sitemap de noticias**. Mira [Revisión antes de publicar](/es/news-sitemap-schema/block-editor/).

## Idioma

Cada nota aparece con su idioma:

- con **Polylang** o **WPML**, el idioma de cada nota;
- si no, el idioma del sitio, o el de su categoría si le pusiste uno en **Idioma por categoría**, en la misma pantalla. Sirve, por ejemplo, para una sección "English". Una nota en varias categorías toma el idioma de la primera que tenga uno.

## Otros sitemaps de noticias

Si otro plugin (Yoast News SEO, Rank Math o XML Sitemap & Google News) ya publica un sitemap de noticias, la pantalla te avisa. **Deja solo uno**: dos sitemaps con las mismas notas confunden a los buscadores.

El plugin también agrega su sitemap al índice de sitemaps de Yoast SEO y Rank Math.

## Caché

Cuando el sitemap cambia, el plugin lo limpia en LiteSpeed Cache, W3 Total Cache, WP Super Cache, WP Rocket, Nginx Helper y Cloudflare. Si usas otra caché, revisa que `news-sitemap.xml` no se guarde por mucho tiempo.
