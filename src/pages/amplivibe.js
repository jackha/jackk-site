import NavigateButton from "../components/NavigateButton/NavigateButton" 
import ImageMagnify from "../components/ImageMagnify/ImageMagnify"
import jack from '../components/AboutMe/images/jack.jpg';


function AmplivibePage() {
  return (
    <div className="App avoid-logo">
      <div className='site-section'>
        <h1 className='site-contents'>Amplivibe</h1>
        <p className='site-contents'>Hi and welcome to this small and humble online home of Amplivibe! I'm represented by Jack Ha and I mainly play electric guitar. Sometimes I'll pick up some awesome synth and freak out on it as well.</p>
        <p className='site-contents'>Listen to <NavigateButton text="AstroGoats on Spotify" link="https://open.spotify.com/artist/0XxdVmdlZGaGV8llo3U3im"/></p>
        <p className='site-contents'>Listen to <NavigateButton text="Under My Boots on Spotify" link="https://open.spotify.com/artist/4vYUIYCc4ok9cP5ZH55edy"/></p>
        <p className='site-contents'>Listen to <NavigateButton text="Amplivibe on Spotify" link="https://open.spotify.com/artist/5qMdJhtObglJ3V8cXbYuW8"/></p>
        <p className='site-contents'>Listen to <NavigateButton link="https://www.youtube.com/watch?v=ojFHgYJLkOo" text="The Ice Queen on YouTube"/></p>
      </div>
      <ImageMagnify image_small={jack} image={jack} alt="Photo of Jack Ha" ratio="0.79"/>
    </div>
  );
}

export default AmplivibePage;
