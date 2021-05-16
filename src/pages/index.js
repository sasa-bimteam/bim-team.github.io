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
        <Helmet title="Gatsby Starter - Stellar" />

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
              <h2>Pravi BIM, ob pravem času, s pravimi ljudmi<br />iz pravih razlogov</h2>
              <p>
              Usklajevanje zahtev med projektiranjem in gradnjo je lahko velik izziv.<br />
              Plannerly je platforma v oblaku, za BIM projektno vodenje, namenjena arhitektom, inženirjem, izvajalcem in naročnikom za izboljšanje
              sodelovanja in komunikacije. <br />
              Plannerly je skupna platforma za vse udeležence v projektu, na kateri lahko soustvarjajo, pregledujejo,
              komentirajo in potrjujejo načrt izvedbe BIM (BEP); določajo, se dogovarjajo in dodeljujejo obseg dela; spremljajo napredek in sledijo
              oddajam - vse to v eni namenski spletni aplikaciji.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>PLAN</strong> Online BIM Execution Planning
                <br />
                <Link to="/generic" className="button little">
                  Več
                </Link>
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>SCOPE</strong> Visual scopes everyone can understand
                <br />
                <Link to="/generic" className="button little">
                  Več
                </Link>
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>SCHEDULE</strong> Schedules that teams manage together
                <br />
                <Link to="/generic" className="button little">
                  Več
                </Link>
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>TRACK</strong> Collaborative Task Management
                <br />
                <Link to="/generic" className="button little">
                  Več
                </Link>
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>VIEW</strong> Integrated model review and control
                <br />
                <Link to="/generic" className="button little">
                  Več
                </Link>
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
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
                <span className="icon major style1 fa-code"></span>
                <h3>BIM za začetnike</h3>
                <p>
                  Če ste novi na področju BIM-a in
                  želite izvedeti več o tem, kaj to je
                  in kaj lahko pomeni za vas ste na
                  pravem mestu
                </p>
                <Link to="/generic" className="button">
                  Več o tem
                </Link>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>BIM za arhitekte</h3>
                <p>
                  Kako in kje začeti z oblikovanjem
                  inteligentnega virtualnega
                  modela zgradbe?
                </p>
                <Link to="/generic" className="button">
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
                  <Link to="/generic" className="button special">
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
