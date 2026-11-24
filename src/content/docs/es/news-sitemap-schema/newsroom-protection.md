---
title: Protección de la redacción
description: Limita lo que tu sitio revela sobre las personas que lo hacen.
sidebar:
  order: 9
---

Un sitio de noticias puede revelar sobre las personas que lo hacen más de lo que creen: dónde se tomó una foto, con qué teléfono, el nombre de usuario de cada autor. **News Schema → Protección** lo limita, y el diagnóstico lo busca todos los días.

## Fotos

Las fotos llevan datos ocultos: muchas veces la posición GPS donde se tomaron y el número de serie de la cámara o el teléfono. Cualquiera que descargue la imagen de tu sitio puede leerlos.

- **Quitar los metadatos de las fotos al subirlas** quita la posición GPS, los datos de la cámara y el teléfono, y los campos de autor y comentarios de cada imagen JPEG, WebP y PNG nueva. La imagen no se vuelve a comprimir.
- **Fotos ya subidas:** la pantalla lista las fotos recientes que llevan datos de ubicación o del dispositivo. Haz clic en **Quitar los metadatos de … fotos** para limpiarlas.

:::caution
Los archivos se reescriben en el servidor y no se pueden recuperar. Las imágenes se ven igual. Las copias que ya se descargaron o que están en caché en otro lugar no cambian.
:::

Si usas el plugin gratis **Red Jaguar Newsroom Privacy & Optimizer**, él se encarga de las fotos, y esta sección te lo dice.

Para limpiar las fotos antes de subirlas: en Windows, **Propiedades → Detalles → Quitar propiedades e información personal**. En Mac, abre la foto en Vista Previa, **Herramientas → Mostrar inspector → Eliminar información de ubicación**. En el teléfono, apaga la ubicación de la cámara.

## Lista de usuarios

WordPress deja que cualquiera descargue la lista de tus autores desde su API (`/wp-json/wp/v2/users`). **Ocultar la lista de usuarios a los visitantes** la oculta a quien no ha iniciado sesión. El editor sigue funcionando. Apágalo si una app o un servicio que usas lee esa lista.

## Autores

- **Direcciones de autor** que muestran el nombre de usuario: cámbialas todas a la vez en **News Schema → Autores**. Mira [Direcciones de autor](/es/news-sitemap-schema/authors/#direcciones-de-autor).
- **Proteger mi identidad:** los autores que lo marcan en su perfil no tienen imagen de Gravatar ni perfiles enlazados en los datos estructurados.

## Lo que busca el diagnóstico

- fotos publicadas con su posición GPS o el número de serie de la cámara o el teléfono;
- direcciones de páginas de autor que revelan el nombre de usuario;
- la lista de usuarios que WordPress publica en su API;
- firmas que muestran un nombre de usuario;
- autores que protegen su identidad pero tienen su nombre real en su perfil.
