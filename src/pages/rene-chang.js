import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import image1 from "../components/Gallery/images/rene-chang/rene_chang_met_jack.jpg";
import image2 from "../components/Gallery/images/rene-chang/zet_up_logo.jpg";
import image3 from "../components/Gallery/images/rene-chang/zet_up_logo_collage.jfif";


function RenePage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>Logo voor Zet-Up</h1>

        <p className='site-contents'>
        Voor René Chang van Zet-Up kreeg ik de aanvraag voor een logo met ingelegd hout. Na ontvangst schreef hij een prachtig artikel over mij, wat een eer!
        </p>

        <ImageMagnify image_small={image3} image={image3} alt="Zet-Up logo collage" ratio="1.55"/>

        <p className='site-contents testimonial'>
        Met passie gemaakt…
        </p>

        <p className='site-contents testimonial'>
        Wat doe je als je trots bent op het bedrijfslogo én je een duurzaam stuk #vakmanschap met een verhaal erbij voor op kantoor zoekt?
        </p>

        <p className='site-contents testimonial'>
        Dan neem je contact op met Jack Ha en alles komt piekfijn voor mekaar!
        </p>


        <p className='site-contents testimonial'>
        Hoe mooi is het als je een appje ontvangt met de tekst:
        ‘hij zit in de olie! Nu een tijd laten drogen en dan kan hij jouw kant op!’
        Vandaag was het zover, ik heb een bezoek gebracht aan Jack om niet alleen het houten logo op te halen, maar vooral ook om te luisteren naar het verhaal achter zijn carrièreswitch.
        </p>

        <p className='site-contents testimonial'>
        Blijkt dat het helemaal niet zo’n plotse beslissing van Jack was om begin dit jaar te switchen van software ontwikkelaar naar meubelontwerper en maker. Hij was al jaren zeer creatief bezig met zijn #passie en #drijfveren ; mooie dingen maken voor mensen om op deze manier iets moois achter te laten.
        ‘ik kan nu fulltime mijn creativiteit kwijt in het bedenken en het maken van mooie dingen voor mensen!’
        </p>

        <p className='site-contents testimonial'>
        Het was zeer inspirerend om Jack te mogen ontmoeten op zijn werkplaats. Aan alles is daar te merken en te zien dat er gewerkt wordt met bevlogenheid en gedrevenheid.
        Ik heb nu alleen maar nog meer #bewondering en #respect voor al het moois wat Jack tot nu toe heeft gemaakt voor mensen en heeft gedeeld op LinkedIn.
        </p>

        <p className='site-contents testimonial'>
        Je zou het bijna vergeten na zo’n mooi verhaal over Jack, maar wat is het eindresultaat van het logo toch fantastisch geworden!
        Het lijkt misschien slechts een logo op een houten plankje, maar niets is minder waar; nogal wat vaktechnische vaardigheden blijken nodig te zijn geweest om tot dit eind resultaat te komen.
        Het is echt ongelooflijk hoe perfect het logo gekopieerd is in het hout, en hoe super strak de stukjes houten inleg zijn uitgefreesd, gelijmd en hoe precies de lijnen van het logo zijn ingelegd met houtmeel. Een bewerking waar ik tot op heden nog nooit van had gehoord.
        </p>

        <p className='site-contents testimonial'>
        Mooi om te zien wat passie wel niet kan doen met een mens, je leven plots volledig positief kan veranderen en wat voor prachtige dingen hieruit voort kunnen komen.
        </p>

        <p className='site-contents testimonial'>
        Het eindproduct is als een mooie samensmelting vanuit 2 passievolle ondernemers;
        Meubelontwerper Jack Ha en logo ontwerper Marco van Hoogdalem, Chapeau heren!
        </p>


        <p className='site-contents testimonial'>
        Heb jij ook een mooi en inspirerend carrièreswitch verhaal te vertellen, laat ons het gerust weten.
        Wij komen graag ook bij jou op bezoek, zijn reuze benieuwd naar jouw passie en waar jij jouw #werkgeluk opnieuw hebt gevonden! 
        </p>

        <p className='site-contents'>
        ~ René Chang, eigenaar Zet-Up, Haarlem
        </p>
      </div>

      <ImageMagnify image_small={image1} image={image1} alt="Foto met René en Jack van Jackk Meubels" ratio="1.0"/>
      <ImageMagnify image_small={image2} image={image2} alt="Zet-Up logo" ratio="1.4"/>

      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align" id="contact-rene-page"/>
        </div>
      </div>
    </div>
  );
}

export default RenePage;
