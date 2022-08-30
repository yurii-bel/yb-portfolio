import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/yb_portfolio_preview.jpg";
import IMG2 from "../../assets/yb_weather_api_preview.jpg";
import IMG3 from "../../assets/yb_social_links_preview.jpg";
import IMG4 from "../../assets/yb_personal_bot_preview.jpg";
import IMG5 from "../../assets/yb_oneapp_tailwind_preview.jpg";
import IMG6 from "../../assets/yb_frog_game_preview.jpg";
import IMG7 from "../../assets/yb_cs_1.jpg";
import IMG8 from "../../assets/yb_cs_2.jpg";
import IMG9 from "../../assets/yb_cs_3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "YB Portfolio React",
    github: "https://github.com/yurii-bel/yb-portfolio",
    demo: "https://yuriibeliavtsev.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "YB Weather API",
    github: "https://github.com/yurii-bel/weather-app",
    demo: "https://www.youtube.com/watch?v=29RvjSW_8lM",
  },
  {
    id: 3,
    image: IMG3,
    title: "YB Social Links",
    github: "https://github.com/yurii-bel/yb-social-links",
    demo: "https://bespoke-brigadeiros-9dffd5.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "YB Telegram Bot",
    github: "https://github.com/yurii-bel/YB_Personal_Bot",
    demo: "https://www.youtube.com/watch?v=WEerzlsxcLA",
  },
  {
    id: 5,
    image: IMG5,
    title: "YB Landing Tailwind CSS #1",
    github: "https://github.com/yurii-bel/oneapp-website",
    demo: "https://rainbow-halva-7cb7fc.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "YB 2D Platformer Game",
    github: "https://github.com/yurii-bel/hesitative_frog_2d",
    demo: "https://www.youtube.com/watch?v=RC0aQwZMFR8",
  },
  {
    id: 7,
    image: IMG7,
    title: "YB ApexBuff React",
    github: "https://github.com/yurii-bel",
    demo: "https://www.youtube.com/channel/UCMxGfMf3IVD7-kcIMM1POxQ",
  },
  {
    id: 8,
    image: IMG8,
    title: "YB Landing Tailwind CSS #2",
    github: "https://github.com/yurii-bel",
    demo: "https://www.youtube.com/channel/UCMxGfMf3IVD7-kcIMM1POxQ",
  },
  {
    id: 9,
    image: IMG9,
    title: "YB GradientPicker React",
    github: "https://github.com/yurii-bel",
    demo: "https://www.youtube.com/channel/UCMxGfMf3IVD7-kcIMM1POxQ",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} class="btn" target="_blank">
                  Github
                </a>
                <a href={demo} class="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
