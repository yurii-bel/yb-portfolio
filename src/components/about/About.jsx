import React from "react";
import "./about.css";
import ME from "../../assets/me-about-final.jpg";
import { FaAward } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
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
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year+ Working</small>
            </article>

            <article className="about__card">
              <GiSkills className="about__icon" />
              <h5>Skills</h5>
              <small>Frontend, Backend</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Pet Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            A highly motivated and goal-oriented individual capable of solving
            non-standard tasks in a creative way and learn new information
            quickly. Passionate about doing any work in IT sphere. An excellent
            team player and non-conflict person. Seeking a position in life to
            utilize my skills in <strong id="prog">programming</strong> &#38;{" "}
            <strong id="web">web design</strong> and achieve professional growth
            while being resourceful, innovative and flexible.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
