import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="BIM Team" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="kdo_smo" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Kdo smo?</h2>
                </header>
                <p>
                Smo ekipa različno nadarjenih strokovnjakov, ki jih povezuje skupna strast za
                povečanje produktivnosti in učinkovitosti pri procesu gradnje inteligentnega
                virtualnega modela zgradbe. Skupaj delimo, se smejimo, trdo delamo in se
                vsak dan učimo od sveta in drug od drugega - združujeta nas radovednost in
                prizadevanje za deljenje znanja. To so vrednote, ki jih trdno negujemo in ki
                jih lahko pričakujete, ko boste sodelovali z ekipo BIM Team.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/kdo_smo" className="button">
                      Preberite več
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
            
          </section>

          <section id="projektno_vodenje" className="main special">
            <header className="major">
              <h2>Platforma PLANNERLY za BIM projektno vodenje</h2>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="iconNew icon-plan"></span>
                <strong>PLAN</strong> Plan
                <br />
                <Link to="/plan" className="button little">
                  Več
                </Link>
              </li>
              <li className="style2">
                <span className="iconNew icon-scope"></span>
                <strong>SCOPE</strong> Obseg del
                <br />
                <Link to="/scope" className="button little">
                  Več
                </Link>
                </li>
              <li className="style6">
                <span className="iconNew icon-contract"></span>
                <strong>CONTRACT</strong> Pogodbe
                <br />
                <Link to="/contract" className="button little">
                  Več
                </Link>
              </li>
              <li className="style3">
                <span className="iconNew icon-schedule"></span>
                <strong>SCHEDULE</strong> Terminsko planiranje
                <br />
                <Link to="/schedule" className="button little">
                  Več
                </Link>
              </li>
              <li className="style4">
                <span className="iconNew icon-track"></span>
                <strong>TRACK</strong> Sledenje
                <br />
                <Link to="/track" className="button little">
                  Več
                </Link>
              </li>
              <li className="style5">
                <span className="iconNew icon-validate"></span>
                <strong>VERIFY</strong> Preverjanje
                <br />
                <Link to="/verify" className="button little">
                  Več
                </Link>
              </li>
            </ul>
            <p className="content">
            Usklajevanje zahtev med projektiranjem in gradnjo je lahko velik izziv, zato v Plannerly-ju verjamemo v pameten in vitek pristop BIM: pravi BIM, ob pravem času, s pravimi ljudmi - iz pravih razlogov.
            PLANNERLY je platforma v oblaku za BIM projektno vodenje, namenjena arhitektom, inženirjem, izvajalcem in investitorjem za izboljšanje njihovega sodelovanja in komunikacije.
            PLANNERLY je skupna platforma za vse udeležence v projektu, na kateri lahko soustvarjajo, pregledujejo, komentirajo in potrjujejo načrt izvedbe BIM (angl. BEP - BIM Execution Plan);
            dodeljujejo, se dogovarjajo in določajo obseg del;
            spremljajo napredek in sledijo oddajam - vse to v eni namenski spletni aplikaciji.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="https://www.plannerly.com/?utm_source=yt5ep" target="_blank" class="button special" rel="noopener noreferrer">
                  Začnite brezplačno uporabljati PLANNERLY
                  </a>
                </li>
              </ul>
            </footer>
          </section>

          <section id="bim" className="main special">
            <header className="major">
              <h2>Kako začeti z BIM</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major fg far fa-paper-plane"></span>
                <h3>BIM za začetnike</h3>
                <p>
                  Če ste novi na področju BIM-a in
                  želite izvedeti več o tem, kaj to je
                  in kaj lahko pomeni za vas ste na
                  pravem mestu
                </p>
                <Link to="/za_zacetnike" className="button">
                  Več o tem
                </Link>
              </li>
              <li>
                <span className="icon major fg fas fa-home"></span>
                <h3>BIM za arhitekte</h3>
                <p>
                  Kako in kje začeti z oblikovanjem
                  inteligentnega virtualnega
                  modela zgradbe?
                </p>
                <Link to="/za_arhitekte" className="button">
                  Več o tem
                </Link>
              </li>
            </ul>
          </section>

          <section id="pomagamo" className="main special">
            <header className="major">
              <h2>Kako vam lahko pomagamo</h2>
              <p>
                Ali vam morda licenca za BIM program še vedno stoji v predalu? <br />
                Ali zaradi dela na tekočih projektih ni dovolj časa oz. znanja za preklop na BIM? <br />
                Ste opravili začetni tečaj in ne veste kako stečeno znanje uporabiti na pravem projektu? <br />
                <br />
                Tu smo za vas, saj odlično vemo, da nakup programa BIM še ne pomeni prehod na BIM in se zavedamo , da se ta sprememba ne zgodi čez noč. Naj vam naš tim izkušenih strokovnjakov olajša prehod na BIM in pomaga pri njegovi implementaciji v delovni proces arhitekturnega projektiranja. Naj bo prehod na BIM projektiranje premišljena odločitev v koordinaciji s strokovnjaki na tem področju.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/kontakt" className="button special">
                    Pogovor s svetovalcem
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
