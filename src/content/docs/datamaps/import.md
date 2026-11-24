---
title: Import a spreadsheet
description: Import records from a CSV or XLSX file, and undo the last import.
sidebar:
  order: 7
---

In the **Import** tab you can load a CSV or XLSX file (the first sheet), or [sync a Google Sheet](/datamaps/google-sheets/).

<video controls preload="metadata" src="/videos/datamaps/2-importa-tu-excel.mp4" width="100%"></video>

*Video in Spanish.*

## Steps

1. Click **Upload and continue** with your file.
2. Choose the **Header row**. If the row above the headers names groups of columns, check **Use the row above the headers as field groups**.
3. For each column, choose the field it goes to, **+ New field** to create one from the column, or **— Ignore —**. The examples help you recognize each column.
4. Choose the **Unique ID** column, if your data has one. It is used to update records instead of duplicating them when you import again.
5. Choose the **Status of the imported records**. We recommend **Draft (review before publishing)**.
6. Choose what to do **If the unique ID already exists**: **Update the record** or **Skip the row**.
7. Import.

New fields start private: decide which ones to publish in [Fields](/datamaps/fields/).

Dates are read as day/month/year, year-month-day or Excel dates.

## After importing

- Check **Geography → Places not found** for places that did not match a region. See [Geography](/datamaps/geography/#places-not-found).
- Check the [Quality](/datamaps/quality/) tab.
- Publish the records from **Records**.

## Undo the last import

**Last import** shows when and who imported, and how many records were created and updated. **Undo: delete the records it created** deletes the new records.

Records that already existed and were updated by the import are not changed back. Their history shows what changed.
