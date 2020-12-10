import React from "react";
import {
  Link
} from "react-router-dom";

import {GalleryItem} from "../components";

const galleryContent = [
  {
    title: "project title A",
    image: "https://www.placecage.com/g/500/500",
    link: "#",
    cta: "read more"
  },
  {
    title: "project title B",
    image: "https://www.placecage.com/g/501/501",
    link: "#",
    cta: "read more"
  },
  {
    title: "project title C",
    image: "https://www.placecage.com/g/502/502",
    link: "#",
    cta: "read more"
  }
];

const Home = () => {
  return (
    <div>
      <div className="splash">
        <h2>John Leonard</h2>
        <h3>Better Faster Digital</h3>
      </div>
      <div className="gallery">
        {galleryContent.map(c => (
          <GalleryItem content={c} />
        ))}
      </div>
    </div>
  );
}

export default Home;
