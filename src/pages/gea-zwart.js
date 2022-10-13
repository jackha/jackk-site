import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import image1 from "../components/Gallery/images/gea-zwart/gea_zwart_collaboration_inlay_overview.jpg";


function LaundryRoomPage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>Kunst met Studio Gea Zwart</h1>

        <p className='site-contents'>
        Ingelegd hout i.s.m. beeldend kunstenaar <a href="https://geazwart.nl/">Gea Zwart</a>
        </p>

        <p className='site-contents'>
        Vanaf de zomer 2022 leerde ik Gea kennen en al gauw merkte ik dat er een klik was. Beiden zitten we in de creatieve sector en al snel kwamen we op het idee om iets van een kunstwerkje ergens op te maken. 
        </p>

        <p className='site-contents'>
        Ons concept heet MEUBELS MET KUNST en daarvan zie je hieronder een sample. Moderne kunst ingelegd en gegrafeerd in massief hout uitgevoerd op meubels en andere objecten van hout. Heb je een leuk idee of wil je meer weten? Stuur me gerust een <ContactButton text="berichtje" class="navigate-inline" id="contact-gea-inline"/>. 
        </p>
      </div>
      <ImageMagnify image_small={image1} image={image1} alt="Sample van kunstwerk met ingelegd hout" ratio="1.1"/>

      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align" id="contact-gea-page"/>
        </div>
      </div>
    </div>
  );
}

export default LaundryRoomPage;
