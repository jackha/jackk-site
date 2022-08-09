import './App.css';
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import CustomFurniture from "./components/CustomFurniture/CustomFurniture";
import ProcessSimple from "./components/Process/ProcessSimple";
import Slider from "./components/Slider/Slider";
import Testimonials from "./components/Testimonials/Testimonials";


function App() {
  return (
    <div className="App">
      <div className='central-text'>Unieke meubels ontworpen en gemaakt naar jouw wensen</div>
      <Slider />
      <CustomFurniture />
      <ProcessSimple />
      <Testimonials />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
