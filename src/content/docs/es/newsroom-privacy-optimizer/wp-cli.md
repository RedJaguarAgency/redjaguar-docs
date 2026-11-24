---
title: WP-CLI
description: Comandos de Newsroom Privacy & Optimizer para la línea de comandos.
sidebar:
  order: 8
---

Si manejas el sitio con [WP-CLI](https://wp-cli.org/):

```sh
wp pmpo audit
wp pmpo clean --yes
wp pmpo delete-originals --yes
```

| Comando | Qué hace |
|---|---|
| `wp pmpo audit` | Revisa cada imagen y lista lo que encontró. No cambia nada. |
| `wp pmpo clean` | Quita los datos ocultos de cada imagen que los tenga. |
| `wp pmpo delete-originals` | Borra los originales a tamaño completo. **No se puede deshacer.** |

`--yes` se salta la confirmación.
