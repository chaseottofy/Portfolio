# Portfolio

> **Warning**
> The image optimization script CLI commands are a work in progress

___

Special thank you to [@webdiscus](https://github.com/webdiscus) for taking the time to optimize my webpack configuration. If you use webpack, be sure to check out [html-bundler-webpack-plugin](https://github.com/webdiscus/html-bundler-webpack-plugin)!

___
![screen](screenshots/perf4.jpg)

## Table of Contents
- [Cloning](#cloning)
- [Features](#features)
- [Form](#contact-form)
  - [Apps Script Setup](#apps-script-setup)
- [Images](#images)
  - [Project Images](#project-images)
  - [Image Optimization](#image-optimization)
- [Notes](#notes)


## Cloning

Clone the repository and install dependencies
```bash
git clone
cd portfolio
npm install
```

Create a .env file in the root of the project, it can be empty or if you want to use the contact form, follow the steps in [Apps Script Setup](#apps-script-setup) and add the `SHEET_ID` to the .env file.

```bash
touch .env
```

---

**If you decide to not use the contact form**, follow the steps below to remove it from the project:

- Remove the following files: `/src/components/form` & `/src/styles/sections/contactForm.css`

- Remove the following lines from `/src/index.js`

```javascript
import initForm from './components/form/form';
initForm();
```

- Remove the following Tag from `/src/index.html`

```html
<article class="contact-form--container"></article>
```

---

## Features
- Zero 3rd party dependencies
- 100% Vanilla JS & Vanilla CSS
- All UI components and design are built from scratch
  - Includes some helpful JS Components like Tooltips, Toasts, and Modals
- Copy to clipboard
- Two themes
- Responsive on all devices
- Contact Form integrated with google sheets (free to use)
- Extremely optimized: .3-.4s speed index
- Accessible: Triple A contrast ratio, keyboard navigation.
- SEO friendly: scores 100 on all Major SEO tests (lighthouse, google page speed insights, etc.)
- Lightweight DOM
  - Lazy loading images
  - Dynamic content loading, rendering, and removal to ensure less than 750 nodes at any given time
- Aggressive memory management and EventListener cleanup

---

## Contact Form

The Form is integrated with google sheets using Apps Script - the process is very simple and free to use.

### Apps Script Setup
1. Create a new google sheet
2. Locate `Apps Script` in the `Extensions` menu and open it
3. Add a new file and name it `Code.gs` (or whatever you want)
4. Copy the full url of your google sheet e.g. `https://docs.google.com/spreadsheets/d/.../edit#gid=0`
5. Paste the following code into the file:
```javascript
// replace the URL with your own google sheet URL
const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/.../edit#gid=0");
const sheet = sheets.getSheetByName("Sheet1");
function doPost(e){
  let data = e.parameter;

  // appendRow will recieve the formData : {messageName, contactMethod, messageContactVal, messageVal} in my case
  sheet.appendRow([data.messageName,data.contactMethod,data.messageContactVal,data.messageVal]);
  return ContentService.createTextOutput("Success");
}
```
6. Click Deploy -> New Deployment
7. Select `Web App` as the type
8. Set 'Who has access' to 'Anyone'
9. Click Deploy
10. Copy the Deployment ID and paste it into your .env file as `SHEET_ID`
11. Done.

---

## Images

#### Project Images

Project images are handled differently than all other images
- The original images are stored in the src/images/imgprojstart folder
- Each project contains a large and small image within this folder.
- The calendar project is the only project with multiple images, it contains 10 images total, 2 for each 'view' of the project.
- It is preferred that project images are 

> **Warning**
> To utilize the image optimization script included in this project, a list of CLI commands is provided below.
- For instances where multiple arguments are used, example being `npm run setparse:wh 1600 900`, separate the arguments by a space.

#### Set the Base Directory where the images are located
```bash
# npm run setparse:base full/path/to/baseimgdir
# example:
npm run setparse:base src/images
```
> **Warning**
> Your project images should be located in a subfolder of this directory.
> - If you do not provide a path, the default path will be used. `[src/images]`.
> By default, the images are located in the src/images/imgprojstart folder.
> To change the subdirectory name, run the command below.

#### Set the Subdirectory where the images are located within the Base Directory
> By default, the subdirectory is named `imgprojstart`
```bash
npm run setparse:sub imgprojstart
```

#### Set the Subdirectory where the optimized images will be located within the Base Directory
> By default, the subdirectory is named `imgproj`
```bash
npm run setparse:opt imgproj
```

#### Set the desired output width and height for the images
> By default, the width is set to `1600` and the height is set to `900`
```bash
# npm run setparse:wh width height
example: npm run setparse:wh 1600 900
```

#### Set the desired output format for the images
> By default, the format is set to `webp`
> Must be one of the following: `webp`, `jpeg`, `png`, `avif`
```bash
# npm run setparse:format format
example: npm run setparse:format webp
```

#### Set the desired output quality for the images
> By default, the quality is set to `99`
> Must be a number between `1` and `100`
```bash
npm run setparse:quality 99
```

Using a custom node script that utilizes the sharp library, the images are resized to fit one specific aspect ratio, optimized, converted to webp if not already, and then moved to the src/images/imgproj folder. This is done BEFORE the webpack build process and is NOT dynamic. You must run this script manually - it only has to be run once.
- The script is located in the scripts folder at the root of the project in the file named `parse.mjs`
- To call the script, first ensure that it is properly configured.

All project images are imported via the src/utilities/get-image.js file. They are then distributed throughout the project from there.

---

## Notes
I'm working on making it easier to customize the content by having all data loaded from JSON.
- update on customization (9/22/23): 50-60% of the content is now loaded from JSON. Will eventually move all content to JSON.
