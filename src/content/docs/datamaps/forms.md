---
title: Public forms
description: Let other people send records, always reviewed before publishing.
sidebar:
  order: 10
---

Public forms let other people send records: witnesses, allied organizations, readers. **What they send stays pending until someone on your team reviews it.**

## Create a form

1. In the **Forms** tab, click **New form**.
2. Check the fields the form asks for and drag to change the order. Required fields are set in the [Fields](/datamaps/fields/) tab.
3. Write:
   - **Introduction:** say what will be done with the data, that it is reviewed before publishing, and how to report safely.
   - **Consent checkbox (optional).**
   - **Button** and **Message after sending.**
4. **Notify:** an email that gets a notice when there are reports to review, at most one per hour. The notice never includes the content of the reports.
5. Click **Save form**.

Place it in a page with its shortcode, `[datamaps_form id="…"]`, shown in the list of forms.

:::caution
**Publish without review (not recommended)** publishes what people send right away. Keep it off unless you trust everyone who can reach the form.
:::

## Privacy of the people who report

- Forms set no cookies.
- The IP address is never stored: only a code that changes every day, to limit how many reports can be sent in a short time.
- If the form asks for a location, it is used only to place the report on the map, and shown approximately.

If your site is behind Cloudflare, see [Getting started](/datamaps/getting-started/#if-the-site-is-behind-cloudflare-or-another-proxy).
