import NavigateButton from "../components/NavigateButton/NavigateButton" 
import visitekaartjeshouder_image from "./images/visitekaartjeshouder.jpg"
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"


function JacksThingsPage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>JacksThings</h1>
        <p className='site-contents'>Ik ben eigenlijk continu bezig met "leuke" dingen bedenken en maken... niet alleen meubels. Voor allerlei kleine dingen die niet onder "Jackk Meubels" vallen heb ik <NavigateButton link="https://www.etsy.com/shop/JacksThings" text="JacksThings" class="navigate-inline"/> bedacht... kleine hebbedingetjes die ik voor mezelf heb gemaakt, maar waarvan ik denk dat het leuk is om te delen. Ik heb de tekeningen netjes en openbaar gemaakt zodat je die vervolgens zelf kunt maken.</p>
        <ImageMagnify image_small={visitekaartjeshouder_image} image={visitekaartjeshouder_image} alt="Foto van visitekaartjeshouder">
          Ik kon nergens een mooie visitekaartjeshouder vinden, dus ik heb mijn eigen versie bedacht en gemaakt. De uitvoering op de foto is van massief notenhout.
        </ImageMagnify>

        <p className='site-contents'><NavigateButton link="https://www.etsy.com/shop/JacksThings" text="JacksThings on Etsy"/></p>
      </div>
    </div>
  );
}

export default JacksThingsPage;

