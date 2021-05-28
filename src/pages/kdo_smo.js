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
                  <h3><strong>Saša Jovanović</strong></h3>
                  <h4>Direktorica | Arhitektka | Certified GRAPHISOFT BIM Manager</h4>
                </header>
                <p>
                Saša je arhitektka in že več kot 11 let deluje na področju arhitekture, 
                načrtovanja prostora in notranjega oblikovanja v Sloveniji in tujini. 
                Velja za inovativno, radovedno in dinamično osebo, ki je najbolj zadovoljna, 
                ko širi svoja obzorja. Rada odkriva nove ideje in si vedno prizadeva poiskati najboljše rešitve,
                 pri tem pa s profesionalnim odnosom presega pričakovanja strank in skrbi da so zadovoljni.
                  Kot ustanoviteljica BIM Team-a in certificirani Graphisoft BIM Manager
                   aktivno spodbuja in pomaga premostiti vrzel med uporabniki pristopa in orodij BIM in tistimi, 
                   ki teh koristi še niso spoznali, tako v Sloveniji kot tudi v tujini.
                </p>
              </div>
              <span className="image">
                <img src={peopleSasa} alt="" />
              </span>
            </div>
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h3><b>Jovana Anđelić</b></h3>
                  <h4>Arhitektka | Archicad in BIM Expert</h4>
                </header>
                <p>
                Jovana je arhitektka in že več kot 6 let deluje na področju arhitekture in notranjega oblikovanja.
                 Izvedba vseh njenih projektov je bistveno olajšana z uporabo procesov BIM že v fazi projektiranja.
                  Dnevno stremi k temu, da vsa svoja znanja na področju uporabe BIM orodij implementira v proces projektiranja, 
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
                  <h3><b>Zoran Jovanović</b></h3>
                  <h4>so-ustanovitelj | Grafični oblikovalec  | CorelDraw Expert</h4>
                </header>
                <p>
                Njegovo kreativno delovanje je usmerjeno k jasnemu in inovativnemu razmišljanju. 
                Združuje enostavno s premišljenim, ob nenehni skrbi za ustreznost končne rešitve. 
                Išče nove izzive, ter si v neverbalni komunikaciji skozi svoje stvaritve prizadeva, 
                da bi bilo širše občinstvo dovzetno za njihovo sporočilnost.
                </p>
              </div>
              <span className="image">
                <img src={peopleZoran} alt="" />
              </span>
            </div>
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h3><b>Princess Medena</b></h3>
                </header>
                
                <h3>Bichon Frise | Specialistka za spanje in dobro voljo</h3>
                <p>
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
