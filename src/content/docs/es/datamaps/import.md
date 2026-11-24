---
title: Importar una planilla
description: Importa registros desde un archivo CSV o XLSX, y deshaz la última importación.
sidebar:
  order: 7
---

En la pestaña **Importar** puedes cargar un archivo CSV o XLSX (la primera hoja), o [sincronizar una hoja de Google](/es/datamaps/google-sheets/).

<video controls preload="metadata" src="/videos/datamaps/2-importa-tu-excel.mp4" width="100%"></video>

## Pasos

1. Haz clic en **Subir y continuar** con tu archivo.
2. Elige la **Fila de encabezados**. Si la fila de arriba de los encabezados nombra grupos de columnas, marca **Usar la fila de arriba de los encabezados como grupos de campos**.
3. Para cada columna, elige el campo al que va, **+ Campo nuevo** para crear uno a partir de la columna, o **— Ignorar —**. Los ejemplos te ayudan a reconocer cada columna.
4. Elige la columna del **ID único**, si tus datos tienen uno. Sirve para actualizar los registros en lugar de duplicarlos cuando vuelvas a importar.
5. Elige el **Estado de los registros importados**. Te recomendamos **Borrador (revisar antes de publicar)**.
6. Elige qué hacer **Si el ID único ya existe**: **Actualizar el registro** u **Omitir la fila**.
7. Importa.

Los campos nuevos empiezan privados: decide cuáles publicar en [Campos](/es/datamaps/fields/).

Las fechas se leen como día/mes/año, año-mes-día o fechas de Excel.

## Después de importar

- Revisa **Geografía → Lugares no encontrados** para los lugares que no coincidieron con una región. Mira [Geografía](/es/datamaps/geography/#lugares-no-encontrados).
- Revisa la pestaña [Calidad](/es/datamaps/quality/).
- Publica los registros desde **Registros**.

## Deshacer la última importación

**Última importación** muestra cuándo y quién importó, y cuántos registros se crearon y actualizaron. **Deshacer: borrar los registros que creó** borra los registros nuevos.

Los registros que ya existían y que la importación actualizó no vuelven a como estaban. Su historial muestra qué cambió.
