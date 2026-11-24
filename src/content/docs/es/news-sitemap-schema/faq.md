---
title: Preguntas frecuentes
description: Preguntas comunes sobre News Sitemap & Schema.
sidebar:
  order: 12
  label: Preguntas frecuentes
---

## ¿Esto mete mi sitio en Google News?

Ningún plugin puede prometerlo. Google decide qué sitios aparecen en Google News y ya no hay formulario para pedirlo. Este plugin se encarga de la parte técnica y te dice qué más busca Google, como las políticas editoriales y la información de tus autores.

## Ya uso Yoast SEO o Rank Math. ¿Lo necesito?

Sus versiones gratis no hacen un sitemap de noticias, y sus datos estructurados no incluyen tus políticas editoriales. Este plugin agrega eso a lo que ellos imprimen, sin imprimir una segunda copia. Mira [Datos estructurados](/es/news-sitemap-schema/structured-data/).

## Ya tengo un sitemap de noticias de otro plugin.

El diagnóstico lo detecta. Deja solo uno: dos sitemaps de noticias con las mismas notas confunden a los buscadores.

## El diagnóstico dice que mis fotos tienen datos de ubicación. ¿Cómo los quito?

El plugin puede hacerlo en cada foto que subas y en las que ya están publicadas. Mira [Protección de la redacción](/es/news-sitemap-schema/newsroom-protection/#fotos).

## El diagnóstico dice que a mis imágenes anteriores les faltan recortes.

Google recomienda versiones de 16:9, 4:3 y 1:1 de cada imagen de una nota. WordPress solo las crea para las imágenes subidas después de activar el plugin. Regenera las anteriores con un plugin como Regenerate Thumbnails, o con `wp media regenerate`.

## Mi sitio publica en más de un idioma.

Con Polylang o WPML cada nota usa su propio idioma. Sin ellos, todas las notas usan el idioma del sitio. También puedes poner un idioma por categoría. Mira [Sitemap de noticias → Idioma](/es/news-sitemap-schema/news-sitemap/#idioma).

## ¿Funciona con notas de pago o solo para miembros?

No. El plugin no marca las notas que los lectores tienen que pagar o registrarse para leer. Si tu muro de pago deja el texto completo en la página y solo lo oculta a los lectores, Google puede tomarlo como cloaking, salvo que los datos estructurados digan qué parte no es gratuita (`isAccessibleForFree` y `hasPart`). Revisa si tu plugin de membresías agrega esos datos.

El diagnóstico te avisa cuando detecta Paid Memberships Pro, MemberPress, Restrict Content, Leaky Paywall, Memberful, Simple Membership o WooCommerce Memberships. Las peticiones de donación o de membresía que no ocultan texto no necesitan nada.

## ¿Manda correos?

Solo si activas las [alertas por correo](/es/news-sitemap-schema/readiness-check/#alertas-por-correo). Si no, los resultados están en el plugin, en el escritorio y en Salud del sitio.

## ¿Rastrea a mis visitantes?

No. No pone cookies ni rastrea a los visitantes. El diagnóstico solo pide páginas de tu propio sitio. El único servicio externo con el que habla es la tienda de Red Jaguar, una vez al día, para revisar la licencia y las actualizaciones. Mira [Cómo funcionan las licencias](/es/licenses/#qué-le-manda-el-plugin-a-la-tienda).

## ¿Qué pasa si borro el plugin?

Se borran sus ajustes, los resultados del diagnóstico y los campos del perfil de los autores. Si solo lo desactivas, todo se conserva.

## ¿En qué idiomas está?

Inglés y español (España y México).
