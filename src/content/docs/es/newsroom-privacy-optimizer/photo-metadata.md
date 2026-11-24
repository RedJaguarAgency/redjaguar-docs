---
title: Acerca de la metadata de las fotos
description: "Una guía corta para redacciones: qué es la metadata, por qué importa y buenas prácticas."
sidebar:
  order: 7
---

Esta guía también está dentro del plugin, en **Red Jaguar Newsroom → Acerca de**.

## ¿Qué es la metadata?

Toda foto tiene dos partes: la imagen que ves, y datos sobre la imagen que no ves. Esa segunda parte es la metadata. La cámara o el teléfono la escriben solos: dónde y cuándo se tomó la foto, con qué dispositivo, y más. Viaja dentro del archivo a donde vaya la foto: un correo, un chat, tu sitio web.

Piénsalo como el sobre de una carta: puedes compartir la carta y olvidar que el sobre tiene escrita la dirección de quien la manda.

## Por qué importa para los medios

- **Se puede identificar a una fuente.** Una foto que manda una fuente puede llevar el lugar donde se tomó: su casa, su trabajo o donde se esconde.
- **Y a una periodista.** Las fotos tomadas con el mismo teléfono comparten su número de serie, así que una foto sin firma se puede vincular con quien la tomó.
- **Lo recortado puede volver.** Muchas cámaras guardan una copia pequeña de la foto sin recortar. Una cara que se quitó de la imagen puede seguir dentro del archivo.
- **Ya pasó.** En 2012 un medio publicó la foto de un hombre que se escondía de las autoridades. Las coordenadas GPS del archivo mostraban dónde estaba, y lo encontraron días después.
- **Es fácil de revisar.** Hay herramientas gratuitas que muestran en segundos la metadata de cualquier imagen descargada de tu sitio.

## Buenas prácticas

- **Pide las fotos como fotos.** Muchas apps de mensajería quitan la metadata de una foto enviada como foto, pero la conservan cuando la misma imagen se manda como documento o archivo.
- **Apaga la ubicación de la cámara** en los teléfonos que se usan para reportear.
- **Deja los originales sensibles fuera del sitio.** Guárdalos en un dispositivo cifrado y sube solo la versión que vas a publicar.
- **Usa HTTPS.** El plugin limpia las fotos cuando llegan a tu servidor; en el camino todavía llevan todos sus datos.
- **Revisa la biblioteca después de una importación.** Las imágenes agregadas por FTP, una migración u otro plugin no se limpian al subirse.
- **Difumina o recorta lo que se ve:** caras, placas, letreros, pantallas, reflejos y lugares reconocibles.
- **Escribe texto alternativo.** Describe la imagen a las personas que usan lectores de pantalla, y ayuda a los buscadores.

## Glosario

**EXIF**
: Los datos que las cámaras y los teléfonos escriben en las fotos: fecha y hora, dispositivo, ajustes y muchas veces la ubicación GPS.

**Ubicación GPS**
: Las coordenadas del lugar donde se tomó la foto, con precisión de unos pocos metros.

**Número de serie**
: El identificador único de una cámara, un teléfono o un lente. Vincula todas las fotos tomadas con el mismo dispositivo.

**XMP**
: Metadata que escriben los programas de edición como Lightroom o Photoshop: autor, historial de ediciones, a veces la ubicación.

**IPTC**
: Campos que usan las agencias y las redacciones: pie de foto, autor, crédito, copyright, ciudad.

**Miniatura oculta**
: Una vista previa pequeña dentro del archivo, que puede mostrar la foto como era antes de recortarla.

**Credenciales de contenido (C2PA)**
: Una firma digital que prueba quién hizo o editó una imagen, y con qué. Como lo prueba, también los identifica.

**Original a tamaño completo**
: La foto como se subió. WordPress la guarda en el servidor cuando publica una copia más pequeña, cuyo nombre termina en "-scaled".

**HEIC**
: El formato que usan los iPhone para las fotos.
