---
title: WP-CLI
description: Comandos de News Sitemap & Schema para la línea de comandos.
sidebar:
  order: 11
---

Si manejas el sitio con [WP-CLI](https://wp-cli.org/), el plugin agrega dos comandos.

## Correr el diagnóstico

```sh
wp news-schema check
wp news-schema check --format=json --all
```

- `--format`: `table` (por defecto), `json` o `csv`.
- `--all`: también lista las revisiones que pasaron.

Termina con estado 1 cuando hay errores, así que sirve en scripts de despliegue.

## Quitar los metadatos de las fotos

```sh
wp news-schema strip-metadata --dry-run
wp news-schema strip-metadata 123 456
```

Sin IDs, limpia las fotos recientes que revisa el diagnóstico. Con IDs, solo esos adjuntos.

- `--dry-run`: lista lo que se limpiaría sin cambiar ningún archivo.

Los archivos se reescriben en su lugar y no se pueden recuperar. Las imágenes se ven igual.
