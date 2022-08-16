import ContactButton from "../components/ContactButton/ContactButton"
import NavigateButton from "../components/NavigateButton/NavigateButton"  
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"

import image1 from "../components/Gallery/images/art-deco-walnut-bench/walnut-bench1.jpg";
import image2 from "../components/Gallery/images/art-deco-walnut-bench/walnut-bench2.jpg";
import image3 from "../components/Gallery/images/art-deco-walnut-bench/walnut-bench3.jpg";


function WalnutBenchPage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>Art Deco bankje</h1>
        <p className='site-contents'>Bankje van notenhout en inleg van essen</p>
        <p className='site-contents'>Materialen & afwerking: Notenhout (corpus), essen (inleg), afgewerkt in hardwax.</p>
      </div>
      <ImageMagnify image_small={image1} image={image1} alt="Art Deco bankje schuin"/>
      <ImageMagnify image_small={image2} image={image2} alt="Art Deco bankje recht"/>
      <ImageMagnify image_small={image3} image={image3} alt="Art Deco bankje hoekje" ratio="0.66"/>
      <div className='site-section'>
        <div className='site-contents'>
          <NavigateButton text="Terug" link="/#portfolio"/>
          <ContactButton text="Neem contact op" class="right-align" id="contact-walnut-bench-page"/>
        </div>
      </div>
    </div>
  );
}

export default WalnutBenchPage;
