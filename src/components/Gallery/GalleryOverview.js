import classes from './Gallery.module.css'
import Gallery from "react-photo-gallery";

import image8 from "./images/home-office/wandkast-studio.jpg";
import image7 from "./images/gea-zwart/gea_zwart_collaboration_inlay_detail.jpg";
import image6 from "./images/laundry-room/nisje.jpg";
import image5 from "./images/mailbox/mailbox-final.jfif";
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
    src: image8,
    width: 15,
    height: 10,
    alt: "Custom wall cabinet with zig-zag pattern",
    data: {goto: "portfolio/home-office"}
  },
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
    src: image6,
    width: 10,
    height: 15,
    alt: "Custom cabinet for laundry room",
    data: {goto: "portfolio/laundry-room"}
  },
  {
    src: image7,
    width: 1732,
    height: 1920,
    alt: "Collaboration with Gea Zwart - custom art inlay",
    data: {goto: "gea-zwart"}
  },
  {
    src: image5,
    width: 10,
    height: 10,
    alt: "Modern style design mailbox",
    data: {goto: "portfolio/mailbox"}
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