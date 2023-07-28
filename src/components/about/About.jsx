import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import { FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>
 
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Education</h5>
              <small>B-Tech </small>
              <small>MNNIT </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ projects</small>
            </article>
          </div>

          <p>
          Passionate coder and developer.
Extremely motivated to contribute to organisational success while developing new skills and gaining real-world experience.
Always ready to learn new things, explore my potential and  well-versed in C/C++ Programming and Web development. 


          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>


        </div>

      </div>
    </section>
  )
}

export default about