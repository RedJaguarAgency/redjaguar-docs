---
title: News sitemap
description: The list of your latest articles, in the format Google News reads.
sidebar:
  order: 5
---

A news sitemap lists the articles of the last 48 hours, with their title, date and language, so search engines find new articles quickly. The plugin makes it and keeps it up to date.

## Your sitemap address

Open **News Schema → Sitemap**. At the top you see the address, usually `https://your-site/news-sitemap.xml`.

**Submit it once** in [Google Search Console](https://search.google.com/search-console) → **Sitemaps**. You do not need to notify Google each time you publish: it reads the sitemap on its own.

Opened in a browser, the sitemap shows plain XML. That is what search engines read. The same screen shows a readable list of the articles in it now.

## What goes in

- Articles published in the **last 48 hours**, up to 1,000.
- Only the **content types** you check. By default, posts. Pages such as "About us" do not belong here.
- Only the **categories** you check. Leave all unchecked to include every category.

On a quiet day the sitemap may be empty: "No articles published in the last 48 hours." That is normal. It fills up again with the next article.

## Leave out a single article

In the block editor, in the article settings panel, check **Exclude from the news sitemap**. See [Checks before publishing](/news-sitemap-schema/block-editor/).

## Language

Each article is listed with its language:

- with **Polylang** or **WPML**, the language of each article;
- otherwise, the site language, or the language of its category if you set one in **Language by category** on the same screen. Useful for an "English" section, for example. An article in several categories takes the language of the first one that has one.

## Other news sitemaps

If another plugin (Yoast News SEO, Rank Math or XML Sitemap & Google News) already publishes a news sitemap, the screen warns you. **Keep only one**: two sitemaps with the same articles confuse search engines.

The plugin also adds its sitemap to the sitemap index of Yoast SEO and Rank Math.

## Cache

When the sitemap changes, the plugin clears it in LiteSpeed Cache, W3 Total Cache, WP Super Cache, WP Rocket, Nginx Helper and Cloudflare. With another cache, make sure `news-sitemap.xml` is not cached for long.
