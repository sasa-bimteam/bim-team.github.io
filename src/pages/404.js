import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import picContract from '../assets/images/BIM-Contract-Documents-Complete.jpeg'

class Plan extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Contract" />
        <header id="header"></header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={picContract} alt="" /></span>
            <h2>CONTRACT</h2>
            <strong>Simple BIM Execution Planning</strong>
            <p>Drag and drop from hundreds of free BEP templates to quickly create and agree on your BIM standards, processes and contracts.</p>

            <a href="https://www.plannerly.com/contract/?utm_source=yt5ep" target="_blank" class="button special" rel="noopener noreferrer">
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

export default Plan
