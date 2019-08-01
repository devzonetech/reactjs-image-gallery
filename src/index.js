import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ModalImage from "react-modal-image"

import classes from './styles/styles.scss'

export default class DztImageGalleryComponent extends Component {

  getBuildImagesItems = () => {

    var keyId = 0;
    var imagesArr = []
    this.props.images.forEach(image => {
      imagesArr.push(
        <div key={keyId++} className={classes.gridItem}>
            <figure>
              <ModalImage
                small={image.thumbUrl}
                large={image.url}
                alt={image.alt}
                showRotate={true}
                hideZoom={false}
                className="bigImage"
              />
              <figcaption>{image.title} {image.title}</figcaption>
            </figure>
        </div>
      ) 
    });

    return imagesArr
  }

  static propTypes = {
    images: PropTypes.array
  }

  render() {

    return (
      <div className={classes.wrapper}>
          <div className={classes.grid}>
            {this.getBuildImagesItems()}
          </div>
      </div>
    )
  }
}
