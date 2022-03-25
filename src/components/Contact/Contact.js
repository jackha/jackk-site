import React from 'react'
import linkedin from './images/linkedin-logo-512x512.png';
// CSS
import classes from './Contact.module.css'

const contact = () => {
  return (
    <React.Fragment>
      <h3 id='contact' className='site-contents'>Contact</h3>
      <div className={`${classes.row} site-contents` }>
        <img className={classes.image} src={linkedin}></img>
        <a href='https://www.linkedin.com/in/jack-ha-0a96314/'>Jack Ha</a>
      </div>       
    </React.Fragment>
  )
}

export default contact