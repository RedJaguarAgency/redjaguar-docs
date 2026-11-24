---
title: Vistas
description: "Las piezas que publicas: portada, mapa, cifras, gráficos, filtros, línea de tiempo, fichas y tabla."
sidebar:
  order: 11
---

Cada vista es una pieza que pones en una página. Las vistas de la misma base en una página comparten los filtros: al elegir un año en los filtros, cambian a la vez el mapa, las cifras y la tabla.

En la pestaña **Vistas**, haz clic en **Nueva vista** y elige su tipo.

<video controls preload="none" poster="/videos/datamaps/3-publica-tu-monitor.jpg" src="/videos/datamaps/3-publica-tu-monitor.mp4" width="100%"></video>

## Tipos de vista

| Vista | Qué muestra |
|---|---|
| **Portada** | Título, texto, mapa y cifras en un solo bloque, para el inicio de una página. |
| **Mapa** | Círculos por región, regiones coloreadas o un punto por registro. |
| **Cifras** | Números grandes: totales, un año, cambio respecto del año anterior. |
| **Gráfico** | Barras, línea, dona, barras al 100 %, calendario, histograma, cuadritos o pirámide. |
| **Filtros** | Año, región y campos de lista. Filtran todas las vistas de la página. |
| **Línea de tiempo** | Registros por año o por mes. |
| **Fichas** | Una ficha por registro, como un memorial, con el registro completo. |
| **Tabla** | Una lista de registros que se puede buscar y ordenar. |

Las vistas solo muestran **registros publicados** y **campos públicos**. Si una vista dice que no hay campos públicos de un tipo adecuado, haz públicos algunos campos en la pestaña [Campos](/es/datamaps/fields/).

## Opciones comunes

- **Nombre en el panel** y **Título en la página (opcional).**
- **Estilo:** el estilo del sitio o colores propios. Mira [Estilo](/es/datamaps/style/).
- **Pie:** muestra "Datos actualizados al…", la fuente y el enlace a la metodología, tomados de los Ajustes de la base.
- **Previsualizar cambios** muestra la vista como la ve el público, solo con registros publicados. Nada cambia en el sitio hasta que haces clic en **Guardar vista**.

## Mapa

- **Modo:** círculos por región (tamaño = número de registros), regiones coloreadas (intensidad = número de registros) o un punto por registro (agrupados al alejarse).
- **Nivel:** departamento o municipio.
- **Mapa base:** ninguno (solo las regiones, sin conexiones a otros servidores) o calles de OpenStreetMap (el navegador del público se conecta a tile.openstreetmap.org).
- Leyenda, zoom, nombres de las regiones, un panel con las cifras de cada región al tocarla, y más en las opciones de la vista.
- La ventana del mapa muestra los campos públicos marcados como **Ventana del mapa**.

El modo de puntos nunca usa coordenadas exactas. Mira [Privacidad y seguridad](/es/datamaps/privacy-and-security/).

## Cifras

Cada cifra puede ser el total de registros, los registros de un año, el cambio respecto del año anterior, las regiones con registros, los registros con un valor, un porcentaje, el promedio de un número o el valor más común de un campo. Las etiquetas son automáticas si las dejas vacías.

El cambio compara el año en curso con el mismo periodo del año anterior, hasta la fecha del registro más reciente, y lo dice.

## Gráficos

| Tipo | Para |
|---|---|
| Barras | Registros por valor de un campo de lista. |
| Dona | Las partes del total, hasta 5 (el resto va a "Otros"). |
| Barras al 100 % | Las partes en cada región o año. |
| Línea | Registros a lo largo del tiempo, hasta 4 líneas. |
| Calendario | Registros por mes, una fila por año. |
| Histograma | Cómo se reparte un número: edades, montos. |
| Cuadritos | Un valor de cada 100 ("1 de cada 3"). |
| Pirámide | Dos grupos de edad frente a frente. |

Al tocar una barra o una parte de la dona se filtran todas las vistas de la página. Las paletas sirven para personas con daltonismo.

## Filtros

Botones o listas desplegables para el año, la región y los campos de lista públicos que elijas. Con **Compartir** encendido, los filtros se guardan en la dirección de la página, con un botón para copiar el enlace.

## Portada

Antetítulo, título, texto, un botón, el mapa y las cifras. Usa el nivel de título 1 cuando la portada es el título principal de la página, como en una página de inicio.

## El público puede

- descargar un mapa como imagen (**Descargar imagen**);
- descargar los datos públicos en CSV, si **Datos abiertos** está encendido en los Ajustes.
