---
title: WP-CLI
description: Command-line commands of News Sitemap & Schema.
sidebar:
  order: 11
---

If you manage the site with [WP-CLI](https://wp-cli.org/), the plugin adds two commands.

## Run the readiness check

```sh
wp news-schema check
wp news-schema check --format=json --all
```

- `--format`: `table` (default), `json` or `csv`.
- `--all`: also list the checks that passed.

It exits with status 1 when there are errors, so it can run in deploy scripts.

## Remove photo metadata

```sh
wp news-schema strip-metadata --dry-run
wp news-schema strip-metadata 123 456
```

Without IDs, it cleans the recent photos the readiness check reviews. With IDs, only those attachments.

- `--dry-run`: list what would be cleaned without changing any file.

Files are rewritten in place and cannot be restored. The pictures look the same.
