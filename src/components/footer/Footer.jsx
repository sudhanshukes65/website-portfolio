import React from 'react'
import './footer.css'
import {ImFacebook2} from 'react-icons/im'
import {GrInstagram} from 'react-icons/gr'
import {GrTwitter} from 'react-icons/gr'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience ">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><ImFacebook2/></a>
        <a href="https://instagram.com"><GrInstagram/></a>
        <a href="https://twitter.com"><GrTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved</small>
      </div>



    </footer>
  )
}

export default footer