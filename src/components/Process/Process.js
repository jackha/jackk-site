import React from 'react'
// CSS
import classes from './Process.module.css'

const process = () => {
  return (
    <React.Fragment>
      <div className={`${classes.process} site-section`}>
        <h3 className='site-contents title'>Hoe gaat het in zijn werk, een meubel op maat laten maken bij Jackk Meubels?</h3>
        <h4 className='site-contents'>Stap 1: Oriënterend gesprek</h4>
        <div className='site-contents'>
Het eerste contact kan bijvoorbeeld telefonisch, per e-mail of via een paar berichten op LinkedIn. We prikken een datum en ik kom bij je langs. Onder het genot van een bakje koffie wordt er over de wensen en ideeën gepraat. Dit is helemaal vrijblijvend en gratis. Als er een klik is dan plannen we de volgende sessie om ontwerpen te bespreken. Voor het ontwerpen vraag ik wel een kleine bijdrage in de vorm van een intentieverklaring, ik investeer immers veel tijd bij het ontwerpen.
        </div>
        <h4 className='site-contents'>Stap 2: Ontwerpen bespreken</h4>
        <div className='site-contents'>
De uitgewerkte ideeën met eventuele varianten of opties worden besproken. Ook is de kleur- en materiaalkeus nu helder. Er wordt een keus voor een variant gemaakt en de kosten zijn bekend. Alle ingredienten voor de opdracht zijn nu duidelijk. Het is ook mogelijk om in dit stadium de boel af te blazen als blijkt dat we totaal langs elkaar heen zijn gegaan (maar dit is nog nooit gebeurd).
        </div>
        <h4 className='site-contents'>Stap 3: Opdracht</h4>
        <div className='site-contents'>
De opdracht wordt geformuleerd en er wordt een grove planning gemaakt. Er komt een nieuw Jackk Meubel!
        </div>
        <div className='site-contents'>
De intentieverklaring af van de totaalprijs, waardoor je alleen betaalt voor het meubel en niet voor de ontwerpkosten.
        </div>
        <h4 className='site-contents'>Stap 4: Uitvoering</h4>
        <div className='site-contents'>
Als het startschot voor de bouw van het nieuwe meubel in zicht is controleer ik of alle kleur- en materiaalkeuzes gemaakt zijn. Materialen worden besteld en het werkelijke vervaardigen kan beginnen. Ik hou je tussentijds op de hoogte en we plannen een opleverdatum. 
        </div>
        <h4 className='site-contents'>Stap 5: Oplevering</h4>
        <div className='site-contents'>
Het nieuwe meubel wordt naar de locatie gebracht waarvoor hij gemaakt is en hij wordt ter plekke gemonteerd en afgesteld.
        </div>
      </div>
    </React.Fragment>
  )
}

export default process