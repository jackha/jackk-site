import React from 'react'
import linkedin from './images/linkedin-logo-512x512.png';
// CSS
import classes from './Footer.module.css'

const contact = () => {
  return (
    <React.Fragment>
      <hr/>
      <div class={`${classes.row} site-section site-contents`}>
        <div className={classes.footercolumn}>
          <h3 id='contact'>Contact</h3>
          <div className={classes.row}>
            <img className={classes.image} src={linkedin} alt='LinkedIn'></img>
            <a href='https://www.linkedin.com/in/jack-ha-0a96314/'>Jack Ha</a>
          </div>       
          <div className={classes.row}>
            <div className={classes.iconize}>@</div>
            <a href='mailto:info@jackk.xyz'>info@jackk.xyz</a>
          </div>       
          <div className={classes.row}>
            <div className={classes.iconize}>t</div>
            <div>+31 6 55164119</div>
          </div>       
          <div className={classes.row}>
            <div className={classes.iconize}>a</div>
            <div>Lanslaan 6 3526XH Utrecht</div>
          </div>
        </div>       
        <div className={classes.footercolumn}>
          <h3>Links</h3>
          <div className={classes.row}>
            <div className={classes.iconize}>E</div>
            <div><a href="/jacksthings">JacksThings</a></div>
          </div>
          <div className={classes.row}>
            <div className={classes.iconize}>E</div>
            <div><a href="/amplivibe">Amplivibe</a></div>
          </div>
        </div>       
      </div>       
    </React.Fragment>
  )
}

export default contact