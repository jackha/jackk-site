import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import Wrapper from "../Wrapper/Wrapper";
// import Title from "../Title/Title";
// import Subtitle from "../Subtitle/Subtitle";
// // CSS
// import classes from './Slider.module.css'
// import Logo from "./../../assets/jackk-logo.png";

// Images

import image1 from './images/hero-art-deco-cabinet.jpg';
import image2 from './images/hero-kamerscherm.jpg';
import image3 from './images/hero-bench.jpg';
import image4 from './images/hero-muurkast.jpg';
import image5 from './images/hero-bar.jpg';
import image6 from '../Gallery/images/laundry-room/nisje-detail.jpg';
import image7 from './images/hero-wandkast.jpg';

const image1alt = "Design Art Deco Kast | Jackk Meubels";
const image2alt = "Design Akoestisch Kamerscherm | Jackk Meubels";
const image3alt = "Design Art Deco Walnoten Bankje | Jackk Meubels";
const image4alt = "Design Wandkast | Jackk Meubels";
const image5alt = "Design Bar | Jackk Meubels";
const image6alt = "Design L Kast | Jackk Meubels";
const image7alt = "Design wandkast | Jackk Meubels";

const app = () => {
  // const nextSlideHandler = React.useRef();
  // const previousSlideHandler = React.useRef();

  return (
    <HeroSlider
      // TODO: add custom next slide previous slide buttons as regular ones don't seem to work properly
      // nextSlide={nextSlideHandler}
      // previousSlide={previousSlideHandler}
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      // onBeforeChange={(previousSlide, nextSlide) =>
      //   console.log("onBeforeChange", previousSlide, nextSlide)
      // }
      // onChange={nextSlide => console.log("onChange", nextSlide)}
      // onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "100vh"
      }}
    >
      <OverlayContainer>
        <Wrapper>
          {/* <Title><img className={classes.Logo} src={Logo} /></Title>
          <Subtitle>Meubels op maat</Subtitle> */}
          {/* <div>
            <Button
              style={{
                width: 100,
                margin: "12px 8px"
              }}
              button="danger"
              onClick={() => previousSlideHandler.current()}
            >
              Previous
            </Button>
            <Button
              style={{
                width: 100,
                margin: "12px 8px"
              }}
              button="success"
              onClick={() => nextSlideHandler.current()}
            >
              Next
            </Button>
          </div> */}
        </Wrapper>
      </OverlayContainer>

      <Slide
        background={{
          backgroundImage: image7,
          backgroundAttachment: "fixed",
          alt: image7alt
        }}
      />

      <Slide
        background={{
          backgroundImage: image1,
          backgroundAttachment: "fixed",
          alt: image1alt
        }}
      />

      <Slide
        background={{
          backgroundImage: image2,
          backgroundAttachment: "fixed",
          alt: image2alt
        }}
      />

      <Slide
        background={{
          backgroundImage: image6,
          backgroundAttachment: "fixed",
          alt: image6alt
        }}
      />

      <Slide
        background={{
          backgroundImage: image3,
          backgroundAttachment: "fixed",
          alt: image3alt
        }}
      />

      <Slide
        background={{
          backgroundImage: image4,
          backgroundAttachment: "fixed",
          alt: image4alt
        }}
      />

      <Slide
        background={{
          backgroundImage: image5,
          backgroundAttachment: "fixed",
          alt: image5alt
        }}
      />

      <Nav />
    </HeroSlider>
  );
};

export default app;
