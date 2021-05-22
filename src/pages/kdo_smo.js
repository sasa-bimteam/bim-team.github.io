import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import peopleSasa from '../assets/images/people/sasa_jovanovic.png'
import pic04 from '../assets/images/pic04.jpg'

class KdoSmo extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Kdo smo" />
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
                <h2><b>Saša Jovanović</b></h2>
                <p>
                Direktorica | Arhitektka | Certificirana GRAPHISOFT BIM Vodja
                </p>
                </header>
                <p>
                Saša kot arhitektka že več kot 11 let deluje na področju arhitekture,
                načrtovanja prostora in notranjega oblikovanja v Sloveniji in tujini. 
                Velja za inovativno, radovedno in dinamično osebo, ki je najbolj zadovoljna, 
                ko širi svoja obzorja. Rada odkriva nove ideje in si vedno prizadeva poiskati 
                najboljše rešitve, pri tem pa s profesionalnim odnosom presega pričakovanja 
                strank in skrbi da so zadovoljni. 
                Kot ustanoviteljica BIM Team-a in certificirana Graphisoft BIM Vodja aktivno 
                spodbuja in pomaga premostiti vrzel med uporabniki pristopa in orodij BIM in
                tistimi, ki teh koristi še niso spoznali, tako v Sloveniji kot tudi v tujini.
                </p>
              </div>
              <span className="image">
                <img src={peopleSasa} alt="" />
              </span>
            </div>
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

            <Link to="/" className="button">
              Nazaj
            </Link>

          </section>
        </div>
      </Layout>
    )
  }
}

export default KdoSmo
