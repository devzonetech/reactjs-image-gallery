import React from "react";

import {
  ZoomInIcon,
  ZoomOutIcon,
  DownloadIcon,
  CloseIcon,
  RotateIcon,
  LeftArrowIcon,
  RightArrowIcon
} from "./icons";

const Header = ({
  image,
  alt,
  zoomed,
  toggleZoom,
  toggleRotate,
  onClose,
  enableDownload,
  enableZoom,
  enableRotate,
  onLeftArrowClick,
  onRightArrowClick
}) => (
  <div className="__react_modal_image__header">
    <span className="__react_modal_image__icon_menu">
      {onLeftArrowClick && (
        <a onClick={onLeftArrowClick}>
          <LeftArrowIcon />
        </a>
      )}
      {onRightArrowClick && (
        <a onClick={onRightArrowClick}>
          <RightArrowIcon />
        </a>
      )}
      {enableDownload && (
        <a href={image} download>
          <DownloadIcon />
        </a>
      )}
      {enableZoom && (
        <a onClick={toggleZoom}>{zoomed ? <ZoomOutIcon /> : <ZoomInIcon />}</a>
      )}
      {enableRotate && (
        <a onClick={toggleRotate}>
          <RotateIcon />
        </a>
      )}
      <a onClick={onClose}>
        <CloseIcon />
      </a>
    </span>
    {alt && <span className="__react_modal_image__caption">{alt}</span>}
  </div>
);

export default Header;
