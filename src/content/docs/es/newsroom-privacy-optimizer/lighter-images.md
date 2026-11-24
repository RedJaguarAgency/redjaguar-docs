---
title: Imágenes más livianas
description: Publica las fotos nuevas en WebP o AVIF, y elige su tamaño y su calidad.
sidebar:
  order: 6
---

El plugin es primero de privacidad. La optimización es opcional y trabaja sobre las mismas imágenes. Está en **Red Jaguar Newsroom → Ajustes → Imágenes más livianas**, y se aplica a las imágenes nuevas.

## Formato de las fotos

- **Automático:** recomendado. WebP cuando el servidor lo permite: cerca de un tercio más liviano que JPEG, con el mismo aspecto. Si otro plugin de optimización ya convierte tus imágenes, este se hace a un lado.
- **WebP:** lo muestran todos los navegadores actuales.
- **AVIF:** todavía más liviano que WebP, pero tarda más en generarse, y algunos navegadores viejos y redes sociales no lo muestran.
- **Conservar el formato original:** el JPEG se queda en JPEG.

Solo se convierten las fotos nuevas (JPEG y HEIC de iPhone): la imagen publicada y todos sus tamaños. Los PNG, que suelen ser gráficos y capturas con texto, conservan su formato para que se vean nítidos. Las imágenes que ya están en la biblioteca no se convierten.

## Calidad

De 40 a 100. Con 0 se usa el valor de WordPress (82), un buen equilibrio para fotos de noticias: la diferencia no se nota. Los valores más bajos hacen imágenes más livianas pero más borrosas.

## Tamaño máximo

El lado más largo de la copia que publica WordPress, de 1,000 a 10,000 píxeles (WordPress usa 2,560). Las fotos más grandes se reducen. Con 0 se publican a tamaño completo.

## Por qué importan las imágenes livianas

Las imágenes livianas hacen que las páginas carguen más rápido, sobre todo en el celular, y la velocidad de carga es parte de cómo Google ordena las páginas (Core Web Vitals).

El panel muestra lo que puede hacer tu servidor: su biblioteca de imágenes, y si puede generar WebP y AVIF.
