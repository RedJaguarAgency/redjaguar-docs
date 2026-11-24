---
title: Geography
description: Download the regions of the country and match the places of your records.
sidebar:
  order: 5
---

The map needs the shapes of the regions of the country. The **Geography** tab manages them.

## Boundaries

Click **Download from geoBoundaries** for level 1 (department, state, province) and level 2 (municipality, canton, community).

They are downloaded once and served from your own site: public pages do not contact any other server. They are shared by every dataset of the same country.

The country is chosen in **Settings** of the dataset.

:::note[Nicaragua]
The boundaries of Nicaragua come with English names and typos. After downloading them, click **Correct the names**: it applies corrected names and common alternatives (RACCN, RAAN, Bilwi…).
:::

You can also **Upload your own GeoJSON**, with the property that holds the name, an optional code, and the source and license shown on the map.

## Names

Fix how each region is written on the site, and add **other names** it may have in your data: abbreviations, old names, spellings. Matching ignores accents and capitals.

Click **Save names and locate records again**. Names you edited are kept when you download the boundaries again.

## Places not found

Records whose place matches no region do not show on the map. **Places not found** lists the spellings that did not match, with how many records use each.

Add each spelling as another name of the right region, and click **Locate records again**.

:::tip
A municipality name that exists in two departments needs the department too.
:::
