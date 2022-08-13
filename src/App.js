import './App.css';
import AboutMe from "./components/AboutMe/AboutMe";
import CustomFurniture from "./components/CustomFurniture/CustomFurniture";
import GalleryOverview from "./components/Gallery/GalleryOverview"
import ProcessSimple from "./components/Process/ProcessSimple";
import Slider from "./components/Slider/Slider";
import Testimonials from "./components/Testimonials/Testimonials";


function App() {
  return (
    <div className="App">
      <div className='central-text'>Unieke meubels ontworpen en gemaakt naar jouw wensen</div>
      <Slider />
      <CustomFurniture />
      <GalleryOverview />
      <ProcessSimple />
      <Testimonials />
      <AboutMe />
    </div>
  );
}

export default App;
