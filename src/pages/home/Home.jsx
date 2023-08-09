import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Type from "typed.js";
import { useEffect, useRef } from "react";
import "./home.css";

function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Type(el.current, {
      strings: [
        "Web Developer",
        "MERN Developer",
        "Web Designer",
        "freelancer",
        "Blogger",
      ],
      typeSpeed: 150,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section className="home section grid">
        <img src={Profile} alt="" className="home__img" />

        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">
              <span>I&apos;m Mehar Habib.</span> <br /> <strong ref={el} />
            </h1>

            <p className="home__description">
              I&apos;m a Pakistan based web designer & Full Stack developer
              focused on crafting clean & user-friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </p>
            <Link to="/about" className="button">
              More About Me{" "}
              <span className="button__icon">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
        {/* color block behind the picture */}
        <div className="color__block"></div>
      </section>
    </>
  );
}

export default Home;
