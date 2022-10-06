import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import image1 from "../components/Gallery/images/laundry-room/laundry-room-total.jpg";
import image2 from "../components/Gallery/images/laundry-room/mechanische-ventilatie.jpg";
import image3 from "../components/Gallery/images/laundry-room/nisje.jpg";
import image4 from "../components/Gallery/images/laundry-room/nisje-detail.jpg";
import image_washing_machine from "./images/wasmachine-mv.png";


function LaundryRoomPage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>De hoofdletter L van Laundry</h1>

        <p className='site-contents testimonial'>
        Testimonial
        </p>


        <p className='site-contents'>
        ~ Jackson & Shareen
        </p>
      </div>
      <ImageMagnify image_small={image_washing_machine} image={image_washing_machine} alt="Wasruimte met mechanische ventilatie" ratio="1.2"/>
      <div className='site-section'>
        <p className='site-contents'>
          De ruimte die ingericht moest worden heeft een wasmachine en een mechanische ventilatie; beiden mogen "weggewerkt" worden. Tevens was de wens dat er veel opbergruimte kwam.
        </p>
      </div>

      <ImageMagnify image_small={image1} image={image1} alt="Totaaloverzicht wasruimte" ratio="0.66"/>
      <div className='site-section'>
        <p className='site-contents'>
          Na wat varianten door te hebben besproken zijn we uitgekomen op een "L" vorm kast - dit zorgt voor de meeste opbergruimte.
        </p>
      </div>

      <ImageMagnify image_small={image3} image={image3} alt="Zijaanzicht kast met nisje" ratio="0.66"/>
      <div className='site-section'>
        <p className='site-contents'>
          Als detail boven de wasmachine is een nisje ingebouwd. Het nisje is van massief kersenhout gemaakt en zorgt voor een levendig geheel.
        </p>
      </div>

      <ImageMagnify image_small={image2} image={image2} alt="Mechanische ventilatie"/>
      <div className='site-section'>
        <p className='site-contents'>
          Ook de mechanische ventilatie heeft aandacht gekregen - een soort sierlijke bloem zou je kunnen zeggen.
        </p>
      </div>

      <ImageMagnify image_small={image4} image={image4} alt="Detail van nisje"/>

      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align" id="contact-mailbox-page"/>
        </div>
      </div>
    </div>
  );
}

export default LaundryRoomPage;
