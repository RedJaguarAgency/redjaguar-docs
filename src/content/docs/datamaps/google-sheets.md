---
title: Sync with Google Sheets
description: Keep working in a Google Sheet and let the dataset follow it.
sidebar:
  order: 8
---

If your team works in a Google Sheet, the dataset can follow it: DataMaps reads the sheet every 1, 6 or 24 hours, adds the new rows and updates the changed ones.

:::caution[Who can read the sheet]
To be read, the sheet must be shared with "Anyone with the link" or published to the web. Then **anyone who gets that link can read the whole sheet, private columns included**. For sensitive data, sync a copy with only the columns you need.
:::

## Connect a sheet

1. In **Import → Sync with Google Sheets**, paste the **Link of the sheet**. DataMaps reads the tab that was open when you copied the link.
2. Click **Connect and choose columns**.
3. Match the columns with fields, as in an [import](/datamaps/import/). **Choose the Unique ID column**: it is how each sync knows which rows are already there.
4. Choose how often and click **Import and keep in sync**.

The link is stored encrypted when the site has an encryption key.

## How the sync works

- New rows are added and rows with a known ID are updated.
- Rows deleted from the sheet are **not** deleted in DataMaps.
- Changes made in DataMaps to a synced record are **overwritten** by the sheet on the next sync. Edit in the sheet.
- Columns are found by their header, so the sheet can gain or reorder columns. **Do not rename the columns you use.**
- A long sheet is read in parts: the next sync goes on with the rest.

**Sync now** reads it right away. **Stop syncing** disconnects it; the records stay.
