import React, { Component } from "react";
import PropTypes from "prop-types";
import ModalImage from "./components/modal-image";

import classes from "./styles/styles.scss";

export default class DztImageGalleryComponent extends Component {
  getBuildImagesItems = () => {
    let keyId = 0;
    let imagesArr = [];
    let imagesArrRef = [];
    let imagesNumber = this.props.images.length;
    this.props.images.forEach(image => {
      imagesArrRef[keyId] = React.createRef();
      let keyIndex = keyId;
      imagesArr.push(
        <div key={keyId} className={classes.gridItem}>
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
              ref={imagesArrRef[keyIndex]}
              onLeftArrowClick={
                keyIndex > 0
                  ? () => {
                      imagesArrRef[keyIndex].current.toggleModal();
                      imagesArrRef[keyIndex - 1].current.toggleModal();
                    }
                  : undefined
              }
              onRightArrowClick={
                imagesNumber > keyIndex + 1
                  ? () => {
                      imagesArrRef[keyIndex].current.toggleModal();
                      imagesArrRef[keyIndex + 1].current.toggleModal();
                    }
                  : undefined
              }
            />
            <figcaption>{image.title}</figcaption>
          </figure>
        </div>
      );
      ++keyId;
    });

    return imagesArr;
  };

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
    );
  }
}
