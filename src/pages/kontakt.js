import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/stor1.jpg'

class Kontakt extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Kontakt" />
        <header id="header"></header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic01} alt="" /></span>
            <h2>BIM storitve</h2>
            <p>Prehod na pristop BIM predstavlja večji zalogaj, tako finančni, tehnični kot organizacijski. Za uspešno implementacijo potrebujete podporo vodstva in pripravljenost zaposlenih sprejemati spremembe. Pomembno je, da se pri uvajanju ne ustavimo, saj končne prednosti uporabe BIM tehnologije večkratno nadomestijo vložen čas in denar. Z veseljem vam pomagamo z naslednjimi storitvami:
            - BIM projektno vodenje z uporabo platforme PLANNERLY - izobraževanja in svetovanja
            - Implementacija pristopa BIM v delovni proces arhitekturnega projektiranja z uporabo Graphisoft Archicad® programske opreme
            - Izdelava, podjetju in zaposlenim, prilagojene Archicad predloge za povečanje produktivnosti in učinkovitosti
            - 2D v 3D ali BIM model - po želji pretvorimo vašo 2D dokumentacijo v inteligenten BIM model ali samo 3D model z uporabo Graphisoft Archicad® programske opreme</p>
            <h2>Naši certifikati 🙂</h2>
            <p>GRAPHISOFT BIM Manager
               buildingSmart International - Professional Certification - Foundation (pending)
               Plannerly - SmartLeanBIM® certificate (pending)</p>

            <Link to="/" className="button">
              Nazaj
            </Link>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Kontakt
