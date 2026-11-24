---
title: Fields
description: What each record holds, how fields are grouped, and which ones are public.
sidebar:
  order: 4
---

In the **Fields** tab you decide what each record holds. Click **Add field** or **Add group**, drag to reorder, and click **Save fields**.

## Types of field

| Type | For |
|---|---|
| Text, Long text | Names, descriptions, stories. |
| Number | Ages, amounts. Can fill a list automatically (see below). |
| Date | The date of each case. |
| List (one option), List (several options) | Categories. These are the fields you filter and chart by. Options, one per line. |
| Yes / No / Unknown | Questions with a "we do not know" answer. |
| Link, Email, Phone | Contacts and sources. |
| Place (region) | **Needed for the map.** Level 1 is the department, state or province; level 2 the municipality, canton or community. |
| Coordinates (latitude, longitude) | Optional. Never published exactly. |

## Public or private

**Every field starts private.** Private fields never leave the dashboard.

Public fields go into the data file that the public pages download: anything that can be filtered, counted or shown on the site **can be downloaded by anyone**. Names, addresses and contacts should stay private.

For each public field you choose where it shows: **Map popup**, **Table**, **Filter**.

## Other options of a field

Click **More options** in a field:

- **Required:** forms do not let it be sent empty. Imports can skip it; [Quality](/datamaps/quality/) lists the empty ones.
- **Help text (forms):** shown under the field in public forms.
- **On the public site, show** (dates): **The whole date**, **Only month and year** or **Only the year**. The dashboard keeps the whole date. A day and a place together can point at a person.
- **Fill automatically from a number** (lists): a calculated field. For example, an age range filled from the age, with rules such as `0-12 = Girl (0-12)` or `60+ = 60 or more`. Records whose number is empty keep the option chosen by hand.

## Renaming list options

If you rename or remove an option still used by records, DataMaps asks what to do with them: choose the new option for each one, or leave them as they are. Each change is kept in the history of the record.
