---
title: Frequently asked questions
description: Common questions about DataMaps.
sidebar:
  order: 17
  label: FAQ
---

## Does it send our data anywhere?

No. Records stay in your database. See [What DataMaps sends outside](/datamaps/privacy-and-security/#what-datamaps-sends-outside).

## What happens if we stop paying?

The plugin keeps working with everything you have; you stop getting updates and support. Renew whenever you want. See [Renewal and expiration](/licenses/renewal-and-expiration/).

## Can we move the plugin to another domain?

Yes: release the site in the license screen and activate the license on the new one. See [Move a license to another site](/licenses/move-to-another-site/).

## What if we lose the encryption key?

Encrypted values cannot be recovered without it, not even by Red Jaguar. Keep a copy in a password manager and back up `wp-config.php`.

## How many records can a dataset have?

Up to 20,000. Records are filtered in the visitor's browser, so pages stay fast.

## Can a dataset cover several countries?

No. One country per dataset, with two levels of regions. Create one dataset per country.

## Can we use it as a theme developer?

Yes. Themes can use the functions `rjdm_get_views()`, `rjdm_get_view_style()`, `rjdm_render_view()` and `rjdm_is_active()`, which do not change in the 1.x versions. Ask us for details at [roar@redjaguar.agency](mailto:roar@redjaguar.agency).
