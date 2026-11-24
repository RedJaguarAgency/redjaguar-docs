---
title: Newsroom protection
description: Limit what your site reveals about the people who make it.
sidebar:
  order: 9
---

A news site can reveal more about the people who make it than they expect: where a photo was taken, which phone took it, the login name of each author. **News Schema → Protection** limits it, and the readiness check looks for it every day.

## Photos

Photos carry hidden data: often the GPS position where they were taken and the serial number of the camera or phone. Anyone who downloads the image from your site can read it.

- **Remove photo metadata on upload** removes the GPS position, the camera and phone data, and the author and comment fields from every new JPEG, WebP and PNG image. The picture is not recompressed.
- **Photos already uploaded:** the screen lists recent photos that carry location or device data. Click **Remove the metadata of … photos** to clean them.

:::caution
The files are rewritten on the server and cannot be restored. The pictures look the same. Copies already downloaded or cached elsewhere are not affected.
:::

If you use the free plugin **Red Jaguar Newsroom Privacy & Optimizer**, it takes care of photos, and this section says so.

To clean photos before uploading them: on Windows, **Properties → Details → Remove Properties and Personal Information**. On a Mac, open the photo in Preview, **Tools → Show Inspector → Remove Location Info**. On phones, turn off the location for the camera.

## User list

WordPress lets anyone download the list of your authors from its API (`/wp-json/wp/v2/users`). **Hide the user list from visitors** hides it from visitors who are not logged in. The editor keeps working. Turn it off if an app or service you use reads that list.

## Authors

- **Author addresses** that show the login name: change them all at once in **News Schema → Authors**. See [Author addresses](/news-sitemap-schema/authors/#author-addresses).
- **Protect my identity:** authors who check it in their profile get no Gravatar image and no linked profiles in the structured data.

## What the readiness check looks for

- photos published with their GPS position or the serial number of the camera or phone;
- author page addresses that reveal the login name;
- the list of users that WordPress publishes in its API;
- bylines that show a login name;
- authors who protect their identity but keep their real name in their profile.
