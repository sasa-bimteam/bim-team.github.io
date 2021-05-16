import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import picPlan from '../assets/images/Plan-no-text.jpeg'

class ZaZacetnike extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Za Začetnike" />
        <header id="header">
          <h1>Za Začetnike</h1>
        </header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={picPlan} alt="" /></span>
            <h2>BIM ni programska oprema, je proces</h2>
            <p>BIM ni programska oprema, je proces. Proces, ki ga veliko udeležencev
            (projektant, izvajalec in investitor) ne razume oz. se jim zdi nepotreben. BIM
            ni prerisovanje 2D-načrtov, ni 3D-model zgradbe, ni trend, ni programska
            oprema, ampak je gradnja inteligentnega virtualnega modela zgradbe, kjer
            vsak element nosi vse potrebne podatke, da ga lahko lociramo, definiramo,
            popišemo, zgradimo/kupimo in vzdržujemo.
            V splošnem prehod na BIM zahteva čas, energijo za učenje nove programske
            opreme in spremembo samega pristopa k projektiranju. Implementacija
            programske opreme, ki je narejena brez strategije in jasne usmeritve ne uspe
            izkoristiti potenciala, ki ga ta tehnologija ponuja.

            BIM je kratica za ‘building information modelling’ ali informacijsko modeliranje gradenj.</p>

          </section>
        </div>
      </Layout>
    )
  }
}

export default ZaZacetnike
