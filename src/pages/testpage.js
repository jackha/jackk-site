import Contact from "../components/Contact/Contact";
import Navbar from "../components/Navbar/Navbar";

import SmallLogo from "../assets/jackk-meubels-logo.png";


function openContact()
{
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSeG-PjEcmeTcSoKv5fKlr_GgnKeUHTcYFiGtivc4Un-LUIA_g/viewform?usp=sf_link")
}

function TestPage() {
  return (
    <div className="App">
      <Contact />
    </div>
  );
}

export default TestPage;
