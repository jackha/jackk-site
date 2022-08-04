import './App.css';
//import { openContact } from './utils.js';

import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import CustomFurniture from "./components/CustomFurniture/CustomFurniture";
import Navbar from "./components/Navbar/Navbar";
import Process from "./components/Process/Process";
import Slider from "./components/Slider/Slider";
import Testimonials from "./components/Testimonials/Testimonials";

import SmallLogo from "./assets/jackk-meubels-logo.png";


function openContact()
{
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSeG-PjEcmeTcSoKv5fKlr_GgnKeUHTcYFiGtivc4Un-LUIA_g/viewform?usp=sf_link")
}

function App() {
  return (
    <div className="App">
      <Navbar >
        <a href='#' className='nav-brand'>
          <img className='logo' src={SmallLogo} alt='Jackk Meubels'/>
        </a>
        <ul className='flex-container top-menu'>
          {/*<li className='flex-item'>
            <a href='#meubels-op-maat' className='nav-link'>Meubels op maat</a>  
          </li>
          <li className='flex-item'>
            <a href='#over-mij' className='nav-link'>Over mij</a>  
          </li>*/}
          <li>
            <button className="call-to-action-button" button="success" onClick={() => openContact()}>
              Contact
            </button>
          </li>
        </ul>
      </Navbar>
      <div className='central-text'>Unieke meubels ontworpen en gemaakt naar jouw wensen</div>
      <Slider />
      <CustomFurniture />
      <Process />
      <Testimonials />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
