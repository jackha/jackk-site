import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import image1 from "../components/Gallery/images/modern-tv-meubel/jackk-meubels-utrecht-modern-tv-meubel-overzicht.jpg";
import image2 from "../components/Gallery/images/modern-tv-meubel/jackk-meubels-utrecht-modern-tv-meubel-lade.jpg";
import image3 from "../components/Gallery/images/modern-tv-meubel/jackk-meubels-utrecht-modern-tv-meubel-verlichting.jpg";
import image4 from "../components/Gallery/images/modern-tv-meubel/jackk-meubels-utrecht-modern-tv-meubel-jack-bezig.jpg";
import image5 from "../components/Gallery/images/modern-tv-meubel/jackk-meubels-utrecht-modern-tv-meubel-studio.jpg";
import image6 from "../components/Gallery/images/modern-tv-meubel/jackk-meubels-utrecht-modern-tv-meubel-binnenwerk.jpg";


function ModernTvFurniturePage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>Het moderne tv meubel</h1>

              
        <p className='site-contents testimonial'>
                 Hij ziet er mooier uit dan op de tekening!
              </p>

        <p className='site-contents'>
        ~ Wouter de Vries, Utrecht
              </p>

              <ImageMagnify image_small={image1} image={image1} alt="Jackk Meubels Utrecht Zeist moderne tv meubel met schuine kant" />

          </div>

          <p className='site-contents'>
              Het bijzondere moderne tv meubel met schuine kanten is een uniek en opvallend stuk dat een speciale touch geeft aan deze woonkamer. De schuine kanten zorgen voor een eigentijdse uitstraling en maken het meubelstuk echt opvallend. Als dat niet genoeg opvalt heb je ook nog kleuren die het geheel afmaken. En last, but not least: de details in massief essenhout en notenhout zorgen ervoor dat het geheel ook een vriendelijke uitstraling heeft.
          </p>
          
          <ImageMagnify image_small={image3} image={image3} alt="Jackk Meubels Utrecht Zeist moderne tv meubel ingezoomd op de verlichting" />
          
          <p className='site-contents'>
              De schuine kanten waren een mooie uitdaging om te maken. Wat echter nog uitdagender was dan het vervaardigen van de schuine kanten, was het cre&euml;ren van een goed functionerend binnenwerk dat zorgt voor ventilatie en een effici&euml;nte bekabeling van alle apparaten. Omdat moderne televisies, speakers en andere multimedia-apparaten meer en meer verbonden zijn met elkaar, is het belangrijk dat er voldoende ruimte is voor bekabeling en dat er ook voldoende ventilatie is om oververhitting te voorkomen.
          </p>

          <ImageMagnify image_small={image6} image={image6} alt="Jackk Meubels Utrecht Zeist moderne tv meubel binnenwerk" />
          <p className='site-contents'>
              Het ontwerpen van een doordacht binnenwerk dat alle elektronica op een nette en georganiseerde manier kan huisvesten, terwijl tegelijkertijd ook de nodige ventilatie wordt gegarandeerd, was geen gemakkelijke taak. Het vereiste veel creativiteit en vakmanschap om te zorgen dat het tv meubel er niet alleen mooi uitziet, maar ook functioneel en praktisch is in het dagelijks gebruik.

          </p>
          <ImageMagnify image_small={image2} image={image2} alt="Jackk Meubels Utrecht Zeist moderne tv meubel massieve schuine lade detail" />
          <p className='site-contents'>
              Deze unieke massief houten lade is voorzien van een schuine voorkant, waardoor het een bijzonder en onderscheidend element toevoegt aan het meubelstuk.
          </p>
          <ImageMagnify image_small={image4} image={image4} alt="Jackk Meubels Utrecht Zeist moderne tv meubel Jack is bezig met plaatsing" />
          <p className='site-contents'>
              Al met al is het bijzondere moderne tv meubel met schuine kanten een prachtig staaltje van innovatief design en doordacht vakmanschap, waarbij zowel vorm als functie op een unieke manier samenkomen. Het is een ware eyecatcher in de woonkamer en een bewijs van de mogelijkheden van modern meubeldesign.
          </p>
          <ImageMagnify image_small={image5} image={image5} alt="Jackk Meubels Utrecht Zeist moderne tv meubel studio foto" />

      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align" id="contact-modern-tv-furniture-page"/>
        </div>
      </div>
    </div>
  );
}

export default ModernTvFurniturePage;
