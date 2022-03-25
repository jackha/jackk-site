import React from 'react'
import jack from './images/jack.jpg';
// CSS
import classes from './AboutMe.module.css'

const aboutMe = () => {
  return (
    <React.Fragment>
        <h3 id='over-mij' className='site-contents'>Over mij</h3>
        <div className={`${classes.row} site-contents` }>
          <img className={classes.image} src={jack}></img>
          <div className={classes.column}>
            <p>Vanaf 2022 ontwerp en bouw ik meubels voor klanten. Het is mijn passie om van niets tot een concept tot een product te komen. De combinatie van mijn hoofd en mijn handen gebruiken maakt het zo'n mooi vak.</p>
            <p>Ik ben een software ontwikkelaar met meer dan 15 jaar professionele ervaring. Daarnaast ontwerp en bouw ik al meer dan 20 jaar meubels. Graag combineer ik mijn kennis van 3d ontwerpen en de werkelijke uitvoering om tot mooie resultaten te komen.</p>
          </div>

        </div>
        
    </React.Fragment>
  )
}

export default aboutMe