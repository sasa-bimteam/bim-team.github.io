import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import picTrack from '../assets/images/Track-no-text.jpeg'

class Track extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="BIM - track" />
        <header id="header"></header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={picTrack} alt="" /></span>
            

            <a href="https://www.plannerly.com/track/?utm_source=yt5ep" target="_blank" class="button special" rel="noopener noreferrer">
              Začni zdaj
            </a>

            <span>&nbsp;</span>

            <Link to="/" className="button">
              Nazaj
            </Link>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Track

            ///<h2>TRACK</h2>
            ///<strong>Stop starting;<br />Start finishing</strong>
            ///<p>The Lean approach to project management that allows you to focus on continuous BIM delivery.</p>
