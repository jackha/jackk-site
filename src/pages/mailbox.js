import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import image1 from "../components/Gallery/images/mailbox/mailbox-final.jfif";


function MailboxPage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>Peace of mind</h1>

        <p className='site-contents testimonial'>
        Mijn huis is een plek om thuis te komen. Met ruimte, licht en buiten groen.
        </p>

        <p className='site-contents testimonial'>
        In de voortuin stond een unieke brievenbus. Groot. Met een grijs dak, en een sleutel in de deur. Gemaakt van hout.
        </p>

        <p className='site-contents testimonial'>
        En ik was eraan gehecht. Want mijn vader maakte hem voor mij. Zonder dat ik het hem vroeg. Want zo gaan die dingen, bij mijn vader in ieder geval wel. Hij creëerde. Ook als hij te druk was. In zijn goede jaren, toen hij alles nog kon.
        </p>

        <p className='site-contents testimonial'>
        De brievenbus werd jaarlijks ‘minder’. Het hout verweerde. De scharnieren gingen roesten. Tot het moment waarop de klep ging loslaten. En het deurtje open bleef staan, onherstelbaar beschadigd.
        </p>

        <p className='site-contents testimonial'>
        Toen diende de oplossing zich aan. Jack, iemand die ik via LinkedIn ooit aan mijn netwerk toevoegde. Hij maakte voor mij al eens een slimme kantooroplossing. Misschien zou deze designer kunnen begrijpen wat ik wil, waarom iets belangrijk voor me is.
        </p>

        <p className='site-contents testimonial'>
        Een paar mailberichten en een online meeting verder werd het proces van creatie in gang gezet. Jack ‘las’ mijn stijl en vertaalde die. Met respect voor mijn vader. En met inzet van zijn eigen unieke talenten.
        </p>

        <p className='site-contents testimonial'>
        Doordacht, stijlvol, robuust, modern en vooral persoonlijk.
        </p>

        <p className='site-contents testimonial'>
        Inmiddels staat hij, de nieuwe brievenbus. Het is goed, het is helemaal goed. Een mooie persoonlijke brievenbus. Ondanks de afnemende poststroom ben ik blij met mijn ‘investering’. Peace of mind.
        </p>

        <p className='site-contents'>
        ~ Marian - Heerenveen
        </p>
      </div>
      <ImageMagnify image_small={image1} image={image1} alt="Brievenbus op zijn plaats" ratio="1.0"/>
      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align" id="contact-mailbox-page"/>
        </div>
      </div>
    </div>
  );
}

export default MailboxPage;
