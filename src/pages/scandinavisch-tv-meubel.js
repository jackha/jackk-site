import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import image1 from "../components/Gallery/images/scandinavisch-tv-meubel/jackk-meubels-utrecht-design-massief-hout-tv-meubel-scandinavisch.png";
import image2 from "../components/Gallery/images/scandinavisch-tv-meubel/jackk-meubels-utrecht-design-massief-hout-tv-meubel-scandinavisch-lade-detail.jpg";
import image3 from "../components/Gallery/images/scandinavisch-tv-meubel/jackk-meubels-utrecht-design-massief-hout-tv-meubel-scandinavisch-studio.jpg";
import image4 from "../components/Gallery/images/scandinavisch-tv-meubel/jackk-meubels-utrecht-design-massief-hout-scandinavisch-bijzettafel.jpg";

function ScandinavianDresserPage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>Het Scandinavische tv meubel</h1>

              <ImageMagnify image_small={image1} image={image1} alt="Jackk Meubels Utrecht Zeist scandinavisch tv meubel" ratio="0.75"/>

        <p className='site-contents testimonial'>
                  Een meubel rond een grote tv met lades om ruim 600 cd's te kunnen bergen en plek voor audioapparatuur, enkele boeken en wat foto's en prullaria. De vraag aan Jack was of hij dit voor mij kon maken. Zijn antwoord was duidelijk: jazeker!
              </p>

              <p className='site-contents testimonial'>
                  We spraken bij mij thuis af voor het ori&euml;ntatiegesprek (zie: <NavigateButton text="proces" class="navigate-inline" link="/process"/>) zodat Jack een indruk kon krijgen van mijn huidig interieur en de ruimte waar het meubel geplaats zou moeten worden. Jack vroeg mij vervolgens nog van alles over de functie en afmetingen die de kast moest hebben, de 
              </p>

              <p className='site-contents testimonial'>
                  Na enkele weken kwam Jack langs met een drietal zeer verschillende ontwerpen. Een van de 3 ontwerpen voelde gelijk goed en is uiteindelijk het vertrekpunt geworden voor het prachtige tv meubel. Tijdens de bouw van de kast werden we zeer goed op de hoogte gehouden van de vorderingen en hebben we zelfs een bezoek gebracht aan de werkplaats van Jack.
              </p>

        <p className='site-contents'>
        ~ Hans Terpstra, Peize
        </p>
          </div>


          <ImageMagnify image_small={image3} image={image3} alt="Jackk Meubels Utrecht Zeist scandinavisch tv meubel studio foto" ratio="0.75" />
          <p className='site-contents'>
              Het Scandinavische tv-meubel is een prachtig voorbeeld van hoe vorm en functie op perfecte wijze samenkomen. Dit meubelstuk combineert een strak en eigentijds design met een warme en ronde uitstraling, waardoor het een unieke en sfeervolle toevoeging is aan de woonkamer.
              </p>
              <p className='site-contents'>
              De vorm van het Scandinavische tv-meubel is doordacht en functioneel. De ronde vormen zorgen voor een zachte en vriendelijke uitstraling, terwijl de strakke lijnen zorgen voor een eigentijds en modern karakter. De combinatie van deze twee elementen cre&euml;ert een harmonieus geheel dat zowel esthetisch als praktisch is.
          </p>
          <ImageMagnify image_small={image2} image={image2} alt="Jackk Meubels Utrecht Zeist scandinavisch tv meubel detail van de massief houten lade" ratio="0.75" />
          <p className='site-contents'>
              De massief houten lades met prachtige tekening voegen een uniek en karakteristiek element toe aan het geheel. De natuurlijke patronen en texturen van het hout zorgen voor een warme en organische uitstraling, terwijl de kwaliteit en duurzaamheid van het materiaal zorgen voor een luxe uitstraling en een gevoel van vakmanschap.
              <p className='site-contents'>
                  </p>
              Het massieve essenhout in combinatie met het kersenhout draagt bij aan de gezelligheid en knusheid van het interieur. Door de grote lades het meubel voldoende ruimte voor alle cd's. Rechts passen al je multimedia-apparatuur en accessoires. Zo blijft de woonkamer opgeruimd en georganiseerd, terwijl je tegelijkertijd kunt genieten van een stijlvol en tijdloos design.
          </p>
          <p className='site-contents'>
              Al met al is het Scandinavische tv-meubel een prachtig voorbeeld van hoe vorm en functie perfect kunnen samenkomen. Het combineert een warme en ronde uitstraling met een eigentijds design en biedt tegelijkertijd voldoende opbergruimte en functionaliteit. Dit meubelstuk is niet alleen een lust voor het oog, maar ook een waardevolle toevoeging aan ieder interieur.
          </p>
          <ImageMagnify image_small={image4} image={image4} alt="Jackk Meubels Utrecht Zeist scandinavisch bijpassend bijzettafel" ratio="0.75" />

      <p className='site-contents'>
              Het bijpassend bijzettafel complementeert het tv meubel completeren door extra functionaliteit en stijl toe te voegen. Deze tafel kan dienen als een handige plek om drankjes, snacks of andere items neer te zetten, waardoor de ruimte nog meer wordt opgefleurd en georganiseerd. Het zorgt voor een samenhangend en harmonieus geheel.
      </p>

  
      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align" id="contact-scandinavian-dresser-page"/>
        </div>
      </div>
    </div>
  );
}

export default ScandinavianDresserPage;
