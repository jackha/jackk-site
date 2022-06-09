import React from 'react'
import linkedin from './images/linkedin-logo-512x512.png';
// CSS
import classes from './Contact.module.css'

const contact = () => {
  return (
    <React.Fragment>
      <div class='site-section'>
        <h3 id='contact' className='site-contents'>Contact</h3>
        <div className={`${classes.row} site-contents` }>
          <img className={classes.image} src={linkedin}></img>
          <a href='https://www.linkedin.com/in/jack-ha-0a96314/'>Jack Ha</a>
        </div>       
        <div className={`${classes.row} site-contents` }>
          <div className={classes.iconize}>@</div>
          <a href='mailto:info@jackk.xyz'>info@jackk.xyz</a>
        </div>       
        <div className={`${classes.row} site-contents` }>
          <div className={classes.iconize}>t</div>
          <div>+31 6 55164119</div>
        </div>       
        <div className={`${classes.row} site-contents` }>
          <div className={classes.iconize}>a</div>
          <div>Lanslaan 6 3526XH Utrecht</div>
        </div>
      </div>       
    </React.Fragment>
  )
}

export default contact