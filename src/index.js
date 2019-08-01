import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './styles/styles.scss'

export default class DztImageGalleryComponent extends Component {

  getBuildImagesItems = () => {

    var styles = {};
    var imagesArr = [];
    this.props.images.forEach(image => {
      imagesArr.push(
        <div className={classes.gridItem}>
          <a href={image.url} target="_blank">
            <figure>
                <img src={image.thumbUrl} style={styles} alt={image.alt} />
                <figcaption>{image.title}</figcaption>
            </figure>
          </a>
        </div>
      );
    });

    return imagesArr;
  }

  static propTypes = {
    images: PropTypes.object
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
