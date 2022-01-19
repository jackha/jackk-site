import './App.css';
import AboutMe from "./components/AboutMe/AboutMe";
import CustomFurniture from "./components/CustomFurniture/CustomFurniture";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";


function App() {
  return (
    <div className="App">
      <Navbar >
        <a href='#' className='NavBrand'>
          <img />
          Jackk
        </a>
        <ul className='FlexContainer'>
          <li>
            <a>Meubels op maat</a>  
          </li>
          <li>
            <a>Over mij</a>  
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
