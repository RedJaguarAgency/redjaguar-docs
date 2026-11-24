---
title: About photo metadata
description: "A short guide for newsrooms: what metadata is, why it matters, and good practices."
sidebar:
  order: 7
---

This guide is also inside the plugin, in **Red Jaguar Newsroom → About**.

## What is metadata?

Every photo has two parts: the picture you see, and data about the picture that you do not see. That second part is the metadata. The camera or phone writes it on its own: where and when the photo was taken, which device took it, and more. It travels inside the file wherever the photo goes: an email, a chat, your website.

Think of it as the envelope of a letter: you can share the letter and forget that the envelope has the sender's address written on it.

## Why it matters for newsrooms

- **A source can be identified.** A photo sent by a source can carry the place where it was taken: their home, their workplace, or where they are hiding.
- **So can a reporter.** Photos taken with the same phone share its serial number, so an unsigned photo can be linked to the person who took it.
- **What was cropped can come back.** Many cameras keep a small copy of the uncropped photo. A face cut out of the picture can still be inside the file.
- **It has happened.** In 2012 a news outlet published a photo of a man who was hiding from the authorities. The GPS coordinates in the file showed where he was, and he was found days later.
- **It is easy to check.** Free tools show the metadata of any image downloaded from your site in seconds.

## Good practices

- **Ask for photos as photos.** Many messaging apps remove metadata from a photo sent as a photo, but keep it when the same image is sent as a document or file.
- **Turn off location in the camera** on the phones used for reporting.
- **Keep sensitive originals off the website.** Store them on an encrypted device, and upload only the version you will publish.
- **Use HTTPS.** The plugin cleans photos when they reach your server; on the way they still carry all their data.
- **Review the media library after an import.** Images added by FTP, a migration or another plugin are not cleaned on upload.
- **Blur or crop what can be seen:** faces, license plates, street signs, screens, reflections and landmarks.
- **Write alternative text.** It describes the image to people who use screen readers, and helps search engines.

## Glossary

**EXIF**
: The data cameras and phones write into photos: date and time, device, settings, and often the GPS location.

**GPS location**
: Coordinates of the place where the photo was taken, precise to a few meters.

**Serial number**
: Unique identifier of a camera, phone or lens. It links every photo taken with the same device.

**XMP**
: Metadata written by editing programs such as Lightroom or Photoshop: author, edit history, sometimes the location.

**IPTC**
: Fields used by agencies and newsrooms: caption, author, credit, copyright, city.

**Hidden thumbnail**
: A small preview inside the file, which can show the photo as it was before it was cropped.

**Content Credentials (C2PA)**
: A digital signature that proves who made or edited an image, and with what. Because it proves it, it also identifies them.

**Full-size original**
: The photo as it was uploaded. WordPress keeps it on the server when it publishes a smaller copy, whose name ends in "-scaled".

**HEIC**
: The format iPhones use for photos.
