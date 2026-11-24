---
title: Formularios públicos
description: Deja que otras personas envíen registros, siempre revisados antes de publicar.
sidebar:
  order: 10
---

Los formularios públicos permiten que otras personas envíen registros: testigos, organizaciones aliadas, lectores. **Lo que envían queda pendiente hasta que alguien de tu equipo lo revisa.**

## Crear un formulario

1. En la pestaña **Formularios**, haz clic en **Nuevo formulario**.
2. Marca los campos que pide el formulario y arrastra para cambiar el orden. Los campos obligatorios se definen en la pestaña [Campos](/es/datamaps/fields/).
3. Escribe:
   - **Introducción:** di qué se hará con los datos, que se revisan antes de publicarse y cómo reportar de forma segura.
   - **Casilla de consentimiento (opcional).**
   - **Botón** y **Mensaje después de enviar.**
4. **Avisar a:** un correo que recibe un aviso cuando hay reportes por revisar, como máximo uno por hora. El aviso nunca incluye el contenido de los reportes.
5. Haz clic en **Guardar formulario**.

Ponlo en una página con su shortcode, `[datamaps_form id="…"]`, que aparece en la lista de formularios.

:::caution
**Publicar sin revisión (no recomendado)** publica en el momento lo que la gente envía. Déjalo apagado salvo que confíes en todas las personas que pueden llegar al formulario.
:::

## Privacidad de quienes reportan

- Los formularios no ponen cookies.
- La dirección IP nunca se guarda: solo un código que cambia cada día, para limitar cuántos reportes se pueden enviar en poco tiempo.
- Si el formulario pide una ubicación, solo se usa para poner el reporte en el mapa, y se muestra aproximada.

Si tu sitio está detrás de Cloudflare, mira [Primeros pasos](/es/datamaps/getting-started/#si-el-sitio-está-detrás-de-cloudflare-u-otro-proxy).
