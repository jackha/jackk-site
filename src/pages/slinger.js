import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import image1 from "../components/Gallery/images/slinger/de-slinger-totaal.jpg";
import image2 from "../components/Gallery/images/slinger/de-slinger-detail1.jpg";
import image3 from "../components/Gallery/images/slinger/de-slinger-detail2.jpg";


function SlingerPage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>De Slinger</h1>

        <p className='site-contents'>
        De Slinger
        </p>

        <p className='site-contents testimonial'>
        </p>

        <p className='site-contents'>
        ~ Mieke en Peter-Paul Buchner
        </p>
      </div>

      <ImageMagnify image_small={image3} image={image3} alt="De Slinger totaal" />
      <ImageMagnify image_small={image1} image={image1} alt="De Slinger totaal" ratio="0.66"/>
      <ImageMagnify image_small={image2} image={image2} alt="De Slinger totaal"/>

      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align" id="contact-slinger-page"/>
        </div>
      </div>
    </div>
  );
}

export default SlingerPage;
