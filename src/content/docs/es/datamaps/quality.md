---
title: Calidad de los datos
description: La revisión de todos los registros que encuentra lo que hay que corregir antes de publicar.
sidebar:
  order: 9
---

La pestaña **Calidad** revisa todos los registros de la base cuando la abres. Corrige los errores antes de publicar; lo demás es para revisar.

| Problema | Por qué importa |
|---|---|
| Valores que no están entre las opciones de una lista | No coinciden con los filtros y se ven como valores sueltos. Casi siempre son errores de escritura u opciones que cambiaron de nombre. |
| Campos obligatorios vacíos | Los registros importados de una planilla pueden saltarse los campos obligatorios. |
| Fechas que no se pueden leer | No cuentan en los años ni en las líneas de tiempo. |
| Fechas en el futuro | Muchas veces un día y un mes invertidos, o un año equivocado. |
| Fechas antes de 1900 | Seguramente un error en el año. |
| Valores que no son números, o números negativos | Quedan fuera de los promedios. |
| Lugares no encontrados | No se ven en el mapa. Mira [Geografía](/es/datamaps/geography/#lugares-no-encontrados). |
| Posibles duplicados | Registros con la misma fecha y el mismo lugar: quizás el mismo caso reportado dos veces. |
| Reportes de formularios que todavía no son públicos | Esperan revisión en Registros. |
| Publicados sin verificar | Registros públicos que nadie marcó como verificados. Solo es un problema si tu método lo pide. |

Haz clic en un problema para ver solo los registros que lo tienen. **Volver a Calidad** regresa a la lista.
