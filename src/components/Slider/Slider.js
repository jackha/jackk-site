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
import wandkast from './images2/hero-muurkast-IMG_3397_edit.jpg';
import bar from './images2/hero-bar.jpg';
import rond from './images2/hero-ronde-tafel.jpg';
import kattenmeubel from './images2/hero-crazy-cat-contraption-IMG_20201202_121855_edit.jpg';
import schaakbord from './images2/hero-chess-DSCF4468_edit.jpg';

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
          backgroundImage: wandkast,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: bar,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: rond,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: kattenmeubel,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: schaakbord,
          backgroundAttachment: "fixed"
        }}
      />

      <Nav />
    </HeroSlider>
  );
};

export default app;
