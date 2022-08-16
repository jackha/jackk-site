import React from 'react'
import ContactButton from '../ContactButton/ContactButton'
import NavigateButton from '../NavigateButton/NavigateButton'

const customFurniture = () => {
  return (
    <React.Fragment>
      <div className='site-section'>
        <h1 id='jackk-meubels' className='site-contents'>Jackk Meubels</h1>
        <h3 id='meubels-op-maat' className='site-contents'>Ik ontwerp en maak unieke meubels naar jouw wensen</h3>
        <p className='site-contents'>Iedereen wil zijn huis inrichten naar zijn eigen wensen, maar de meeste meubels zijn kant en klare ontwerpen die je overal tegenkomt. Mijn klanten kiezen voor unieke meubels waarin al zijn persoonlijke wensen zijn verwerkt, duurzaam en van hoge kwaliteit met een bijzonder design.</p>
        <p className='site-contents'>Wil je dat je meubel een levenlang mee gaat of wil je graag meer opbergruimte realiseren, maar past een 'standaard' kast niet handig op die plek? Wil je een design dat exact aansluit op jouw smaak? Dit zijn enkele voorbeelden waarom je op zoek kan zijn naar een maatwerk meubel.</p>
        <p className='site-contents'>Heb je een vraag of een idee voor een maatwerk meubel, schroom dan niet om <ContactButton text="contact" class="navigate-inline" id="contact-custom-furniture"/> met mij op te nemen! Wil je meer lezen over meubels op maat? Dat kan <NavigateButton text="hier" class="navigate-inline" link="/custom-furniture"/>.</p>
      </div>
    </React.Fragment>
  )
}

export default customFurniture