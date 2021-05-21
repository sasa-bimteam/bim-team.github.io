import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <p>BIM | Arhitektura | Dizajn</p>
        <p>Narejeno z ♥ v Sloveniji</p>
        <p>POSTANITE DEL DIGITALNE PREOBRAZBE</p>
        <p>IZKORISTITE CELOTNI POTENCIAL</p>
        <p>BIM PROCESA</p>
    </header>
)

export default Header
