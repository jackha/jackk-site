import classes from './Gallery.module.css'
import Gallery from "react-photo-gallery";

import image1 from "./images/art-deco-walnut-cabinet/walnut-cabinet1.jpg";
import image2 from "./images/acoustic-room-divider/room-divider1.jpg";
import image3 from "./images/art-deco-walnut-bench/walnut-bench1.jpg";
import image4 from "./images/lego/lego-toy-box2.jpg";


function clickPhoto(event, photo)
{
  console.log(event, photo)
  window.open("/" + photo.photo.data.goto, "_self")
}

const photos = [
  {
    src: image1,
    width: 15,
    height: 10,
    alt: "Art Deco style walnut cabinet with ash inlay",
    data: {goto: "portfolio/walnut-cabinet"}
  },
  {
    src: image2,
    width: 1492,
    height: 1920,
    alt: "Kumiko room divider inspired by japanese kumiko patterns which also acoustically absorbs sound",
    data: {goto: "portfolio/kumiko-room-divider"}
  },
  {
    src: image3,
    width: 15,
    height: 10,
    alt: "Art Deco style walnut bench with ash inlay",
    data: {goto: "portfolio/walnut-bench"}
  },
  {
    src: image4,
    width: 15,
    height: 10,
    alt: "Toy storage box made from different kinds of wood",
    data: {goto: "portfolio/toy-storage-box"}
  },
];
   

const GalleryOverview = () => {
  return (
    <div className={classes.galleryoverview} id="portfolio">
      <Gallery photos={photos} onClick={clickPhoto} className="gallery" />
    </div>
  )
}

export default GalleryOverview