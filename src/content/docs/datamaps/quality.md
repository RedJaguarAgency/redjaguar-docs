---
title: Data quality
description: The check of every record that finds what to fix before publishing.
sidebar:
  order: 9
---

The **Quality** tab checks every record of the dataset when you open it. Fix the errors before publishing; the rest is for review.

| Problem | Why it matters |
|---|---|
| Values that are not among the options of a list | They do not match the filters and show as loose values. Usually typos or renamed options. |
| Required fields that are empty | Records imported from a spreadsheet can skip required fields. |
| Dates that cannot be read | They do not count in years or timelines. |
| Dates in the future | Often a day and a month swapped, or a wrong year. |
| Dates before 1900 | Probably a typo in the year. |
| Values that are not numbers, or negative numbers | They are left out of averages. |
| Places not found | They do not show on the map. See [Geography](/datamaps/geography/#places-not-found). |
| Possible duplicates | Records with the same date and place: perhaps the same case reported twice. |
| Reports from forms that are not public yet | They wait for review in Records. |
| Published without verification | Public records nobody marked as verified. Only a problem if your method requires it. |

Click a problem to see only the records that have it. **Back to Quality** returns to the list.
