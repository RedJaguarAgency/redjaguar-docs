---
title: How licenses work
description: What a Red Jaguar license includes, and what happens when it expires.
sidebar:
  order: 1
---

The paid Red Jaguar plugins (News Sitemap & Schema and DataMaps) work with a **license for each site**. You buy it at [redjaguar.agency/plugins](https://redjaguar.agency/plugins/).

## The short version

- **One license, one domain.** A license works on one domain and on its test copies `staging.`, `dev.` and `test.` of that domain. Copies on your computer (`localhost`, `.local`, `.test`) need no license. See [Test and development copies](/licenses/test-copies/).
- **It lasts one year and renews by itself.** You can cancel the renewal at any time from your account. See [Renewal and expiration](/licenses/renewal-and-expiration/).
- **If it expires, the plugin keeps working.** Only updates and support stop. Nothing is deleted.
- **Without a license, the plugin is locked on that site.** It shows only its License screen until you activate one. Your settings and data are kept and come back as they were.
- **You can move it to another site.** Release it from the old site or from your account, and activate it on the new one. See [Move a license to another site](/licenses/move-to-another-site/).

## License states

| State | What you see in the plugin | What works |
|---|---|---|
| Active | "Active: you get updates and support." | Everything, with updates and support. |
| Expired | "Expired: the plugin keeps working, without updates." | Everything, without updates or support. |
| Not activated on this site | The plugin shows only its License screen. | Nothing until you activate a license. Data is kept. |
| Cancelled (after a refund or a chargeback) | "This license was cancelled." | Same as without a license. |

## What the plugin sends to the store

Once a day, the plugin asks the Red Jaguar store (redjaguar.agency) whether the license is valid and whether there is a new version. It sends only the license key, the domain of the site and the plugin version. Nothing about your content, your users or your visitors.

If your server cannot reach the store for a while, the plugin keeps working with the last answer for **14 days**. After that it asks you to check the connection.
