---
title: Sincronizar con Google Sheets
description: Sigue trabajando en una hoja de Google y deja que la base la siga.
sidebar:
  order: 8
---

Si tu equipo trabaja en una hoja de Google, la base puede seguirla: DataMaps lee la hoja cada 1, 6 o 24 horas, agrega las filas nuevas y actualiza las que cambiaron.

:::caution[Quién puede leer la hoja]
Para que se pueda leer, la hoja tiene que estar compartida con "Cualquier persona que tenga el vínculo" o publicada en la web. Entonces **cualquiera que consiga ese enlace puede leer toda la hoja, columnas privadas incluidas**. Para datos sensibles, sincroniza una copia solo con las columnas que necesitas.
:::

## Conectar una hoja

1. En **Importar → Sincronizar con Google Sheets**, pega el **Enlace de la hoja**. DataMaps lee la pestaña que estaba abierta cuando copiaste el enlace.
2. Haz clic en **Conectar y elegir columnas**.
3. Haz coincidir las columnas con los campos, como en una [importación](/es/datamaps/import/). **Elige la columna del ID único**: así cada sincronización sabe qué filas ya están.
4. Elige cada cuánto y haz clic en **Importar y mantener sincronizada**.

El enlace se guarda cifrado cuando el sitio tiene clave de cifrado.

## Cómo funciona la sincronización

- Las filas nuevas se agregan y las filas con un ID conocido se actualizan.
- Las filas que se borran de la hoja **no** se borran en DataMaps.
- Los cambios que hagas en DataMaps a un registro sincronizado **se sobrescriben** con la hoja en la siguiente sincronización. Edita en la hoja.
- Las columnas se encuentran por su encabezado, así que la hoja puede ganar columnas o cambiarlas de orden. **No les cambies el nombre a las columnas que usas.**
- Una hoja larga se lee por partes: la siguiente sincronización sigue con el resto.

**Sincronizar ahora** la lee en ese momento. **Dejar de sincronizar** la desconecta; los registros se quedan.
