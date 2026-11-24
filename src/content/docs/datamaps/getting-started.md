---
title: Getting started
description: Install DataMaps, activate the license and prepare the site before loading real data.
sidebar:
  order: 2
---

## 1. Install and activate

1. [Install the plugin and activate the license](/licenses/install-and-activate/). The license screen is **Red Jaguar DataMaps → DataMaps license**.
2. Without a license, the dashboard shows only the license screen and the maps are hidden on the public site. No data is deleted.

## 2. Before loading real data: security (5 minutes)

Do this once, before you import any case.

### Encryption of private fields

1. Open any dataset and go to **Settings → Encryption of private fields**.
2. Copy the line that starts with `define( 'RJDM_ENCRYPTION_KEY'…`. The key was generated only for you and is not stored anywhere.
3. Paste it in `wp-config.php`, above the line "That's all, stop editing". If you do not know how, ask your hosting provider or whoever manages the site.
4. Come back to the same screen and click **Encrypt the existing records now**, if there are records already.

:::danger[Keep a copy of the key]
Save the key in a password manager. If it is lost, the private values cannot be recovered, not even by Red Jaguar. Do not change it later, and back up `wp-config.php` apart from the database.
:::

### If the site is behind Cloudflare or another proxy

Add this line to `wp-config.php` too:

```php
define( 'RJDM_CLIENT_IP_HEADER', 'HTTP_CF_CONNECTING_IP' );
```

Without it, everyone who uses the public forms shares the same limit of reports and they block each other. The IP address is never stored.

### Two-factor authentication

Turn on two-factor authentication for the administrator and editor accounts, with the 2FA plugin your site uses.

## 3. Try it with an example (optional)

In **Red Jaguar DataMaps → Datasets**, under **Try it with an example**, click **Create example**. It creates a dataset with 120 **fictional** cases in Nicaragua, its boundaries, a map, figures, filters, a table, a form and a private page that shows them.

:::caution
Delete the example before publishing real data: in the example dataset, **Settings → Delete dataset** (type `DELETE`), and delete its page.
:::

## 4. Create your dataset

Follow [Datasets](/datamaps/datasets/). The **Overview** tab of each dataset shows the steps still missing to get it online.
