import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section> 
      <h2><b>Kavica. Kadarkoli.</b></h2>
      <p>
        Kako naprej? Imate vprašanja? <br />
        Potrebujete več informacij? Želite na pijačo?
      </p>
      <ul className="actions">
        <li>
          <Link to="/kontakt" className="button">
            Kontaktirajte nas
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2><b>Kontakt</b></h2>
      <dl className="alt">
        <dt>Naslov</dt>
        <dd>Ljubljana, Slovenija, Europe, Earth :)</dd>
        <dt>Telefon</dt>
        <dd>+386 68 642 687</dd>
        <dt>Email</dt>
        <dd>
          <a href="mainto:studio@bim-team.co">studio@bim-team.co</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/sasajovanovic78/"
            className="icon fa-linkedin alt"
          >
            <span className="label">Linkedin</span>
          </a>
        </li>
        <li>
        <a href="https://codebushi.com" className="icon fa-youtube alt">
            <span className="label">Youtube</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/jovanovichsasha/" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      copyright&copy; 2021 by BIM Team, all rights reserved worldwide. Narejeno z ♥ v Sloveniji
    </p>
  </footer>
)

export default Footer
