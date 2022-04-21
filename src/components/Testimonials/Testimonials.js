import React from 'react'
// CSS
import classes from './Testimonials.module.css'

const testimonials = () => {
  return (
    <React.Fragment>
      <div className='site-section'>
        <h3 className='site-contents title'>Wat klanten vinden</h3>
        <div className={`${classes.row} site-contents` }>
          <div className={classes.testimonial}>“Wij zijn echt onder de indruk van je ontwerpen, ze zijn er mooier uitgekomen dan gedacht. Je hebt onze wensen goed verwerkt en echt over veel zaken nagedacht.”</div>
          <div className={classes.testimonialname}>~ J. & S.</div>
        </div>       
      </div>
    </React.Fragment>
  )
}

export default testimonials