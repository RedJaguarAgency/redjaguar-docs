---
title: Privacy and security
description: What is published, what is protected, and how.
sidebar:
  order: 15
---

DataMaps was made for data about people who may be at risk. These protections are on by default.

## What reaches the public site

Only **published records** and **public fields** go into the data file that public pages download. Everything public can be downloaded by anyone, even without the CSV link. Decide each public field with care.

## Places

- **Exact coordinates are never published.** In **Settings → Precision on the map**, each record shows in its municipality (recommended for sensitive data), or with coordinates rounded to about 1 km.
- **Protection of small places:** a municipality with fewer published records than the minimum (3 by default) is published only with its department, in the views and in the public file too. 0 turns it off. Turn it off only when the place does not expose people, for example attacks on media outlets.

## Dates

For each date field you can publish only the month or only the year. A day and a place together can point at a person. See [Fields](/datamaps/fields/#other-options-of-a-field).

## Encryption

With an encryption key in `wp-config.php`, private values and review notes are encrypted in the database (libsodium). A copy of the database without the key does not reveal them. See [Getting started](/datamaps/getting-started/#encryption-of-private-fields).

Not encrypted, because the map and the filters need them: place, coordinates, date and unique ID. Encrypted values cannot be searched or filtered in the list.

## Forms

No cookies, and the IP address is never stored. See [Public forms](/datamaps/forms/#privacy-of-the-people-who-report).

## What DataMaps sends outside

Records stay in your database. Public pages load the public file and the borders from your own site. DataMaps contacts:

- geoBoundaries, only when you download borders;
- the Red Jaguar store, to check the license and updates;
- Google Sheets, only if you sync a sheet;
- OpenStreetMap, only from visitors' browsers and only if a map uses its streets as base map.

## Exports

CSV exports are protected against formula injection.
