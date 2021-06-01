import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/stor1.jpg'
import zaupaju from '../assets/images/zaupajonam.jpg'
import cerBIM from '../assets/images/cer01.svg'

class Kontakt extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Kontakt" />
        <header id="header"></header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic01} alt="" /></span>
            <h2><b>BIM storitve</b></h2>
            <p>Prehod na pristop BIM predstavlja večji zalogaj, tako finančni, tehnični kot organizacijski. 
            <br />
            Za uspešno implementacijo potrebujete podporo vodstva in pripravljenost zaposlenih sprejemati spremembe. Pomembno je, da se pri uvajanju ne ustavimo, saj končne prednosti uporabe BIM tehnologije večkratno nadomestijo vložen čas in denar.
            <br />
            <br />
            Z veseljem vam pomagamo z naslednjimi storitvami:
            <br />
            <br />
            <z>
            - Management BIM z uporabo platforme PLANNERLY - izobraževanja in svetovanja</z>
            <br />
            <z>- Implementacija pristopa BIM v delovni proces arhitekturnega projektiranja z uporabo Graphisoft Archicad® programske opreme</z>
            <br />
            <z>- Izdelava, podjetju in zaposlenim, prilagojene Archicad predloge za povečanje produktivnosti in učinkovitosti</z>
            <br />
            <z>- 2D v 3D ali BIM model - po želji pretvorimo vašo 2D dokumentacijo v inteligenten BIM model ali samo 3D model z uporabo Graphisoft Archicad® programske opreme</z></p>
            <h2><b>Naši certifikati</b> 🙂</h2>
            <p><z>GRAPHISOFT BIM Manager</z> 
            <br />
            <z>buildingSmart International - Professional Certification - Foundation (pending)</z>
             <br />
             <z>Plannerly - SmartLeanBIM® certificate</z></p>
             <b> <span className="cer01"><img src={cerBIM} alt="" /></span> </b>
           
            <div>
            <b />
              <Link to="/" className="button">
                Nazaj
              </Link>
             </div>
            
            <br />

            <h2><b>Zaupajo nam:</b></h2>
           
            <span className="image main"><img src={zaupaju} alt="" /></span>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Kontakt
