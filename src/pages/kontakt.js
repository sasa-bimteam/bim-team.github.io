import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import pic01 from '../assets/images/16-0014107.jpg'

class Kontakt extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Kontakt" />
        <header id="header"></header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic01} alt="" /></span>
            <h2>Storitve</h2>
            <p>Vsebina, ki ponuja obiskovalnu možnosti za kontakt</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Kontakt
