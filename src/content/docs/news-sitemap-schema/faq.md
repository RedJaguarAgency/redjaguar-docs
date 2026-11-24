---
title: Frequently asked questions
description: Common questions about News Sitemap & Schema.
sidebar:
  order: 12
  label: FAQ
---

## Will this get my site into Google News?

No plugin can promise that. Google decides which sites appear in Google News, and there is no application form any more. This plugin takes care of the technical part and tells you what else Google looks for, such as editorial policies and information about your authors.

## I already use Yoast SEO or Rank Math. Do I need this?

Their free versions do not make a news sitemap, and their markup does not include your editorial policies. This plugin adds that to their markup instead of printing a second copy. See [Structured data](/news-sitemap-schema/structured-data/).

## I already have a news sitemap from another plugin.

The readiness check detects it. Keep only one: two news sitemaps with the same articles confuse search engines.

## The check says my photos have location data. How do I remove it?

The plugin can do it for every upload and for the photos already published. See [Newsroom protection](/news-sitemap-schema/newsroom-protection/#photos).

## The check says my older images lack crops.

Google recommends 16:9, 4:3 and 1:1 versions of each article image. WordPress only creates them for images uploaded after the plugin is active. Regenerate the older ones with a plugin such as Regenerate Thumbnails, or with `wp media regenerate`.

## My site publishes in more than one language.

With Polylang or WPML each article uses its own language. Without them, every article uses the site language. You can also set a language per category. See [News sitemap → Language](/news-sitemap-schema/news-sitemap/#language).

## Does it support paywalled or members-only articles?

No. The plugin does not mark articles that readers must pay or register to read. If your paywall keeps the full text in the page and only hides it from readers, Google may treat it as cloaking unless the structured data says which part is not free (`isAccessibleForFree` and `hasPart`). Check whether your membership plugin adds that markup.

The readiness check warns you when it detects Paid Memberships Pro, MemberPress, Restrict Content, Leaky Paywall, Memberful, Simple Membership or WooCommerce Memberships. Donation or membership requests that do not hide any text need nothing.

## Does it send emails?

Only if you turn on [email alerts](/news-sitemap-schema/readiness-check/#email-alerts). Otherwise the results are in the plugin, on the Dashboard and in Site Health.

## Does it track my visitors?

No. It sets no cookies and does not track visitors. The readiness check only requests pages of your own site. The only outside service it talks to is the Red Jaguar store, once a day, to check the license and updates. See [How licenses work](/licenses/#what-the-plugin-sends-to-the-store).

## What happens if I delete the plugin?

Its settings, the results of the check and the author profile fields are deleted. If you only deactivate it, everything is kept.

## Which languages is it available in?

English and Spanish (Spain and Mexico).
