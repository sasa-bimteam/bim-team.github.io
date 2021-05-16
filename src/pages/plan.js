import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import picPlan from '../assets/images/Plan-no-text-400x284.jpeg'

class Plan extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Plan" />
        <header id="header"></header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={picPlan} alt="" /></span>
            <h2>PLAN</h2>
            <strong>Simple BIM Execution Planning</strong>
            <p>Drag and drop from hundreds of free BEP templates to quickly create and agree on your BIM standards, processes and contracts.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Plan
