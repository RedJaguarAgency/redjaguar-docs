---
title: Lighter images
description: Publish new photos in WebP or AVIF, and choose their size and quality.
sidebar:
  order: 6
---

The plugin is about privacy first. Optimization is optional and runs on the same images. It is in **Red Jaguar Newsroom → Settings → Lighter images**, and applies to new images.

## Format of photos

- **Automatic:** recommended. WebP when the server supports it: about a third lighter than JPEG, with the same look. If another optimization plugin already converts your images, this one steps aside.
- **WebP:** supported by every current browser.
- **AVIF:** even lighter than WebP, but slower to make, and some older browsers and social networks do not show it.
- **Keep the original format:** JPEG stays JPEG.

Only new photos (JPEG and iPhone HEIC) are converted: the published image and all its sizes. PNG files, usually graphics and screenshots with text, keep their format so they stay sharp. Images already in the media library are not converted.

## Quality

From 40 to 100. 0 uses the WordPress default (82), a good balance for news photos: the difference is not visible. Lower values make lighter but blurrier images.

## Maximum size

The longest side of the copy WordPress publishes, from 1,000 to 10,000 pixels (WordPress uses 2,560). Larger photos are reduced. 0 publishes photos at full size.

## Why lighter images matter

Lighter images make pages load faster, especially on phones, and loading speed is part of how Google ranks pages (Core Web Vitals).

The overview shows what your server can do: its image library, and whether it can write WebP and AVIF.
