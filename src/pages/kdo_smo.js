import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import peopleSasa from '../assets/images/people/sasa_jovanovic.png'
import pic04 from '../assets/images/pic04.jpg'

class KdoSmo extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <header id="header"></header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            <p>Smo ekipa različno nadarjenih strokovnjakov, ki jih povezuje skupna strast za povečanje produktivnosti in učinkovitosti pri procesu
                gradnje inteligentnega virtualnega modela zgradbe. Skupaj delimo, se smejimo, trdo delamo in se vsak dan učimo od sveta in drug od
                drugega - združujeta nas radovednost in prizadevanje za deljenje znanja. To so vrednote, ki jih trdno negujemo in ki jih lahko pričakujete,
                ko boste sodelovali z ekipo BIM Team.
            </p>

            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Saša Jovanović</h2>
                </header>
                <p>
                Smo ekipa različno nadarjenih strokovnjakov, ki jih povezuje skupna strast za
                povečanje produktivnosti in učinkovitosti pri procesu gradnje inteligentnega
                virtualnega modela zgradbe. Skupaj delimo, se smejimo, trdo delamo in se
                vsak dan učimo od sveta in drug od drugega - združujeta nas radovednost in
                prizadevanje za deljenje znanja. To so vrednote, ki jih trdno negujemo in ki
                jih lahko pričakujete, ko boste sodelovali z ekipo BIM Team.
                </p>
              </div>
              <span className="image">
                <img src={peopleSasa} alt="" />
              </span>
            </div>

          </section>
        </div>
      </Layout>
    )
  }
}

export default KdoSmo
