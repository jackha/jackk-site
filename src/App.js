import './App.css';
import AboutMe from "./components/AboutMe/AboutMe";
import CustomFurniture from "./components/CustomFurniture/CustomFurniture";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";

import SmallLogo from "./assets/jackk-logo-klein.png";


function App() {
  return (
    <div className="App">
      <Navbar >
        <a href='#' className='nav-brand'>
          <img className='logo' src={SmallLogo} alt='Jackk meubels'/>
        </a>
        {/* more menu stuff, not needed for now */}
        {/* <ul className='flex-container'>
          <li className='flex-item'>
            <a href='#meubels-op-maat' className='nav-link'>Meubels op maat</a>  
          </li>
          <li className='flex-item'>
            <a href='#over-mij' className='nav-link'>Over mij</a>  
          </li>
        </ul> */}
      </Navbar>
      <Slider />
      <CustomFurniture />
      <AboutMe />
    </div>
  );
}

export default App;
