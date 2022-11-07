import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import image1 from "../components/Gallery/images/home-office/werkkamer-hoek.jpg";
import image2 from "../components/Gallery/images/home-office/werkkamer-zijkant.jpg";
import image3 from "../components/Gallery/images/home-office/jack-aan-het-werk.jpg";
import image4 from "../components/Gallery/images/home-office/stroom-vak.jpg";
import image5 from "../components/Gallery/images/home-office/kastdeurtje.jpg";
import image6 from "../components/Gallery/images/home-office/bureau-poot.jpg";

function GeaPage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>Werkkamer</h1>

        <p className='site-contents testimonial'>
        Wat ik de afgelopen jaren heb geleerd is dat het heel belangrijk is om in een fijne omgeving je werk te doen.
        Daarnaast wilde ik een plek om mijn hobby spullen te kunnen laten staan. Jack Ha heeft mijn wensen vertaald in een creatieve oplossing in een klein kamertje.
        </p>

        <p className='site-contents testimonial'>
        De kleuren, houtsoort en afwerkingsopties waren allemaal aan mij om uit te zoeken. De technische handenarbeid mocht ik aan hem overlaten.
        </p>

        <p className='site-contents testimonial'>
        Heel blij met het resultaat!
        </p>

        <p className='site-contents'>
        ~ Lisette Altena, Amersfoort
        </p>
      </div>
      <ImageMagnify image_small={image1} image={image1} alt="Hoekaanzicht werkkamer met design kast" ratio="1.33"/>
      <ImageMagnify image_small={image2} image={image2} alt="Zijaanzicht werkkamer met design kast" ratio="1.33"/>
      <ImageMagnify image_small={image3} image={image3} alt="Jack aan het werk" ratio="0.75"/>
      <ImageMagnify image_small={image4} image={image4} alt="Stroom weggewerkt in bureau"/>
      <p className='site-contents'>
        De stroom is weggewerkt in het bureau. Alles kan mooi aangesloten blijven, eventuele adapters etc verdwijnen achter de klep.
      </p>

      <ImageMagnify image_small={image5} image={image5} alt="Kastdeurtje detail zicht"/>
      <ImageMagnify image_small={image6} image={image6} alt="Bureaupoot uitgelicht"/>

      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align" id="contact-home-office-page"/>
        </div>
      </div>
    </div>
  );
}

export default GeaPage;
