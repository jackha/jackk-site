import React from 'react'
import jack from './images/jack.jpg';
// CSS
import classes from './AboutMe.module.css'

const aboutMe = () => {
  return (
    <div className={`${classes.aboutMe} site-section`}>
        <h3 id='over-mij' className={classes.row}>Over mij</h3>
        <div className={`${classes.row} ${classes.flex}`}>
          <img className={classes.image} src={jack} alt='Jackk Meubels'></img>
          <div className={classes.column}>
            <p>Het is mijn passie om van niets tot een concept tot een product te komen. Als ik over iets nadenk, kan het altijd nog mooier, nog beter, nog efficienter. Jarenlang heb ik in een klein appartement gewoond waar ik veel heb kunnen oefenen met deze concepten. Na ook vrienden en kennissen blij te hebben gemaakt met mijn creaties werd het dan ook tijd om de stap te maken om dit voor een nog breder publiek te ontsluiten. </p>
            <p>Er bestaan geen problemen, het zijn uitdagingen en ik ga ze graag aan. Concepten tekenen, al dan niet in 3D, kijken waar mogelijke verbeterpunten zitten en uitwerken. Materialen uitzoeken, voelen en uiteindelijk het produkt tot leven brengen. De combinatie van mijn hoofd en mijn handen gebruiken maakt het zo'n mooi vak. Af en toe kan ik zelfs mijn software skills inzetten, dat was immers jarenlang mijn vak.</p>
          </div>
        </div>
    </div>
  )
}

export default aboutMe