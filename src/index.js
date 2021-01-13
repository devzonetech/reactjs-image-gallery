import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ModalImage from 'react-modal-image'

import classes from './styles/styles.scss'

export default class DztImageGalleryComponent extends Component {
    getBuildImagesItems = () => {
      var keyId = 0
      var imagesArr = []
      this.props.images.forEach(image => {
        imagesArr.push(
          <div key={keyId++} className={classes.gridItem}>
            <figure>
              <ModalImage
                small={image.thumbUrl}
                medium={image.url}
                large={image.url}
                alt={image.title}
                hideDownload={this.props.hideDownload}
                hideZoom={this.props.hideZoom}
                showRotate={!this.props.hideRotate}
                className={this.props.imgClassName}
                imageBackgroundColor={this.props.imageBackgroundColor}
              />
              <figcaption>{image.title}</figcaption>
            </figure>
          </div>
        )
      })

      return imagesArr
    }

    static propTypes = {
      images: PropTypes.array,
      hideDownload: PropTypes.bool,
      hideZoom: PropTypes.bool,
      hideRotate: PropTypes.bool,
      imgClassName: PropTypes.string,
      imageBackgroundColor: PropTypes.string
    };

    render() {
      return (
        <div className={classes.wrapper}>
          <div className={classes.grid}>{this.getBuildImagesItems()}</div>
        </div>
      )
    }
}
