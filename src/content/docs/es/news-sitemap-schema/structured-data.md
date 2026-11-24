---
title: Datos estructurados
description: Cómo el plugin les dice a los buscadores qué es cada página, solo o con Yoast SEO y Rank Math.
sidebar:
  order: 6
---

Los datos estructurados son información en el código de cada página que les dice a los buscadores qué es: una nota, quién la escribió, qué redacción la publicó, con qué logo y qué políticas editoriales. Los lectores no los ven.

El plugin publica:

- **NewsArticle** en cada nota: título, fechas, imágenes y autores.
- **NewsMediaOrganization** para tu redacción: nombre, logo, ubicación y las direcciones de tus [políticas editoriales](/es/news-sitemap-schema/editorial-policies/).
- **Autores** con cargo, biografía y perfiles públicos, tomados del [perfil de cada autor](/es/news-sitemap-schema/authors/).
- **Crédito de la foto**, del campo "Crédito" de cada imagen en la biblioteca de medios.

## Con Yoast SEO o Rank Math

Abre **News Schema → Schema**. La pantalla te dice quién imprime los datos estructurados de tu sitio:

- **Yoast SEO o Rank Math:** el plugin completa lo que ellos imprimen en lugar de imprimir una segunda copia. Las notas se vuelven NewsArticle y la organización recibe los datos y las políticas de tu redacción.
- **Otro plugin de SEO que todavía no puede ajustar:** para no duplicar, el plugin no imprime nada. Pon el tipo de artículo NewsArticle en ese plugin.
- **Ningún plugin de SEO:** el plugin imprime todo.

## Apagarlos

**Agregar o ajustar los datos estructurados** viene encendido, y te recomendamos dejarlo así. Si lo apagas, el plugin no toca los datos estructurados, y el sitemap de noticias, el diagnóstico y la protección de la redacción siguen funcionando. Apágalo solo si tu tema u otro plugin ya los maneja como quieres.

## Tipo de nota por categoría

Las notas se marcan como NewsArticle. En la misma pantalla, en **Tipo de nota por categoría**, puedes elegir un tipo más específico para categorías como Opinión o Análisis. Cada nota puede cambiarlo en el editor, en **Tipo de artículo**.

## Revisa el resultado

Pega la dirección de una nota reciente en la [Prueba de resultados enriquecidos](https://search.google.com/test/rich-results) de Google. Debe mostrar una nota sin errores. Es una de las [revisiones manuales](/es/news-sitemap-schema/readiness-check/#revisiones-manuales).
