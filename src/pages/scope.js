import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import picScope from '../assets/images/Scope-no-text.jpeg'

class Scope extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <header id="header"></header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={picScope} alt="" /></span>
            <h2>SCOPE</h2>
            <strong>Visual BIM scopes that everyone can understand</strong>
            <p>A collaborative framework to define ISO 19650 requirements for Geometry, Documentation and Information (Level of Information Need BS EN 17412-1).</p>
            <a href="https://www.plannerly.com/scope/?utm_source=yt5ep" target="_blank" class="button special" rel="noopener noreferrer">
              Začni zdaj
            </a>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Scope
