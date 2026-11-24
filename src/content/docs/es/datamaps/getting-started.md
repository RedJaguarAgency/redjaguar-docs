---
title: Primeros pasos
description: Instala DataMaps, activa la licencia y prepara el sitio antes de cargar datos reales.
sidebar:
  order: 2
---

## 1. Instala y activa

1. [Instala el plugin y activa la licencia](/es/licenses/install-and-activate/). La pantalla de la licencia es **Red Jaguar DataMaps → Licencia de DataMaps**.
2. Sin licencia, el panel solo muestra la pantalla de la licencia y los mapas no se ven en el sitio público. No se borra ningún dato.

## 2. Antes de cargar datos reales: seguridad (5 minutos)

Hazlo una sola vez, antes de importar casos.

### Cifrado de los campos privados

1. Abre cualquier base y ve a **Ajustes → Cifrado de los campos privados**.
2. Copia la línea que empieza con `define( 'RJDM_ENCRYPTION_KEY'…`. La clave se generó solo para ti y no se guarda en ningún lado.
3. Pégala en `wp-config.php`, arriba de la línea "That's all, stop editing". Si no sabes cómo, pídeselo a tu proveedor de hosting o a quien administra el sitio.
4. Vuelve a la misma pantalla y haz clic en **Cifrar ahora los registros existentes**, si ya hay registros.

:::danger[Guarda una copia de la clave]
Guarda la clave en un gestor de contraseñas. Si se pierde, los valores privados no se pueden recuperar, ni siquiera Red Jaguar puede. No la cambies después, y respalda `wp-config.php` aparte de la base de datos.
:::

### Si el sitio está detrás de Cloudflare u otro proxy

Agrega también esta línea a `wp-config.php`:

```php
define( 'RJDM_CLIENT_IP_HEADER', 'HTTP_CF_CONNECTING_IP' );
```

Sin ella, todas las personas que usan los formularios públicos comparten el mismo límite de envíos y se bloquean entre sí. La dirección IP nunca se guarda.

### Verificación en dos pasos

Activa la verificación en dos pasos para las cuentas de administración y edición, con el plugin de 2FA que use tu sitio.

## 3. Pruébalo con un ejemplo (opcional)

En **Red Jaguar DataMaps → Bases de datos**, en **Pruébalo con un ejemplo**, haz clic en **Crear ejemplo**. Crea una base con 120 casos **ficticios** en Nicaragua, sus límites, un mapa, cifras, filtros, una tabla, un formulario y una página privada que los muestra.

:::caution
Borra el ejemplo antes de publicar datos reales: en la base de ejemplo, **Ajustes → Borrar base de datos** (escribe `BORRAR`), y borra su página.
:::

## 4. Crea tu base

Sigue [Bases de datos](/es/datamaps/datasets/). La pestaña **Resumen** de cada base muestra los pasos que faltan para publicarla.
