import './App.css';
import AboutMe from "./components/AboutMe/AboutMe";
import CustomFurniture from "./components/CustomFurniture/CustomFurniture";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";


function App() {
  return (
    <div className="App">
      <Navbar >
        <a href='#' className='nav-brand'>
          <img />
          Jackk
        </a>
        <ul className='flex-container'>
          <li>
            <a href='#meubels-op-maat' className='nav-link'>Meubels op maat</a>  
          </li>
          <li>
            <a href='#over-mij' className='nav-link'>Over mij</a>  
          </li>
        </ul>
      </Navbar>
      <Slider />
      <CustomFurniture />
      <AboutMe />
    </div>
  );
}

export default App;
