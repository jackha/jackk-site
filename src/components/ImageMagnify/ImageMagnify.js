//import React from 'react'
import ReactImageMagnify from "react-image-magnify";


// testcode...
      {/*
      <div className='site-section'>
        <div className='site-contents flex-container'>
          <div className='flex-item two-thirds-width'>
            
              <ReactImageMagnify {...{
                  smallImage: {
                      alt: 'Routing the inlay',
                      isFluidWidth: true,
                      src: image_inlay_small
                  },
                  largeImage: {
                      src: image_inlay,
                      width: 1800,
                      height: 1200
                  },
                  enlargedImagePosition: "over"
              }} />
          </div>
          <div className='flex-item one-thirds-width'>
            Tekst aan de rechter kant
          </div>
        </div>
      </div>
      <div className='site-section'>
        <div className='site-contents flex-container' id="wipinlaytext">
          <div className='flex-item half-width'>
            Tekst links
          </div>
          <div className='flex-item half-width'>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Work in progress fitting the inlay',
                    isFluidWidth: true,
                    src: image_wip_inlay_small
                },
                largeImage: {
                    src: image_wip_inlay,
                    width: 1800,
                    height: 1200
                },
                enlargedImagePosition: "over"
            }} />
          </div>
        </div>
      </div>

      <div className='site-section'>
        <div className='site-contents'>
          <ReactImageMagnify {...{
              smallImage: {
                  alt: 'Art Deco walnut cabinet with inlay doors, lower part',
                  isFluidWidth: true,
                  src: image1small
              },
              largeImage: {
                  src: image1,
                  width: 1800,
                  height: 1200
              },
              enlargedImagePosition: "over"
          }} />
        </div>
        </div>*/}

// required: image_alt, image_small, image
// optional: text
function ImageMagnify(props) {
  var text_html = ""
  var ratio = 1.5
  var size_x = 1200 * ratio
  var size_y = 1200

  if ((props.text) || (props.children)) {
    text_html = (<div className='site-contents'>{props.text}{props.children}</div>);
  }
  if (props.ratio) {
    size_x = 1200 * props.ratio
  }
  return (
    <div className='site-section'>
        <div className={`${props.class} site-contents`}>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: props.image_alt,
                    isFluidWidth: true,
                    src: props.image_small
                },
                largeImage: {
                    src: props.image,
                    width: size_x,
                    height: size_y
                },
                enlargedImagePosition: "over"
            }} />
        </div>        
        {text_html}
    </div>
)
};

export default ImageMagnify;