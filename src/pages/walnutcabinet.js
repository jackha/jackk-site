import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"


function WalnutCabinetPage() {
  return (
    <div className="App">
      <div className='site-section'>
        <h1 id='jackk-meubels' className='site-contents'>Art Deco kast</h1>
        <p className='site-contents'>Je komt het huis binnen. Recht voor je is een deur die naar een kamer gaat. Links van de deur is een hoekje en rechts is een wand van 2 meter lang, waar ook een radiator hangt. "Dat is de plek waar ik mijn spullen op wil bergen."</p>
        <p className='site-contents'>"Ik wil mijn schoenen kwijt kunnen en mijn jassen, mijn handschoenen, en de voordeur moet helemaal open kunnen." Mooi, de klant heeft een duidelijk beeld wat hij wil. Specifiek Art Deco wordt een aantal keer genoemd, waarna ik een paar staaltjes laat zien van massief hout. Heel snel wordt al bekend dat is het meubel iets van notenhout zal krijgen. Als contrast suggereer ik essen en de klant gaat akkoord.</p>
      </div>
      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align"/>
        </div>
      </div>
    </div>
  );
}

export default WalnutCabinetPage;
