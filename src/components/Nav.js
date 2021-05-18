import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['kdo_smo', 'projektno_vodenje', 'bim', 'pomagamo'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="kdo_smo">
                    <a href="#"><b>Spoznajte nas</b></a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="projektno_vodenje">
                    <a href="#"><b>BIM projektno vodenje</b></a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="bim">
                    <a href="#"><b>BIM</b></a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="pomagamo">
                    <a href="#"><b>Kako vam lahko pomagamo</b></a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
