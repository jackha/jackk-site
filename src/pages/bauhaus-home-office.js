import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import image1 from "../components/Gallery/images/bauhaus-home-office/jackk-meubels-utrecht-zeist-overzicht-moderne-bauhaus-kast-in-het-bos.jpg";
import image2 from "../components/Gallery/images/bauhaus-home-office/jackk-meubels-utrecht-zeist-overzicht-moderne-bauhaus-kast-in-het-bos-overdag.jpg";
import image3 from "../components/Gallery/images/bauhaus-home-office/jackk-meubels-detail-of-modern-cabinet-zeist-utrecht.jpg";
import image4 from "../components/Gallery/images/bauhaus-home-office/jackk-meubels-zeist-utrecht-studio-shot-of-modern-cabinet.jpg";
import image5 from "../components/Gallery/images/bauhaus-home-office/jackk-meubels-zeist-utrecht-detail-of-modern-cabinet-front.jpg";
import image6 from "../components/Gallery/images/bauhaus-home-office/jackk-meubels-zeist-utrecht-detail-of-modern-cabinet-legs.jpg";

function BauhausHomeOfficePage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>Moderne werkkamer in het midden van het bos</h1>
              <ImageMagnify image_small={image2} image={image2} alt="Jackk Meubels Utrecht Zeist overzichtsfoto overdag van een moderne kast in het midden van het bos, passend bij het bauhaus huis" ratio="1.33" />
        <p className='site-contents'>
                  Ik stond voor de uitdaging een kast te ontwerpen die de aandacht trok en tegelijkertijd naadloos opging in de omgeving. Het huis heeft duidelijke kenmerken van Bauhaus en wordt omringd door bos. De visie van mijn klant was duidelijk: een strak, modern ontwerp dat de opbergruimte maximaliseerde en elegantie uitstraalde. Daarnaast moest het hun platenspeler, luidspekers en meer spullen herbergen. Met deze aanwijzingen ben ik gaan ontwerpen.
              </p>
              <ImageMagnify image_small={image3} image={image3} alt="Jackk Meubels Utrecht Zeist overzichtsfoto overdag van een moderne kast in het midden van het bos, passend bij het bauhaus huis" ratio="1.33" />

                      <p className='site-contents'>
                  De resulterende ontwerpen brachten vorm en functie samen, de ene kast was groter dan de ander, maar ze besloegen moeiteloos nagenoeg de gehele vier meter van de muur.Strakke lijnen en minimalistische esthetiek zorgden ervoor dat de kast de ruimte niet overheerste, maar juist de sfeer versterkte.Ruime opbergmogelijkheden werden naadloos geintegreerd, met vele open vakken om aan de behoeften van mijn klant te voldoen.
              </p>

              <p className='site-contents'>
                  De ontwerpen werken super enthousiast ontvangen door mijn klant, ik was blij omdat ik erg in de juiste richting zat. Uiteindelijk hebben we voor het grootste ontwerp gekozen. Je hebt immers altijd "teveel" spullen en dit wordt de enige kast in een toch vrij ruimte kamer.
              </p>

              <p className='site-contents'>
                  Tijdens het bouwen van de kast, de uitvoering, heb ik vele foto's en video's uitgewisseld. Ook hebben we de punten op de i gezet en de laatste knopen doorgehakt. Het resultaat mag er wezen!
              </p>

              <ImageMagnify image_small={image1} image={image1} alt="Jackk Meubels Utrecht Zeist overzichtsfoto van een moderne kast in het midden van het bos, passend bij het bauhaus huis" ratio="1.33" />

              <ImageMagnify image_small={image4} image={image4} alt="Jackk Meubels Utrecht Zeist studio shot van de moderne kast, in het midden in het bos" ratio="0.75" />
              <ImageMagnify image_small={image5} image={image5} alt="Jackk Meubels Utrecht Zeist detail van het front van de moderne kast" ratio="1.33" />
              <ImageMagnify image_small={image6} image={image6} alt="Jackk Meubels Utrecht Zeist detail van de poot van de moderne kast" ratio="1.33" />
              <p className='site-contents'>
              In design kasten zorgen uiteindelijk de details ervoor dat het geen gewone kast is, maar echt een meubel op maat helemaal naar jouw wensen ontworpen. Ze blazen leven in een stuk en voegen diepte, karakter en verfijning toe. Van ingewikkeld freeswerk tot zorgvuldig geselecteerde hardware, elk detail draagt bij aan de algehele esthetiek en functionaliteit, waardoor een werkelijk uitzonderlijk stuk ontstaat.
                  </p>
      </div>

      <p className='site-contents'>
        
      </p>



      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align" id="contact-home-office-page"/>
        </div>
      </div>
    </div>
  );
}

export default BauhausHomeOfficePage;
