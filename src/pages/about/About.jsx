import Info from "../../components/info";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/cv.pdf";
import Stats from "../../components/Stats";
import "./about.css";

function About() {
  return (
    <>
      <main className="section container">
        <section className="about">
          <h2 className="section__title">
            About <span>Me</span>
          </h2>
          {/* info container */}
          <div className="about__container grid">
            <div className="about__info">
              <h3 className="section__subtitle">Personal Infos</h3>
              <ul className="info__list grid">
                <Info />
              </ul>
              <a href={CV} download="" className="button">
                Download CV{" "}
                <span className="button__icon">
                  {" "}
                  <FaDownload />{" "}
                </span>
              </a>
            </div>
            <div className="stats grid">
              <Stats />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
