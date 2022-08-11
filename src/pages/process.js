import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"
import Process from "../components/Process/Process";


function ProcessPage() {
  return (
    <div className="App avoid-logo">
      <Process />
      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#process"/>
          <ContactButton text="Neem contact op" class="right-align"/>
        </div>      
      </div>
    </div>
  );
}

export default ProcessPage;
