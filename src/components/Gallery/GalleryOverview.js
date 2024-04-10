import classes from './Gallery.module.css'
import Gallery from "react-photo-gallery";

import image15 from "./images/modern-tv-meubel/jackk-meubels-utrecht-modern-tv-meubel-studio.jpg";
import image14 from "./images/scandinavisch-tv-meubel/jackk-meubels-utrecht-design-massief-hout-tv-meubel-scandinavisch-lade-detail.jpg";
import image13 from "./images/mid-century/jackk-meubels-utrecht-zeist-design-mid-century-inbouw-kast-woonkamer-half.jpg";
import image12 from "./images/coffee-corner/jackk-meubels-utrecht-zeist-detail-koffie-hoek.jpg";
import image11 from "./images/bauhaus-home-office/jackk-meubels-detail-of-modern-cabinet-zeist-utrecht.jpg";
import image10 from "./images/slinger/de-slinger-detail1.jpg";
import image9 from "./images/rene-chang/zet_up_logo_crop.jpg";
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
        src: image13,
        width: 1331,
        height: 1080,
        alt: "Jackk Meubels Utrecht Zeist mid-century inbouwkast in de woonkamer",
        data: { goto: "portfolio/mid-century" }
    },
    {
        src: image11,
        width: 810,
        height: 1080,
        alt: "Custom wall cabinet based for bauhaus home surrounded by trees",
        data: { goto: "portfolio/bauhaus-home-office" }
    },
    {
        src: image14,
        width: 720,
        height: 1080,
        alt: "Jackk Meubels Utrecht Zeist modern design tv meubel lade detail",
        data: { goto: "portfolio/scandinavisch-tv-meubel" }
    },
    {
        src: image15,
        width: 1226,
        height: 1080,
        alt: "Jackk Meubels Utrecht Zeist modern design tv meubel met schuine kant en massief notenhout",
        data: { goto: "portfolio/modern-tv-meubel" }
    },
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
        src: image12,
        width: 519,
        height: 1080,
        alt: "Jackk Meubels design koffie hoek met spijlers, massief essenhout en kersenhout",
        data: { goto: "portfolio/coffee-corner" }
    },
{
    src: image10,
    width: 15,
    height: 10,
    alt: "Detail of a design cabinet 'de Slinger'",
    data: { goto: "portfolio/slinger" }
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
    src: image9,
    width: 10,
    height: 10,
    alt: "Zet-Up logo by Jackk Meubels",
    data: {goto: "rene-chang"}
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