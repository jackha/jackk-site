import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import image1 from "../components/Gallery/images/lego/lego-toy-box1.jpg";
import image2 from "../components/Gallery/images/lego/lego-toy-box2.jpg";


function ToyStorageBoxPage() {
  return (
    <div className="App">
      <div className='site-section'>
        <h1 id='jackk-meubels' className='site-contents'>Speelgoed opbergbox</h1>
        <p className='site-contents'>Nu kun je in stijl je constructiespeelgoed opbergen. Op de nopjes staat van wie de inhoud is. Tevens is de box stapelbaar waardoor je je kamer efficienter kunt gebruiken.</p>
        <p className='site-contents'>Materialen & afwerking: Allerlei soorten hout, zoals lariks, beuken, padouk, noten, essen, kersen. Afgewerkt in olie.</p>
      </div>
      <ImageMagnify image_small={image2} image={image2} alt="Speelgoed opbergbox met inhoud"/>
      <ImageMagnify image_small={image1} image={image1} alt="Speelgoed opbergbox van de zijkant"/>
      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align"/>
        </div>
      </div>
    </div>
  );
}

export default ToyStorageBoxPage;
