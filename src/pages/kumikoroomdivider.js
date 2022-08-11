import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import image1 from "../components/Gallery/images/acoustic-room-divider/room-divider1.jpg";
import image2 from "../components/Gallery/images/acoustic-room-divider/room-divider2.jpg";


function KumikoRoomDividerPage() {
  return (
    <div className="App">
      <div className='site-section'>
        <h1 id='jackk-meubels' className='site-contents'>Kumiko akoestisch kamerscherm</h1>
        <p className='site-contents'>Dit luxe afgewerkt kamerscherm is een plezier voor het oog. Ook levert hij meer werkplezier op. Eventuele afleidingen worden niet alleen door het zicht beperkt, maar hij absorbeert ook geluid waardoor de akoestiek verbetert. Storende omgevingsgeluiden worden verminderd en je bent beter verstaanbaar als je aan het videobellen bent.</p>
        <p className='site-contents'>Materialen & afwerking: Notenhout (frame), berken multiplex (voor-achterkant), messing kamerschermscharnieren, akoestisch absorberend materiaal in het midden, afgewerkt in olie.</p>
      </div>
      <ImageMagnify image_small={image1} image={image1} alt="Kumiko akoestisch kamerscherm" ratio="0.77"/>
      <ImageMagnify image_small={image2} image={image2} alt="Kumiko akoestisch kamerscherm detail"/>
      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align"/>
        </div>
      </div>
    </div>
  );
}

export default KumikoRoomDividerPage;
