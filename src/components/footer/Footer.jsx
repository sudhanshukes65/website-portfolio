import React from 'react'
import './footer.css'
import {ImFacebook2} from 'react-icons/im'
import {GrInstagram} from 'react-icons/gr'
import {GrTwitter} from 'react-icons/gr'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SUDHANSHU KESARWANI</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience ">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/sudhanshu.kesarwani.16"><ImFacebook2/></a>
        <a href="https://www.instagram.com/sudhanshu_kes/"><GrInstagram/></a>
        <a href="https://twitter.com/sudhanshukes65"><GrTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; sudhanshu kesarwani . All rights reserved</small>
      </div>



    </footer>
  )
}

export default footer