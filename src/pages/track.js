import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic04 from '../assets/images/pic04.jpg'

class Track extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <header id="header">
            <h1>Kdo smo</h1>
            <p>dodaj neki tekst za to</p>
        </header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            <h2>Nekaj o nas</h2>
            <p>Smo ekipa različno nadarjenih strokovnjakov, ki jih povezuje skupna strast za povečanje produktivnosti in učinkovitosti pri procesu
                gradnje inteligentnega virtualnega modela zgradbe. Skupaj delimo, se smejimo, trdo delamo in se vsak dan učimo od sveta in drug od
                drugega - združujeta nas radovednost in prizadevanje za deljenje znanja. To so vrednote, ki jih trdno negujemo in ki jih lahko pričakujete,
                ko boste sodelovali z ekipo BIM Team.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Track
