---
title: WP-CLI
description: Command-line commands of Newsroom Privacy & Optimizer.
sidebar:
  order: 8
---

If you manage the site with [WP-CLI](https://wp-cli.org/):

```sh
wp pmpo audit
wp pmpo clean --yes
wp pmpo delete-originals --yes
```

| Command | What it does |
|---|---|
| `wp pmpo audit` | Reviews every image and lists what it found. It changes nothing. |
| `wp pmpo clean` | Removes the hidden data of every image that has it. |
| `wp pmpo delete-originals` | Deletes the full-size originals. **This cannot be undone.** |

`--yes` skips the confirmation.
