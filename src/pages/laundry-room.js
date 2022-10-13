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
        Toen we hoorden dat Jack voor zichzelf ging beginnen, hadden we gelijk al een verzoek klaarstaan! Wij wilden voor onze wasruimte een elegante oplossing waarin zowel de wasmachine en ventilatie weggewerkt kon worden, maar ook een ruimte creëren met heel veel opbergruimte. Het was letterlijk een zeer grote klus, maar gelukkig was Jack bereid om deze opdracht op zich te nemen.
        </p>

        <p className='site-contents testimonial'>
        En het eindresultaat mag er zijn! Na wat varianten door te hebben besproken zijn we uitgekomen op een "L" vorm kast, hierin wordt de beschikbare ruimte optimaal benut en is de kale, open ruimte getransformeerd in een stijlvolle hoek. We hebben nog overwogen om er mooie motieven in te laten maken, gezien zijn designs er altijd fantastisch uitzien, maar uiteindelijk hebben we voor relatief simpel gekozen, omdat het een kast op zolder betreft en het op deze manier veel rust geeft.
        </p>

        <p className='site-contents testimonial'>
        De details geven het geheel een unieke look. Het nisje wat boven de wasmachine is ingebouwd is van massief kersenhout en zorgt voor een levendig geheel. Zelfs het rooster voor de mechanische ventilatie heeft aandacht gekregen: een mooi patroon in de vorm van een soort sierlijke bloem. Al met al zijn we ontzettend tevreden over alles en doen we de was nu met veel plezier!
        </p>


        <p className='site-contents'>
        ~ Jackson & Shareen
        </p>
      </div>
      <ImageMagnify image_small={image_washing_machine} image={image_washing_machine} alt="Wasruimte met mechanische ventilatie" ratio="1.2"/>

      <ImageMagnify image_small={image1} image={image1} alt="Totaaloverzicht wasruimte" ratio="0.66"/>

      <ImageMagnify image_small={image3} image={image3} alt="Zijaanzicht kast met nisje" ratio="0.66"/>

      <ImageMagnify image_small={image2} image={image2} alt="Mechanische ventilatie"/>

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
