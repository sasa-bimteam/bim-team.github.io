import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>BIM Team</h1>
        <p>BIM | Architecture | Design<br />
        Narejeno z ♥ v Sloveniji</p>
        <p>POSTANITE DEL DIGITALNE PREOBRAZBE<br />
        IZKORISTITE CELOTNI POTENCIAL BIM PROCESA</p>
    </header>
)

export default Header
