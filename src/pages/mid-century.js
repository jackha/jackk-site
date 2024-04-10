import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import image1 from "../components/Gallery/images/mid-century/jackk-meubels-utrecht-zeist-design-mid-century-inbouw-kast-woonkamer-overzicht.jpg";
import image2 from "../components/Gallery/images/mid-century/jackk-meubels-utrecht-zeist-design-mid-century-inbouw-kast-woonkamer-overzicht2.jpg";
import image3 from "../components/Gallery/images/mid-century/jackk-meubels-utrecht-zeist-design-mid-century-inbouw-kast-woonkamer-klep.jpg";
import image4 from "../components/Gallery/images/mid-century/jackk-meubels-utrecht-zeist-design-mid-century-inbouw-kast-woonkamer-zwaluw-staart.jpg";
import image5 from "../components/Gallery/images/mid-century/jackk-meubels-utrecht-zeist-design-mid-century-inbouw-kast-woonkamer-luik.jpg";
import image6 from "../components/Gallery/images/mid-century/jackk-meubels-utrecht-zeist-design-mid-century-inbouw-kast-woonkamer-cd-voorkant.jpg";
import image7 from "../components/Gallery/images/mid-century/jackk-meubels-utrecht-zeist-design-mid-century-inbouw-kast-woonkamer-boeken.jpg";

function GeaPage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>Een mid-century inbouwkast</h1>

              <ImageMagnify image_small={image1} image={image1} alt="Jackk Meubels Utrecht Zeist overzicht mid-century design inbouwkast" ratio="0.75"/>

        <p className='site-contents testimonial'>
                  <h3>Een kast van Jack</h3>
              </p>

              <p className='site-contents testimonial'>

                  Jack heeft goed geluisterd en gekeken. Naar mijn verhaal, de gewenste sfeer, de omgeving waar de kast in zou komen...
              </p>

              <p className='site-contents testimonial'>
                  Er kwamen 2 mooie 1e voorstellen uit, die allebei zo leuk waren dat we er een mix van hebben gemaakt ...
              </p>

              <p className='site-contents testimonial'>
                  Een kast voor van alles, want het moest een mid century vibe hebben. Jack heeft voor alle details zijn creatieve kant uitgedaagd. Met als resultaat een mooi afgewerkte kast die in mijn huis past alsof ie er altijd al had kunnen zijn, maar met mooie details en daardoor toch ook eyecatch kantjes.
              </p>

              <p className='site-contents testimonial'>
                  En erg handig in het dagelijks gebruik !!
        </p>

        <p className='site-contents'>
        ~ Richard Raaphorst, Joure
        </p>
          </div>

          <ImageMagnify image_small={image2} image={image2} alt="Jackk Meubels Utrecht Zeist overzicht vanuit een andere hoek mid-century design inbouwkast" ratio="0.75" />


      <p className='site-contents'>
              Ik waardeer het altijd enorm wanneer een klant zelf de tijd neemt om te vertellen over het project. Het laat zien dat de klant betrokken is bij zijn aankoop en oprecht ge&iuml;nteresseerd is in het stuk dat hij heeft gekocht. Het maakt het werk voor mij nog leuker en zinvoller en ik ben altijd dankbaar voor het delen van deze mooie verhalen.
      </p>

          <ImageMagnify image_small={image3} image={image3} alt="Jackk Meubels Utrecht Zeist vintage klep mid-century design inbouwkast" ratio="0.75" />


          <p className='site-contents'>
              De retro vintage mid-century modern kast is een ware eyecatcher in elk interieur. Met zijn strakke lijnen, minimalistische design en warme houttinten brengt deze kast direct een vleugje nostalgie en stijl in de ruimte.
          </p>
          <ImageMagnify image_small={image7} image={image7} alt="Jackk Meubels Utrecht Zeist boeken mid-century design inbouwkast" ratio="0.75" />

          <p className='site-contents'>
              De kast is gemaakt van berken multiplex met delen van hoogwaardig massief notenhout en heeft een tijdloos ontwerp dat perfect aansluit bij zowel moderne als klassieke interieurs. 

          </p>

          <ImageMagnify image_small={image6} image={image6} alt="Jackk Meubels Utrecht Zeist cd voorkant mid-century design inbouwkast" ratio="0.75" />
          <p className='site-contents'>
              De subtiele details, zoals de schuine fronten welke bedoeld is om cd's mee te tonen, de afgeronde hoeken, geven de kast een speels karakter en maken het tot een uniek stuk in elke ruimte. De zwaluwstaarten in de cd lades maken het helemaal af. De kast heeft voldoende opbergruimte met verschillende compartimenten en laden, waardoor je al je spullen netjes en georganiseerd kunt opbergen.

          </p>
          <ImageMagnify image_small={image5} image={image5} alt="Jackk Meubels Utrecht Zeist luik detail mid-century design inbouwkast" ratio="0.75" />
          <p className='site-contents'>
              Voeg een vleugje retro- chic toe aan je interieur en geniet van de elegantie en charme die deze kast met zich meebrengt.

          </p>
          <ImageMagnify image_small={image4} image={image4} alt="Jackk Meubels Utrecht Zeist klassieke zwaluw staart mid-century design inbouwkast" ratio="0.75" />

      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align" id="contact-mid-century-page"/>
        </div>
      </div>
    </div>
  );
}

export default GeaPage;
