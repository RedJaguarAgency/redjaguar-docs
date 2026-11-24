---
title: Frequently asked questions
description: Common questions about Newsroom Privacy & Optimizer.
sidebar:
  order: 9
  label: FAQ
---

## Does it send my images anywhere?

No. Every image is processed on your own server, with PHP. The plugin makes no request to any external service, and collects no data about you or your readers.

## Will my images lose quality?

Removing hidden data does not recompress the picture. Publishing photos as WebP or AVIF does, like every size WordPress makes: at the default quality (82) the difference is not visible in news photos, and you can raise it or keep the original format. A photo stored rotated by the phone is straightened and saved again at high quality.

## Are images I uploaded before cleaned?

Not automatically. Open **Red Jaguar Newsroom → Overview**, review the media library and clean the images it lists. See [Your media library](/newsroom-privacy-optimizer/media-library/).

## Can I undo deleting the originals?

No. Without the original, WordPress cannot make sizes larger than the published copy later. That is why originals of images already uploaded are only deleted when you confirm it.

## Which formats are cleaned?

JPEG, PNG and WebP. HEIC, AVIF and GIF are not cleaned yet; the review lists them.

## Does it need HTTPS?

It works without it, but the overview warns you: without HTTPS, the photo travels unencrypted from the reporter's computer to your server, with all its hidden data, before the plugin can clean it.

## Does it work with News Sitemap & Schema?

Yes. When both are active, News Sitemap & Schema leaves photo cleaning to this plugin and says so in its Protection screen.

## Is it really free?

Yes, forever, updates included. There is no paid version, no account and no API key.
