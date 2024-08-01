import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import image1 from "../components/Gallery/images/coffee-corner/jackk-meubels-utrecht-zeist-design-coffee-corner-ash-cherry-with-rounding-total2.jpg";
import image2 from "../components/Gallery/images/coffee-corner/jackk-meubels-utrecht-zeist-jack-is-bezig.jpg";
import image3 from "../components/Gallery/images/coffee-corner/jackk-meubels-utrecht-zeist-koffie-hoek-lades.jpg";
import image4 from "../components/Gallery/images/coffee-corner/jackk-meubels-utrecht-zeist-kersen-grepen.jpg";
import image5 from "../components/Gallery/images/coffee-corner/jackk-meubels-utrecht-zeist-koffie-hoek-van-achteren.jpg";

function CoffeeCornerPage() {
    return (
        <div className="App avoid-logo">
            <div className='site-section'>
                <h1 className='site-contents'>De speciale koffie hoek</h1>


                <p className='site-contents testimonial'>
                    We zijn erg blij met het resultaat van de co-creatie. Ons Verzamelgebouw Reeuwijk staat voor: "Ondernemen in een gespreid bedje." De mede-ondernemers, snel en stabiel internet EN goede koffie zijn daarvan de drie belangrijkste pijlers. En daar past de "Omarming" (zo heet het meubel) heel erg mooi bij! (Waarbij de koffiemachines natuurlijk worden gevoed door onze eigen zonne-energie.)
                </p>
                <p className='site-contents'>
                    ~Johan de Haas, mede-eigenaar Verzamelgebouw Reeuwijk.
                </p>

            </div>
            <ImageMagnify image_small={image1} image={image1} alt="Jackk Meubels Utrecht Zeist totaal koffie hoek met essen spijlers en kersen blad" ratio="0.67" />
            <div>

                <p className='site-contents'>
                    Dit project was zeer uniek. Reeds bestaand meubilair moest aangepast worden om plaats te maken voor iets nieuws. De samenwerking tussen de klant en mij zorgt voor de oplossing op maat die de bruikbaarheid en uitstraling van het meubel optimaliseert.
                </p>
                <p className='site-contents'>
                    In het uiteindelijke ontwerp zijn we uitgekomen op spijlers die tot aan het plafond lopen, gemaakt van essenhout. Het blad is gemaakt van kersen, welke aansluit op huidig meubilair. Wat het meubel wellicht het meest bijzonder maakt is de kwart ronde achterkant. Deze zorgt ervoor dat het meubel wat lichter oogt en geen blok voor je zicht vormt, terwijl je wel een soort nisje vormt waar men lekker koffie kan halen.
                </p>            
                <ImageMagnify image_small={image2} image={image2} alt="Jackk Meubels Utrecht Zeist een zeldzame foto van Jack die bezig is" />
                <p className='site-contents'>
                In het hart ligt een massief kersenhouten aanrechtblad, dat natuurlijke schoonheid en duurzaamheid uitstraalt en een warme uitnodiging biedt om te genieten van momenten van rust. De zorgvuldig vervaardigde kersenhouten handgrepen voegen een vleugje verfijning en gemak toe aan de ervaring en passen naadloos bij de esthetiek van de hoek.
                    <p className='site-contents'>


                        <ImageMagnify image_small={image5} image={image5} alt="Jackk Meubels Utrecht Zeist zelfs van achteren ziet het er goed uit" />
                    </p>
                    De halfronde achterkant omarmt de ruimte en belichaamt zowel elegantie als functionaliteit. Het nisje wordt omarmd door de spijlers. Het gebogen ontwerp biedt ruimtelijkheid, vooral wanneer je erachter staat. 
                </p> 
                <ImageMagnify image_small={image3} image={image3} alt="Jackk Meubels Utrecht Zeist detail shot van lades met prachtige lade indeling" />
            <ImageMagnify image_small={image4} image={image4} alt="Jackk Meubels Utrecht Zeist detail shot van de kersenhouten grepen, welke het meubel helemaal afmaakt" />
                <p className='site-contents'>
                    Sommige aspecten van je meubel lijken niet heel groot, maar hebben een grote impact over de uitstraling van het geheel. De details van een meubelstuk maken hem af. Zoals hier afgebeeld heb ik massief kersen grepen gemaakt, helemaal in de stijl van de rest van de kast. Voor andere kasten heb je soms knoppen, ronde gaten, of ik kan op allerlei manieren een greep uit het deurtje frezen. En soms heb je gewoon helemaal geen grepen.
                </p>

            </div>
            <div className='site-section'>
                <div className='site-contents'>
                    <NavigateButton text="Terug" link="/#portfolio" />
                    <ContactButton text="Neem contact op" class="right-align" id="contact-coffee-corner-page" />
                </div>
            </div>
        </div>
    );
}

export default CoffeeCornerPage;
