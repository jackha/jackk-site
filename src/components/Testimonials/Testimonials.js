import React from 'react'
// CSS
import classes from './Testimonials.module.css'

const testimonials = () => {
  return (
    <React.Fragment>
      <div className='site-section'>
        <h3 className='site-contents title'>Wat klanten vinden</h3>
        <div className={`${classes.row} ${classes.block} site-contents ` }>
          <div className={classes.testimonial}>“Wij zijn echt onder de indruk van je ontwerpen, ze zijn er mooier uitgekomen dan gedacht. Je hebt onze wensen goed verwerkt en echt over veel zaken nagedacht.”</div>
          <div className={classes.testimonialname}>~ J. & S.</div>
        </div>       
        <div className={`${classes.row} ${classes.block} site-contents` }>
          <div className={classes.testimonial}>“Jack heeft mij verrast met 2 bijzondere ontwerpen. Het eerste was precies waar ik om vroeg. Het 2e was 'out of the box' gedacht, wat meer ruimte creëerde en helemaal bij mij past. Ik werd er echt heel blij van!”</div>
          <div className={classes.testimonialname}>~ L.</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default testimonials