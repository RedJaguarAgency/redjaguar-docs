---
title: Campos
description: Qué guarda cada registro, cómo se agrupan los campos y cuáles son públicos.
sidebar:
  order: 4
---

En la pestaña **Campos** decides qué guarda cada registro. Haz clic en **Agregar campo** o **Agregar grupo**, arrastra para cambiar el orden y haz clic en **Guardar campos**.

## Tipos de campo

| Tipo | Para |
|---|---|
| Texto, Texto largo | Nombres, descripciones, historias. |
| Número | Edades, montos. Puede llenar una lista sola (mira abajo). |
| Fecha | La fecha de cada caso. |
| Lista (una opción), Lista (varias opciones) | Categorías. Son los campos con los que se filtra y se hacen gráficos. Opciones, una por línea. |
| Sí / No / Sin dato | Preguntas con la respuesta "no sabemos". |
| Enlace, Correo, Teléfono | Contactos y fuentes. |
| Lugar (región) | **Necesario para el mapa.** El nivel 1 es el departamento, estado o provincia; el nivel 2, el municipio, cantón o comunidad. |
| Coordenadas (latitud, longitud) | Opcional. Nunca se publican exactas. |

## Público o privado

**Todo campo empieza privado.** Los campos privados nunca salen del panel.

Los campos públicos van al archivo de datos que descargan las páginas públicas: todo lo que se puede filtrar, contar o mostrar en el sitio **lo puede descargar cualquiera**. Los nombres, direcciones y contactos deberían quedar privados.

Para cada campo público eliges dónde se muestra: **Ventana del mapa**, **Tabla**, **Filtro**.

## Otras opciones de un campo

Haz clic en **Más opciones** en un campo:

- **Obligatorio:** los formularios no dejan enviarlo vacío. Las importaciones pueden saltarlo; [Calidad](/es/datamaps/quality/) lista los vacíos.
- **Texto de ayuda (formularios):** se muestra debajo del campo en los formularios públicos.
- **En el sitio público, mostrar** (fechas): la fecha completa, **Solo mes y año** o **Solo el año**. El panel guarda la fecha completa. Un día y un lugar juntos pueden señalar a una persona.
- **Llenar solo a partir de un número** (listas): un campo calculado. Por ejemplo, un rango de edad que se llena a partir de la edad, con reglas como `0-12 = Niña (0-12)` o `60+ = 60 o más`. Los registros sin número conservan la opción elegida a mano.

## Cambiar las opciones de una lista

Si cambias el nombre de una opción o la quitas y todavía la usan algunos registros, DataMaps te pregunta qué hacer con ellos: elige la opción nueva para cada uno, o déjalos como están. Cada cambio queda en el historial del registro.
