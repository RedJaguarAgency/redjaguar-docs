---
title: Privacidad y seguridad
description: Qué se publica, qué se protege y cómo.
sidebar:
  order: 15
---

DataMaps se hizo para datos sobre personas que pueden estar en riesgo. Estas protecciones vienen encendidas.

## Qué llega al sitio público

Solo los **registros publicados** y los **campos públicos** van al archivo de datos que descargan las páginas públicas. Todo lo público lo puede descargar cualquiera, aunque no esté el enlace al CSV. Decide cada campo público con cuidado.

## Lugares

- **Las coordenadas exactas nunca se publican.** En **Ajustes → Precisión en el mapa**, cada registro se muestra en su municipio (recomendado para datos sensibles), o con coordenadas redondeadas a cerca de 1 km.
- **Protección de lugares pequeños:** un municipio con menos registros publicados que el mínimo (3 por defecto) se publica solo con su departamento, en las vistas y también en el archivo público. Con 0 se apaga. Apágala solo cuando el lugar no expone a nadie, por ejemplo en agresiones contra medios.

## Fechas

En cada campo de fecha puedes publicar solo el mes o solo el año. Un día y un lugar juntos pueden señalar a una persona. Mira [Campos](/es/datamaps/fields/#otras-opciones-de-un-campo).

## Cifrado

Con una clave de cifrado en `wp-config.php`, los valores privados y las notas de revisión se guardan cifrados en la base de datos (libsodium). Una copia de la base de datos sin la clave no los revela. Mira [Primeros pasos](/es/datamaps/getting-started/#cifrado-de-los-campos-privados).

No se cifran, porque el mapa y los filtros los necesitan: el lugar, las coordenadas, la fecha y el ID único. Los valores cifrados no se pueden buscar ni filtrar en la lista.

## Formularios

Sin cookies, y la dirección IP nunca se guarda. Mira [Formularios públicos](/es/datamaps/forms/#privacidad-de-quienes-reportan).

## Qué manda DataMaps afuera

Los registros se quedan en tu base de datos. Las páginas públicas cargan el archivo público y los límites desde tu propio sitio. DataMaps se conecta con:

- geoBoundaries, solo cuando descargas límites;
- la tienda de Red Jaguar, para revisar la licencia y las actualizaciones;
- Google Sheets, solo si sincronizas una hoja;
- OpenStreetMap, solo desde el navegador del público y solo si un mapa usa sus calles como mapa base.

## Exportaciones

Las exportaciones en CSV están protegidas contra la inyección de fórmulas.
