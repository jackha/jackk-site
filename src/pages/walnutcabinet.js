import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import ReactImageMagnify from "react-image-magnify";

import image_inlay_small from "../components/Gallery/images/art-deco-walnut-cabinet/ash-inlay-shaper-small.jpg";
import image_inlay from "../components/Gallery/images/art-deco-walnut-cabinet/ash-inlay-shaper.jpg";

import image_wip_inlay_small from "../components/Gallery/images/art-deco-walnut-cabinet/wip-inlay-small.jpg";
import image_wip_inlay from "../components/Gallery/images/art-deco-walnut-cabinet/wip-inlay.jpg";

import image1_small from "../components/Gallery/images/art-deco-walnut-cabinet/walnut-cabinet1-small.jpg";
import image1 from "../components/Gallery/images/art-deco-walnut-cabinet/walnut-cabinet1.jpg";

import image2 from "../components/Gallery/images/art-deco-walnut-cabinet/walnut-cabinet2.jpg";
import image2b from "../components/Gallery/images/art-deco-walnut-cabinet/walnut-cabinet2b.jpg";

import image3 from "../components/Gallery/images/art-deco-walnut-cabinet/walnut-cabinet3.jpg";
import image4 from "../components/Gallery/images/art-deco-walnut-cabinet/walnut-cabinet4.jpg";
import image5 from "../components/Gallery/images/art-deco-walnut-cabinet/walnut-cabinet5.jpg";
import image5b from "../components/Gallery/images/art-deco-walnut-cabinet/walnut-cabinet5b.jpg";
import image5c from "../components/Gallery/images/art-deco-walnut-cabinet/walnut-cabinet5c.jpg";


function WalnutCabinetPage() {
  return (
    <div className="App">
      <div className='site-section'>
        <h1 id='jackk-meubels' className='site-contents'>Art Deco kast</h1>
        <p className='site-contents'>Je komt het huis binnen. Recht voor je is een deur die naar een kamer gaat. Links van de deur is een hoekje en rechts is een wand van 2 meter lang, waar ook een radiator hangt. "Dat is de plek waar ik mijn spullen op wil bergen."</p>
        <p className='site-contents'>"Ik wil mijn schoenen kwijt kunnen en mijn jassen, mijn handschoenen, en de voordeur moet helemaal open kunnen." Mooi, de klant heeft een duidelijk beeld wat hij wil. Specifiek wordt Art Deco een aantal keer genoemd, waarna ik een paar staaltjes laat zien van massief hout. Heel snel wordt al bekend dat is het meubel iets van notenhout zal krijgen. Als contrast suggereer ik essen en de klant gaat akkoord.</p>
      </div>
      <ImageMagnify image_small={image_inlay_small} image={image_inlay} alt="De stukken essenhout voor de inleg wordt gefreesd" text="De stukken essenhout voor de inleg wordt gefreesd"/>
      <ImageMagnify image_small={image_wip_inlay_small} image={image_wip_inlay} alt="Eens kijken of de stukken inleg ook passen..." text="Eens kijken of de stukken inleg ook passen..."/>
      <ImageMagnify image_small={image1_small} image={image1} alt="Art Deco kast, onderste deel" text="Art Deco kast, onderste deel"/>
      <ImageMagnify image_small={image2} image={image2} alt="Art Deco kast, linker deel" text="Art Deco kast, linker deel" ratio="0.66" />
      <ImageMagnify image_small={image2b} image={image2b} alt="Art Deco kast, linker deel open" text="Art Deco kast, linker deel open" ratio="0.66" />

      <ImageMagnify image_small={image3} image={image3} alt="Art Deco kast, lade detail" text="Art Deco kast, lade detail" />
      <ImageMagnify image_small={image4} image={image4} alt="Art Deco kast, greep en front detail" text="Art Deco kast, greep en front detail" ratio="0.66"/>

      <ImageMagnify image_small={image5} image={image5} alt="Art Deco kast, rechter deel" text="Art Deco kast, rechter deel" ratio="0.66"/>
      <ImageMagnify image_small={image5b} image={image5b} alt="Art Deco kast, radiator ombouw" text="Art Deco kast, radiator ombouw" />
      <ImageMagnify image_small={image5c} image={image5c} alt="Art Deco kast, hangers" text="Art Deco kast, hangers" />


      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align"/>
        </div>
      </div>
    </div>
  );
}

export default WalnutCabinetPage;
