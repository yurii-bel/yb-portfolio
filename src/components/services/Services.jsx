import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI and Interaction Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Research &#38; Analysis </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile First and Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design Thinking</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User flow charts, diagrams</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Brand and design system development</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Design &#38; Re-design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>HTML5 Website Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wordpress Web Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Contentful Web Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Portfolio Website Development</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development*/}
        <article className="service">
          <div className="service__head">
            <h3>Software Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile Apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desktop Applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Product Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Development &#38; Implementation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maintenance</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation*/}
      </div>
    </section>
  )
}

export default Services