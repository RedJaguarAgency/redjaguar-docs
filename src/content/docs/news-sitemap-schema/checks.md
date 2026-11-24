---
title: Readiness check reference
description: Every check of the readiness check, and where to fix it.
sidebar:
  order: 8.5
---

Every check of [the readiness check](/news-sitemap-schema/readiness-check/), by section, with where to fix it. The plugin itself explains each problem step by step when it finds one.

The code next to each check is its identifier. You also see it in `wp news-schema check`.

## Publisher information

| Check | Severity | Where to fix it |
|---|---|---|
| <span id="publication_name"></span>**Publication name for Google News** <br/>`publication_name` | Warning | [Publisher](/news-sitemap-schema/publisher/) |
| <span id="logo"></span>**Publisher logo** <br/>`logo` | Warning | [Publisher](/news-sitemap-schema/publisher/) |
| <span id="location"></span>**Newsroom location** <br/>`location` | Warning | [Publisher](/news-sitemap-schema/publisher/) |
| <span id="founding_date"></span>**Founding date** <br/>`founding_date` | Suggestion | [Publisher](/news-sitemap-schema/publisher/) |
| <span id="site_icon"></span>**Site icon** <br/>`site_icon` | Suggestion | Appearance → Customize → Site Identity. |
| <span id="yoast_organization"></span>**Organization in Yoast SEO** <br/>`yoast_organization` | Warning | [Structured data](/news-sitemap-schema/structured-data/#with-yoast-seo-or-rank-math) |

## Editorial policies and transparency

| Check | Severity | Where to fix it |
|---|---|---|
| <span id="policy_about"></span>**About us** <br/>`policy_about` | Warning | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_masthead"></span>**Masthead** <br/>`policy_masthead` | Warning | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_publishing"></span>**Editorial standards** <br/>`policy_publishing` | Warning | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_corrections"></span>**Corrections** <br/>`policy_corrections` | Warning | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_ethics"></span>**Ethics and conflicts of interest** <br/>`policy_ethics` | Warning | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_ownership_funding"></span>**Ownership and funding** <br/>`policy_ownership_funding` | Warning | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_feedback"></span>**Contact and right of reply** <br/>`policy_feedback` | Warning | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_fact_checking"></span>**Verification** <br/>`policy_fact_checking` | Suggestion | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_unnamed_sources"></span>**Anonymous sources** <br/>`policy_unnamed_sources` | Suggestion | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_no_bylines"></span>**Bylines and pseudonyms** <br/>`policy_no_bylines` | Warning | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_mission"></span>**Mission and coverage priorities** <br/>`policy_mission` | Suggestion | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_ai"></span>**Use of artificial intelligence** <br/>`policy_ai` | Suggestion | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_sponsored"></span>**Advertising and sponsored content** <br/>`policy_sponsored` | Suggestion | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_comments"></span>**Comments and moderation** <br/>`policy_comments` | Suggestion | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_terms"></span>**Terms of use** <br/>`policy_terms` | Suggestion | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policy_diversity"></span>**Diversity** <br/>`policy_diversity` | Suggestion | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="policies_linked"></span>**Policies linked from the site** <br/>`policies_linked` | Suggestion | [Editorial policies](/news-sitemap-schema/editorial-policies/) |
| <span id="privacy_policy"></span>**Privacy policy** <br/>`privacy_policy` | Warning | Settings → Privacy. |
| <span id="contact"></span>**Newsroom contact** <br/>`contact` | Suggestion | [Publisher](/news-sitemap-schema/publisher/) |
| <span id="official_profiles"></span>**Official profiles** <br/>`official_profiles` | Suggestion | [Publisher](/news-sitemap-schema/publisher/) |

## Authors

| Check | Severity | Where to fix it |
|---|---|---|
| <span id="newsroom_as_person"></span>**The newsroom does not sign as a person** <br/>`newsroom_as_person` | Warning | [Authors](/news-sitemap-schema/authors/#the-newsroom-account) |
| <span id="author_bios"></span>**Author biographies** <br/>`author_bios` | Warning | [Authors](/news-sitemap-schema/authors/) |
| <span id="author_page"></span>**Author pages** <br/>`author_page` | Warning | [Authors](/news-sitemap-schema/authors/) |
| <span id="author_page_bio"></span>**Biography visible on the author page** <br/>`author_page_bio` | Warning | [Authors](/news-sitemap-schema/authors/#author-box) |
| <span id="bylines"></span>**Visible bylines** <br/>`bylines` | Warning | [Authors](/news-sitemap-schema/authors/) |

## Newsroom protection

| Check | Severity | Where to fix it |
|---|---|---|
| <span id="image_location"></span>**Location in photos** <br/>`image_location` | Warning | [Newsroom protection](/news-sitemap-schema/newsroom-protection/) |
| <span id="image_device"></span>**Device data in photos** <br/>`image_device` | Suggestion | [Newsroom protection](/news-sitemap-schema/newsroom-protection/) |
| <span id="strip_uploads"></span>**Photo metadata removed on upload** <br/>`strip_uploads` | Suggestion | [Newsroom protection](/news-sitemap-schema/newsroom-protection/) |
| <span id="author_slug"></span>**Author addresses hide the login name** <br/>`author_slug` | Warning | [Authors](/news-sitemap-schema/authors/#author-addresses) |
| <span id="display_name"></span>**Bylines hide the login name** <br/>`display_name` | Warning | [Authors](/news-sitemap-schema/authors/) |
| <span id="rest_users"></span>**Users not listed publicly** <br/>`rest_users` | Warning | [Newsroom protection](/news-sitemap-schema/newsroom-protection/) |
| <span id="protected_names"></span>**Real names stored for protected authors** <br/>`protected_names` | Suggestion | [Authors](/news-sitemap-schema/authors/) |
| <span id="protected_gravatar"></span>**No Gravatar for protected authors** <br/>`protected_gravatar` | Warning | [Authors](/news-sitemap-schema/authors/) |

## Articles

| Check | Severity | Where to fix it |
|---|---|---|
| <span id="publishing_rhythm"></span>**Regular publishing** <br/>`publishing_rhythm` | Suggestion | Publish your own reporting regularly. See the manual checks. |
| <span id="featured_image"></span>**Featured images** <br/>`featured_image` | Warning | [Checks before publishing](/news-sitemap-schema/block-editor/#news-check) |
| <span id="image_size"></span>**Image size** <br/>`image_size` | Warning | [Checks before publishing](/news-sitemap-schema/block-editor/#news-check) |
| <span id="image_crops"></span>**Image crops for search engines** <br/>`image_crops` | Suggestion | [FAQ](/news-sitemap-schema/faq/#the-check-says-my-older-images-lack-crops) |
| <span id="image_alt"></span>**Image alternative text** <br/>`image_alt` | Suggestion | [Checks before publishing](/news-sitemap-schema/block-editor/#news-check) |
| <span id="image_credit"></span>**Image credits** <br/>`image_credit` | Suggestion | [Checks before publishing](/news-sitemap-schema/block-editor/#photo-credit) |
| <span id="titles"></span>**Headline, H1 and page title** <br/>`titles` | Suggestion | Your theme or SEO plugin. |
| <span id="canonical"></span>**Canonical URL** <br/>`canonical` | Warning | Your theme or SEO plugin. |
| <span id="visible_date"></span>**Visible publication date** <br/>`visible_date` | Warning | Your theme: show the date on each article. |
| <span id="timezone"></span>**Site time zone** <br/>`timezone` | Warning | Settings → General → Timezone: choose a city. |
| <span id="og_image"></span>**Image for social networks** <br/>`og_image` | Suggestion | Your SEO plugin, or a featured image in each article. |
| <span id="address_changes"></span>**Published articles keep their address** <br/>`address_changes` | Suggestion | Do not change the address of published articles, or redirect the old one. |
| <span id="article_language"></span>**Article language** <br/>`article_language` | Warning | [News sitemap](/news-sitemap-schema/news-sitemap/#language) |

## Crawling and indexing

| Check | Severity | Where to fix it |
|---|---|---|
| <span id="blog_public"></span>**Site visible to search engines** <br/>`blog_public` | Error | Settings → Reading: uncheck "Discourage search engines from indexing this site". |
| <span id="permalinks"></span>**Readable article addresses** <br/>`permalinks` | Warning | Settings → Permalinks: choose "Post name". |
| <span id="robots_txt"></span>**robots.txt lets Google crawl your articles** <br/>`robots_txt` | Error | Remove the line that blocks your articles from robots.txt (your SEO plugin or the file at the root of the site). |
| <span id="noindex"></span>**Articles can be indexed** <br/>`noindex` | Error | Your SEO plugin: let articles be indexed. |
| <span id="image_preview"></span>**Large image previews allowed** <br/>`image_preview` | Warning | Your SEO plugin: allow large image previews (max-image-preview:large). |
| <span id="home_links"></span>**Articles linked from the home page** <br/>`home_links` | Suggestion | Your theme: link the latest articles from the home page. |

## Structured data

| Check | Severity | Where to fix it |
|---|---|---|
| <span id="json_ld_valid"></span>**Structured data is valid JSON** <br/>`json_ld_valid` | Warning | [Structured data](/news-sitemap-schema/structured-data/) |
| <span id="single_article"></span>**One article markup per page** <br/>`single_article` | Warning | [Structured data](/news-sitemap-schema/structured-data/) |
| <span id="article_type"></span>**Articles marked as NewsArticle** <br/>`article_type` | Warning | [Structured data](/news-sitemap-schema/structured-data/) |
| <span id="article_required"></span>**Headline and publication date** <br/>`article_required` | Warning | [Structured data](/news-sitemap-schema/structured-data/) |
| <span id="article_recommended"></span>**Modification date, image and author** <br/>`article_recommended` | Warning | [Structured data](/news-sitemap-schema/structured-data/) |
| <span id="date_timezone"></span>**Dates include the time zone** <br/>`date_timezone` | Warning | Settings → General → Timezone: choose a city. |
| <span id="date_match"></span>**Dates match WordPress** <br/>`date_match` | Warning | Settings → General → Timezone, or your SEO plugin. |
| <span id="article_authors"></span>**Authors well marked up** <br/>`article_authors` | Warning | [Structured data](/news-sitemap-schema/structured-data/) |
| <span id="publisher_logo"></span>**Publisher with logo** <br/>`publisher_logo` | Warning | [Structured data](/news-sitemap-schema/structured-data/) |
| <span id="home_organization"></span>**Organization on the home page** <br/>`home_organization` | Warning | [Structured data](/news-sitemap-schema/structured-data/) |
| <span id="paywall"></span>**Articles behind a paywall** <br/>`paywall` | Warning | [FAQ](/news-sitemap-schema/faq/#does-it-support-paywalled-or-members-only-articles) |
| <span id="schema_mode"></span>**Structured data turned off in this plugin** <br/>`schema_mode` | Suggestion | [Structured data](/news-sitemap-schema/structured-data/) |

## News sitemap

| Check | Severity | Where to fix it |
|---|---|---|
| <span id="sitemap_enabled"></span>**News sitemap active** <br/>`sitemap_enabled` | Error | [News sitemap](/news-sitemap-schema/news-sitemap/) |
| <span id="sitemap_reachable"></span>**News sitemap reachable and valid** <br/>`sitemap_reachable` | Error | [News sitemap](/news-sitemap-schema/news-sitemap/) |
| <span id="general_sitemap"></span>**General sitemap** <br/>`general_sitemap` | Suggestion | [News sitemap](/news-sitemap-schema/news-sitemap/) |
| <span id="sitemap_size"></span>**Articles in the sitemap** <br/>`sitemap_size` | Warning | [News sitemap](/news-sitemap-schema/news-sitemap/) |
| <span id="sitemap_robots"></span>**News sitemap listed in robots.txt** <br/>`sitemap_robots` | Warning | [News sitemap](/news-sitemap-schema/news-sitemap/) |

## Security and performance

| Check | Severity | Where to fix it |
|---|---|---|
| <span id="loopback"></span>**The plugin can read your published pages** <br/>`loopback` | Warning | Your hosting provider: the site must be able to request its own pages. |
| <span id="https"></span>**HTTPS** <br/>`https` | Error | Your hosting provider: turn on an SSL certificate. |
| <span id="php_dom"></span>**PHP DOM extension** <br/>`php_dom` | Warning | Your hosting provider: enable the PHP DOM extension. |
| <span id="charset"></span>**UTF-8 encoding** <br/>`charset` | Warning | Settings → Reading, or your hosting provider. |
