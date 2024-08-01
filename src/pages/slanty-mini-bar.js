import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"


import image1 from "../components/Gallery/images/slanty-mini-bar/jackk-meubels-slanty-minibar-solid-cherry-wood-slanted-front-stocked.jpg";
import image2 from "../components/Gallery/images/slanty-mini-bar/jackk-meubels-slanty-minibar-solid-cherry-wood-top.jpg";
import image3 from "../components/Gallery/images/slanty-mini-bar/jackk-meubels-slanty-minibar-solid-cherry-wood-slanted-front-1.jpg";
import image4 from "../components/Gallery/images/slanty-mini-bar/jackk-meubels-slanty-minibar-solid-cherry-wood-slanted-front-2.jpg";


function SlantyMiniBarPage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>Eethoek "Origami"</h1>

              <ImageMagnify image_small={image3} image={image3} alt="Jackk Meubels | minibar Slanty met massief kersen top" ratio="1.33" />

        <p className='site-contents'>
                  Deze design minibar, met een massief kersenhouten top, voegt een warme en luxe uitstraling toe. De ruimtebesparende elementen, de schuine voorkant en schuifdeuren, maken het een praktische keuze voor deze specifieke ruimte. Het strakke design zorgt ervoor dat het meubel naadloos opgaat in dit huis. De glazen deuren bieden een stijlvolle vitrine voor mooie glazen en flessen, waardoor je je mooiste stukken kunt tentoonstellen zonder stof of schade. Dit functionele en elegante meubelstuk combineert schoonheid met efficiëntie, perfect passend in deze eetruimte.
        </p>

      </div>


          <ImageMagnify image_small={image1} image={image1} alt="Jackk Meubels | Totaaloverzicht Slanty minibar met inhoud" ratio="0.75" />
          <ImageMagnify image_small={image2} image={image2} alt="Jackk Meubels | de massief kersen top van minibar Slanty" ratio="1.33" />

          <ImageMagnify image_small={image4} image={image4} alt="Jackk Meubels | minibar Slanty met massief kersen top" ratio="1.33" />

      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align" id="contact-slanty-page"/>
        </div>
      </div>
    </div>
  );
}

export default SlantyMiniBarPage;
