import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import picSchedule from '../assets/images/Schedule-no-text.jpeg'

class Schedule extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <header id="header"></header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={picSchedule} alt="" /></span>
            <h2>SCHEDULE</h2>
            <strong>The BIM schedule that teams build together</strong>
            <p>Multi-team task sequencing and collaboration provided 53% fewer coordination issues (read the case study)</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Schedule
