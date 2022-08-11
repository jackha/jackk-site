import React from 'react'
import { Outlet, Link } from "react-router-dom";
import aankoopproces from './images/aankoopproces.svg';
import NavigateButton from "../NavigateButton/NavigateButton"

// CSS
import classes from './Process.module.css'

const ProcessSimple = () => {
  return (
    <React.Fragment>
      <div className={`${classes.process} site-section`} id="process">
        <h3 className='site-contents title'>Hoe gaat het in zijn werk, een meubel ontwerpen en laten maken bij Jackk Meubels?</h3>
        <div className='site-contents'>
Bij Jackk Meubels weet je altijd precies waar je aan toe bent omdat we alle stappen vooraf duidelijk vastleggen zodat je nooit voor vervelende verrassingen komt te staan.
        </div>
        <img src={aankoopproces}></img>
        <div className='site-contents'>
        Lees <NavigateButton class="navigate-inline" text="hier" link="/process"/> meer over het aankoopproces.
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProcessSimple