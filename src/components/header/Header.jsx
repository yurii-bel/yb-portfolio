import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me_new.png'
import HeaderSocials from './HeaderSocials'
import Headerlogo from './Headerlogo'
import Typewriter from './Typewriter'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yurii Beliavtsev</h1>
        <h5 className="text-light">
          Web Developer &#38; Programmer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <Headerlogo />
          <Typewriter />
          {/* <img src={ME} alt="me" /> */}
        </div>

        <a href="#contact" className='scroll__down'>Scroll down</a>

      </div>
    </header>
  )
}

export default Header