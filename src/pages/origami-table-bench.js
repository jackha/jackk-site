import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"


import image1 from "../components/Gallery/images/origami-table-bench/jackk-meubels-george-en-jack-eettafel-eetbank-totaal.jpg";
import image2 from "../components/Gallery/images/origami-table-bench/jackk-meubels-eettafel-eetbank-essen-kersen-onder-een-hoek.jpg";
import image3 from "../components/Gallery/images/origami-table-bench/jackk-meubels-eettafel-eetbank-essen-kersen-schuin.jpg";
import image4 from "../components/Gallery/images/origami-table-bench/jackk-meubels-eetbank-essen-kersen-schuin.jpg";


function OrigamiTableBenchPage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>Eethoek "Origami"</h1>


              <ImageMagnify image_small={image1} image={image1} alt="Jackk Meubels | Totaaloverzicht met George en Jack aan de nieuwe eettafel, op de nieuwe eetbanken" ratio="1.33" />

        <p className='site-contents testimonial'>
                  Van te voren stonden alle opties nog open. Een hoekbank, of toch een reguliere? En dan tegen de ene of de andere muur? En hoe zorgen we ervoor dat de koof niet teveel in de weg zit?
        </p>
        <p className='site-contents testimonial'>
                  Op basis van een kennismakings gesprek op locatie (zie <NavigateButton text="proces" class="navigate-inline" link="/process"/>) is Jack aan het werk gegaan om uiteindelijk met twee designs te komen, elk in verschillende houtstijlen.
        </p>
        <p className='site-contents testimonial'>
                  Ik was erg gecharmeerd van dit ontwerp met zijn luchtige, strakke lijnen want wat ik niet wilde was een lompe massieve stamtafel. De combinatie van kers en essen maakt het nog extra speels.
        </p>
        <p className='site-contents testimonial'>
                  Omdat het altijd lastig is om een tafel en bank volledig van papier te kopen vond ik het fijn dat ik op basis van een instelbaar demo model mijn specifieke voorkeuren aan kon geven. Hierdoor kwam de zitting uiteindelijk een klein stukje hoger te liggen dan in het originele ontwerp.
        </p>
        <p className='site-contents testimonial'>
                  Toen het moment eindelijk daar was en de tafel bij mij thuis werd afgeleverd was de gladheid van de afwerking inderdaad een van de eerste dingen die mij opviel. Maar het belangrijkst is natuurlijk hoe de set zit en ook daar kan ik alleen maar positief over zijn: precies op maat voor mij en voor de ruimte waar de set in staat.
        </p>
        <p className='site-contents testimonial'>
                  Dankjewel!
        </p>

        <p className='site-contents'>
        ~ George Holsheimer, Amsterdam
        </p>
      </div>

          <ImageMagnify image_small={image2} image={image2} alt="Jackk Meubels | eettafel en eetbank van massief essen en kersen foto onder een hoek" ratio="1.33" />
          <ImageMagnify image_small={image3} image={image3} alt="Jackk Meubels | eettafel en eetbank van massief essen en kersen schuin" ratio="1.33" />
          <ImageMagnify image_small={image4} image={image4} alt="Jackk Meubels | eetbank van massief essen en kersen foto schuin" ratio="0.66" />

      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align" id="contact-table-bench-page"/>
        </div>
      </div>
    </div>
  );
}

export default OrigamiTableBenchPage;
