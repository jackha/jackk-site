import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"
import image3 from "../components/Gallery/images/art-deco-walnut-cabinet/walnut-cabinet3.jpg";
import image8 from "../components/Slider/images/hero-wandkast.jpg";
import image_patterns from "../components/Gallery/images/acoustic-room-divider/room-divider2.jpg";
import image1 from "../components/Gallery/images/bauhaus-home-office/jackk-meubels-utrecht-zeist-overzicht-moderne-bauhaus-kast-in-het-bos.jpg";

function CustomFurniturePage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>Wat betekent dat eigenlijk, een meubel op maat?</h1>
        <p className='site-contents'>Mijn klanten kiezen voor unieke meubels waarin al zijn persoonlijke wensen zijn verwerkt, duurzaam en van hoge kwaliteit met een bijzonder design. Soms is dat omdat ze slimme oplossingen willen voor de beperkte ruimte in hun huis. Soms omdat ze een meubel willen dat een leven lang meegaat. En soms omdat ze gewoon een mooi meubel willen naar hun eigen smaak dat nergens te koop is.</p>
        <p className='site-contents'>Je leest het goed, het kan echt van alles zijn. Een dressoir, een kast, een tafel, een tv meubel. Ook kan het meubel voor allerlei ruimtes geschikt zijn, voor je woonkamer, je slaapkamer, wasruimte, werkkamer en noem maar op.</p>
              <p className='site-contents'>Met een passie voor kwaliteit en innovatie zijn ben ik gespecialiseerd in het cre&euml;ren van op maat gemaakt meubilair dat perfect aansluit bij uw unieke stijl en ruimte. Of u nu op zoek bent naar modern minimalisme of klassieke elegantie, ik sluit me helemaal bij jou aan.</p>

          </div>
          <ImageMagnify image_small={image1} image={image1} alt="Jackk Meubels Utrecht Zeist moderne kast passend bij een bauhaus stijl, in het midden van het bos">
              Dit uitzonderlijke meubelstuk is geinspireerd door het prachtige Bauhaus stijl huis en het bos waar het huis mee wordt omringd.

              Wil je meer over deze kast lezen? Klik dan <NavigateButton text="hier" link="/portfolio/bauhaus-home-office" class="navigate-inline" />.
          </ImageMagnify>


          <ImageMagnify image_small={image3} image={image3} alt="Art Deco kast, lade detail">
              Van de strakke lijnen en geometrische vormen tot de luxueuze materialen en decadente afwerkingen, dit stuk gaar naar de essentie van de Art Deco-stijl. Het massieve walnoothout wordt verrijkt met ingelegd hout van essen, waardoor een opvallend contrast ontstaat dat meteen de aandacht trekt.

              Met zijn gedurfde maar verfijnde esthetiek is deze Art Deco kast perfect voor deze klant, die graag een vleugje vintage glamour wou.
      Wil je meer over deze Art Deco kast lezen? Klik dan <NavigateButton text="hier" link="/portfolio/walnut-cabinet" class="navigate-inline"/>.
      </ImageMagnify>
      <ImageMagnify image_small={image8} image={image8} alt="Luxe moderne wandkast">
      Nog een voorbeeld met specifieke stijlwensen. Deze wandkast is modern met een twist, zullen we maar zeggen. Wil je meer over deze kast lezen? Klik dan <NavigateButton text="hier" link="/portfolio/home-office" class="navigate-inline" />.
      </ImageMagnify>
      <ImageMagnify image_small={image_patterns} image={image_patterns} alt="Kumiko patronen in kamerscherm">
        Wellicht wil je patronen verwerkt in je meubel, zoals in dit kamerscherm. Wil je hier meer over lezen? Klik dan <NavigateButton text="hier" link="/portfolio/kumiko-room-divider" class="navigate-inline" />.
      </ImageMagnify>

      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align" id="contact-custom-furniture-page" />
        </div>
      </div>
    </div>
  );
}

export default CustomFurniturePage;
