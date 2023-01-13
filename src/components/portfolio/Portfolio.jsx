import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfilioPhotoo.png'
import IMG6 from '../../assets/portfolio6.jpg'




const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG1 } alt="" />

          </div>
          <br />
          <h2>Food order website</h2>
          <p>Made with only HTML, CSS, JS (Frontend only)</p>
          <br />
            <div className="portfolio__item-cta">
            <a href="https://github.com/sudhanshukes65/Food_Order_Website_Project-main" className="btn" target="_blank">Github</a>
            <a href="https://foodorderbysk.netlify.app/" className="btn btn-primary"  target="_blank">Live Demo</a>

            </div>
        </article>
        
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG2 } alt="" />

          </div>
          <br />
          <h2>Drum kit webiste</h2>
          <p>Made with HTML,CSS,JS (With different drum sounds)</p>
          <br />
            <div className="portfolio__item-cta">
            <a href="https://github.com/sudhanshukes65/drum-kit" className="btn" target="_blank">Github</a>
            <a href="https://drum-kit-bysk.netlify.app/" className="btn btn-primary"  target="_blank">Live Demo</a>

            </div>
        </article>

        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG3 } alt="" />

          </div>
          <h3>This is a line follower robot (In online simulator webots)</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sudhanshukes65/LineFollowerWebots" className="btn" target="_blank">Github</a>
            {/* <a href="https://github.com" className="btn btn-primary"  target="_blank">Live Demo</a> */}

            </div>
        </article>

        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG4 } alt="" />

          </div>
          <br />
          <h2>Crypto Currency Trakcer</h2>
          <p>Made with ReactJs (using API)</p>
          <br />
            <div className="portfolio__item-cta">
            <a href="https://github.com/sudhanshukes65/Crypto-tracker-using-api" className="btn" target="_blank">Github</a>
            <a href="https://crypto-tracker-bysk.netlify.app/" className="btn btn-primary"  target="_blank">Live Demo</a>

            </div>
        </article>
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG5 } alt="" />

          </div>
          <br />
          <h2>My Portfolio Website </h2>
          <p>Made with ReactJs </p>
          <br />
            <div className="portfolio__item-cta">
            <a href="https://github.com/sudhanshukes65/website-portfolio" className="btn" target="_blank">Github</a>
            <a href="https://sudhanshukesarwani.netlify.app/" className="btn btn-primary"  target="_blank">Live Demo</a>

            </div>
        </article>

        {/* <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG1 } alt="" />

          </div>
          <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sudhanshukes65/Crypto-tracker-using-api" className="btn" target="_blank">Github</a>
            <a href="https://crypto-tracker-bysk.netlify.app/" className="btn btn-primary"  target="_blank">Live Demo</a>

            </div>
        </article> */}

        
      </div>
    </section>
  )
}

export default Portfolio