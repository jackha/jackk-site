import React from 'react'
import linkedin from './images/linkedin-logo-512x512.png';
// CSS
import classes from './Footer.module.css'

const contact = () => {
  return (
    <React.Fragment>
      <div class={classes.footer}>
        <div class={`${classes.row} site-section site-contents`}>
          <div className={`${classes.footercolumn} ${classes.wide}`}>
                      <h3 id='contact'>Jackk Meubels</h3>
            <div className={classes.row}>
              <img className={classes.image} src={linkedin} alt='LinkedIn'></img>
              <a href='https://www.linkedin.com/in/jack-ha-0a96314/' id="linkedin-footer">Jack Ha</a>
            </div>       
            <div className={classes.row}>
              <div className={classes.iconize}>@</div>
              <a href='mailto:info@jackk.xyz' id="email-footer">info@jackk.xyz</a>
            </div>       
            <div className={classes.row}>
              <div className={classes.iconize}>t</div>
              <div>+31 6 55164119</div>
            </div>       
            <div className={classes.row}>
              <div className={classes.iconize}>a</div>
              <div>Adriaan Menninckkwartier 57 3554CS Utrecht</div>
            </div>
            <div className={classes.row}>
              <div className={classes.iconize}>btw</div>
              <div>NL003256270B59</div>
            </div>
            <div className={classes.row}>
              <div className={classes.iconize}>kvk</div>
              <div>85262560</div>
            </div>
          </div>       
          <div className={classes.footercolumn}>
            <h3>Links</h3>
            <div className={classes.row}>
              <div className={classes.iconize}>E</div>
              <div><a href="/jacksthings">JacksThings</a></div>
            </div>
            <div className={classes.row}>
              <div className={classes.iconize}>A</div>
              <div><a href="/amplivibe">Amplivibe</a></div>
            </div>
          </div>       
              </div>       
        <div class={`site-section site-contents ${classes.row}`}>
          <div class={classes.copyrightrow}>
          &copy; 2022-2024 Jack Ha all rights reserved
                  </div>
              </div>   
              <div class={classes.seorow}>Ik ontwerp en maak unieke meubels naar jouw wensen.Gevestigd in Utrecht, maar werkzaam in heel Nederland. Transformeer uw ruimte met op maat gemaakte creaties van Jackk Meubels, de toonaangevende maker en ontwerper van op maat gemaakt meubilair. Ik ontwerp en vervaardig gepersonaliseerde stukken die zijn afgestemd op uw exacte stijl wensen, functie en specificaties, waarbij voortreffelijk vakmanschap wordt gecombineerd met ongeevenaarde aandacht voor detail. Breng uw interieur naar een hoger niveau met unieke, handgemaakte meubels die uw individuele stijl weerspiegelen. Neem vandaag nog contact met ons op om uw op maat gemaakte meubelreis te beginnen.</div>
              <div class={classes.seorow}>Jackk Meubels is een meubel ontwerper en maker gevestigd in Utrecht en Zeist. Met zijn unieke en handgemaakte meubelstukken weet hij keer op keer zijn klanten te verrassen en tevreden te stellen. Of je nu op zoek bent naar een prachtige eettafel, een comfortabele bank of een stijlvolle kast, bij Jackk Meubels ben je aan het juiste adres.

                  Met zijn jarenlange ervaring en oog voor detail weet Jackk Meubels elk meubelstuk tot in de perfectie te maken. Daarnaast denkt hij graag met zijn klanten mee en maakt hij ook meubels op maat, zodat het perfect aansluit bij jouw wensen en interieur.

                  Ben je op zoek naar unieke en hoogwaardige meubels van een getalenteerde meubel ontwerper en maker in Utrecht of Zeist? Neem dan zeker een kijkje bij Jackk Meubels en laat je verrassen door zijn vakmanschap en creativiteit. Neem vandaag nog contact op en maak een afspraak voor een persoonlijk ontwerp en advies.</div>

      </div>
    </React.Fragment>
  )
}

export default contact