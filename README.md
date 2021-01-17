# reactjs-image-gallery

> Responsive, flexible and easy customizable images gallery library. List images in table view order, thumbnails, onclick show big image preview, buttons for preview of previous and next images in the images list.

[![NPM](https://img.shields.io/npm/v/reactjs-image-gallery.svg)](https://www.npmjs.com/package/reactjs-image-gallery) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## DEMO

[DEMO](https://www.devzonetech.com/demo/reactjs-image-gallery/)

## Install

```bash
npm install --save reactjs-image-gallery
```

## FEATURES

- Gallery images listing - responsive table format
- Image title
- Responsive design
- Thumbnails
- View previous image
- View next image
- Download image
- Zoom image - full size
- Rotate image
- Lightweight ~7 kB gzipped

## Usage

```jsx
import React, { Component } from "react";

import DztImageGalleryComponent from "reactjs-image-gallery";

class Example extends Component {
  render() {
    var data = [
      {
        url:
          "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Kayak",
        thumbUrl:
          "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
      },
      {
        url:
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Cyclist competition",
        thumbUrl:
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
      },
      {
        url:
          "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Surfer in action",
        thumbUrl:
          "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
      },
      {
        url:
          "https://images.unsplash.com/photo-1423994485548-7c3cf5c99cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80",
        title: "Drops",
        thumbUrl:
          "https://images.unsplash.com/photo-1423994485548-7c3cf5c99cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80"
      },

      {
        url:
          "https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Bird",
        thumbUrl:
          "https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
      },
      {
        url:
          "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
        title: "Blue river",
        thumbUrl:
          "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
      },
      {
        url:
          "https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
        title: "Mountains",
        thumbUrl:
          "https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
      }
    ];

    return (
      <div>
        <DztImageGalleryComponent images={data} />
      </div>
    );
  }
}
```

| Prop                   | Type      | Description                                                                                                                         |
| ---------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `images`               | `array`   | Array contains image objects. Each image object contains `url`, `title` and `thumbUrl` properties as is shown in the example usage. |
| `imgClassName`         | `String`  | Optional. `class` for the small preview image.                                                                                      |
| `hideDownload`         | `boolean` | Optional. Set to `true` to hide download-button from the Lightbox.                                                                  |
| `hideZoom`             | `boolean` | Optional. Set to `true` to hide zoom-button from the Lightbox.                                                                      |
| `hideRotate`           | `boolean` | Optional. Set to `true` to show rotate-button within the Lightbox.                                                                  |
| `imageBackgroundColor` | `String`  | Optional. Background color of the image shown in Lightbox. Defaults to black. Handy for transparent images.                         |

## License

[MIT](LICENSE.txt) © [Devzone Tech](https://www.devzonetech.com/)
