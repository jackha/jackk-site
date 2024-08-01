import React from 'react'
// CSS
import classes from './Testimonials.module.css'

const testimonials = () => {
  return (
    <React.Fragment>
      <div className='site-section'>
              <h3 className='site-contents title'>Wat klanten vinden</h3>
              <div className={`${classes.row} ${classes.block} site-contents `}>
                  <div className='testimonial'>“Ik was erg gecharmeerd van dit ontwerp met zijn luchtige, strakke lijnen want wat ik niet wilde was een lompe massieve stamtafel. De combinatie van kers en essen maakt het nog extra speels.”</div>
                  <div className='testimonialname'>~ George Holsheimer - Amsterdam</div>
              </div>      

        <div className={`${classes.row} ${classes.block} site-contents ` }>
          <div className='testimonial'>“Wij zijn echt onder de indruk van je ontwerpen, ze zijn er mooier uitgekomen dan gedacht. Je hebt onze wensen goed verwerkt en echt over veel zaken nagedacht.”</div>
          <div className='testimonialname'>~ Jackson & Shareen - Utrecht</div>
        </div>       
        <div className={`${classes.row} ${classes.block} site-contents` }>
          <div className='testimonial'>“Jack heeft mij verrast met 2 bijzondere ontwerpen. Het eerste was precies waar ik om vroeg. Het 2e was 'out of the box' gedacht, wat meer ruimte creëerde en helemaal bij mij past. Ik werd er echt heel blij van!”</div>
          <div className='testimonialname'>~ Lisette - Amersfoort</div>
        </div>
        <div className={`${classes.row} ${classes.block} site-contents` }>
          <div className='testimonial'>“Doordacht, stijlvol, robuust, modern en vooral persoonlijk.”</div>
          <div className='testimonialname'>~ Marian - Heerenveen</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default testimonials