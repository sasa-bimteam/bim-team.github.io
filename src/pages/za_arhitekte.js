import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import picPlan from '../assets/images/Plan-no-text.jpeg'

class ZaArhitekte extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Za Arhitekte" />
        <header id="header">
          <h1>Za Arhitekte</h1>
        </header>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={picPlan} alt="" /></span>
            <h2>Kako in kje začeti z oblikovanjem inteligentnega virtualnega modela zgradbe?</h2>
            <p>Povsod okoli nas tehnologija revolucionarno spreminja način življenja, dela, zabave in komuniciranja. To se dogaja tako hitro, da se težko spomnimo, kako je bilo pred internetom, pametnimi telefoni in brezžičnimi podatki. Hkrati se pojavljajo pomembne tehnologije, ki bodo okrepile našo vse bolj digitalno civilizacijo.</p>
            <p>Arhitektura je sredi največje preobrazbe od uvedbe računalnikov. S tem je povezano tudi uvajanje novih tehnologij. Napredek na področju digitalnih orodij za načrtovanje, medsebojne povezanosti in računalniško vodene izdelave se združujejo in spreminjajo vse faze procesa načrtovanja in gradnje. Informacijsko modeliranje gradenj (BIM) je dovolj preprosta zamisel: enoten digitalni model stavbe, na katerem lahko delajo vsi - arhitekt, naročnik, izvajalci, inženirji in upravljalci stavb.</p>
            <p>Tehnologija je bolj povezana s procesom kot z izdelkom. Toda tudi to bi lahko privedlo do drugačne vrste stavb. BIM je mlada tehnologija. Orodje še vedno oblikujemo, vendar moramo biti previdni: ker bo oblikovalo mesta, v katerih živimo.</p>

            <h2>ARCHICAD je BIM</h2>
            <p>Program ARCHICAD že več kot 30 let postavlja standarde za računalniško podprto arhitekturno načrtovanje.
            Program ne omejuje vaše ustvarjalnosti, pri tem pa omogoča največjo produktivnost pri izdelavi dokumentacije.
            Močno zavedanje potreb po trajnostni gradnji je vodilo do integracije orodja za oceno energijskih potreb zgradb
            že v idejni fazi. Nudi edinstvene možnosti simulacij vpliva arhitekturne zasnove na energetski in ogljični odtis in
            možnost uporabe raznovrstnih predstavitev za komunikacijo z investitorjem ali izvajalci na gradbišču. Vključena
            rešitev BIMcloud omogoča sodelovanje neomejenega števila udeležencev na poljubno velikem BIM projektu v
            realnem času in postavlja nove standarde v BIM procesu. Te in mnogo drugih funkcionalnosti programa ARCHICAD
            so prepoznali tudi večkrat nagrajeni uporabniki pri nas in v tujini, ki so ga že osmo leto zapored
            izbrali kot najboljši BIM program. Pokličite nas ali pošljite mail za brezplačno predstavitev in
            osebno preverite zakaj vam lahko prehod na BIM poveča produktivnost in konkurečnost.</p>

          </section>
        </div>
      </Layout>
    )
  }
}

export default ZaArhitekte
