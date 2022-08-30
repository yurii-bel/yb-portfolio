import React from 'react'
import './moreaboutme.css'
import AVTR1 from '../../assets/a1.jpg'
import AVTR2 from '../../assets/a2.jpg'
import AVTR3 from '../../assets/a3.jpg'
import AVTR4 from '../../assets/a4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Physical Activity',
    review: 'Boxing, Table Tennis, Tennis, Football, Swimming.  \
    PRs: Bench press: 116kg, jumping-rope: 1000, Push-Ups: 70, Pull-Ups: 28, Sit-Ups: 200'
  },
  {
    avatar: AVTR2,
    name: 'Computer Games',
    review: 'Apex Legends, GTA 5, Dota 2. *I really like online competitive games.'
  },
  {
    avatar: AVTR3,
    name: 'Films',
    review: 'I prefer the following movie genres: action, science fiction, drama, comedy. \
    Absolutely worth watching: Green Mile, Terminator 2, Interstellar, Lion King'
  },
  {
    avatar: AVTR4,
    name: 'Quotes I Liked',
    review: '"Life is really simple, but we insist on making it complicated." -Confucius; "Life is what happens when you\'re busy making other plans." -John Lennon; "A place where someone still thinks of you is a place called home" -YouTube Comment Section :)'
  }
]

const Testimonials = () => {
  return (
    <section id='moreaboutme'>
      <h5>Discover New Things About Me</h5>
      <h2>More About Me</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}>
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
              {review}
              </small>
          </SwiperSlide>
          )
        })
      }
        
      </Swiper>
    </section>
  )
}

export default Testimonials