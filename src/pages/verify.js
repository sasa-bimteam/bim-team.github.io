import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import picVerify from '../assets/images/Verify-no-text.jpeg'

class Verify extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <header id="header"></header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={picVerify} alt="" /></span>
            <h2>VERIFY</h2>
            <strong>Simplified BIM Compliance</strong>
            <p>Connecting models and requirements to achieve better BIM management</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Verify
