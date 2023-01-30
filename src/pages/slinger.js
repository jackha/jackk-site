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
         Het huis is geupgraded met vloerverwarming en een nieuwe vloer. Het speelgoed is voor het grootste deel uit de woonkamer verdwenen om plaats te maken voor wat moois. In het midden van de woonkamer moet een nieuwe kast komen. Gezellig en sprekend, met plek voor boeken, platen en platenspeler en nog wat speelgoed wat "weggeborgen" mag worden.
        </p>

        <p className='site-contents'>
         Met deze opdracht ben ik een tijd geleden aan de slag gegaan. Zoals altijd presenteer ik meerdere ontwerpen die zoveel mogelijk aansluiten bij de wensen van de klant. De drie ontwerpen vielen erg in de smaak, maar deze kast kreeg duidelijk de voorkeur.
        </p>

        <p className='site-contents'>
         Met een lijn die als het ware als een rode draad door de kast loopt, met schuin lopende delen, met eikenhout en als contrast essenhout presenteer ik bij deze: "De Slinger".
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
