import React from "react";
import {
  Link
} from "react-router-dom";

const GalleryItem = (props) => {
  return (
    <div className="galleryItem">
      <div className="galleryImage">
        <Link to={props.content.link}>
          <img src={props.content.image} />
        </Link>
      </div>
      <div className="galleryContent">
        <h3>{props.content.title}</h3>
        <Link to={props.content.link}>{props.content.cta}</Link>
      </div>
    </div>
  );
}

export default GalleryItem;
