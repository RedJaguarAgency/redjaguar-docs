---
title: Structured data
description: How the plugin tells search engines what each page is, alone or with Yoast SEO and Rank Math.
sidebar:
  order: 6
---

Structured data is information in the code of each page that tells search engines what it is: a news article, who wrote it, which newsroom published it, with which logo and editorial policies. Readers do not see it.

The plugin publishes:

- **NewsArticle** on each article: headline, dates, images and authors.
- **NewsMediaOrganization** for your newsroom: name, logo, location and the addresses of your [editorial policies](/news-sitemap-schema/editorial-policies/).
- **Authors** with job title, biography and public profiles, from each [author's profile](/news-sitemap-schema/authors/).
- **Photo credit** from the "Credit" field of each image in the media library.

## With Yoast SEO or Rank Math

Open **News Schema → Schema**. The screen tells you who prints the structured data of your site:

- **Yoast SEO or Rank Math:** the plugin completes their markup instead of printing a second copy. News articles become NewsArticle, and the organization gets your newsroom details and policies.
- **Another SEO plugin it cannot adjust yet:** to avoid duplicates, the plugin prints nothing. Set the article type to NewsArticle in that plugin.
- **No SEO plugin:** the plugin prints everything.

## Turn it off

**Add or adjust structured data** is on by default, and we recommend leaving it on. If you turn it off, the plugin does not touch structured data, and the news sitemap, the readiness check and newsroom protection keep working. Turn it off only if your theme or another plugin already handles it the way you want.

## Article type by category

News articles are marked as NewsArticle. On the same screen, in **Article type by category**, you can choose a more specific type for categories such as Opinion or Analysis. An article can still change it in the editor, in **Article type**.

## Check the result

Paste the address of a recent article in Google's [Rich Results Test](https://search.google.com/test/rich-results). It should show a news article without errors. This is one of the [manual checks](/news-sitemap-schema/readiness-check/#manual-checks).
