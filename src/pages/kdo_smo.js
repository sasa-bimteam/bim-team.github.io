import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import peopleSasa from '../assets/images/people/sasa_jovanovic.png'
import peopleJovana from '../assets/images/people/Jovana.png'
import peopleZoran from '../assets/images/people/Zoran.png'
import peopleMedena from '../assets/images/people/Medena.png'
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
            <h2>Spoznajte našo čudovito ekipo</h2>
            <p> Smo ekipa različno nadarjenih strokovnjakov, bogatijo pa nas dolgoletne delovne izkušnje.
            </p>

            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Saša Jovanović</h2>
                  <h4>Direktorica | Arhitektka | Certificirana GRAPHISOFT BIM Vodja</h4>
                </header>
                <p>
                Saša je arhitektka in že več kot 11 let deluje na področju arhitekture,
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
                  <h2>Jovana Anđelić</h2>
                  <p>Arhitektka | Archicad in BIM specialistka</p>
                </header>
                <p>
                Jovana je arhitektka in že več kot 6 let deluje na področju arhitekture in 
                notranjega oblikovanja. Izvedba vseh njenih projektov je bistveno olajšana z 
                uporabo BIM procesov že v fazi projektiranja. Dnevno stremi k temu, 
                da vsa svoja znanja na področju uporabe BIM orodij implementira v proces projektiranja, 
                da bi končni naročnik imel ves čas realističen vpogled v grajen objekt. 
                Njena strast je ustvarjanje arhitekture, ki vedno poudarja funkcionalnost in harmonijo z lokalno arhitekturo in okoljem.
                </p>
              </div>
              <span className="image">
                <img src={peopleJovana} alt="" />
              </span>
            </div>
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Zoran Jovanović</h2>
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
                <img src={peopleZoran} alt="" />
              </span>
            </div>
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Princess Medena</h2>
                </header>
                <p>
                Bichon Frise | Specialistka za spanje in dobro voljo
                <br />
                <br />
                Naša prikupna specialistka bo s svojo prisotnostjo poskrbela, da je delovno okolje prijetnejše, 
                bolj sproščeno, nasmejano in posledično manj stresno.
                Pozitivno vpliva na produktivnost, delovno zadovoljstvo in z veseljem bo spala namesto vas.
                Kadar ne spi, vas z veseljem popelje na sprehod ali kavico.
                </p>
              </div>
              <span className="image">
                <img src={peopleMedena} alt="" />
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
