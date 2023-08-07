import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

function Contact() {
  return (
    <>
      <section className="contact section">
        <h2 className="section__title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact__container container grid">
          <div className="contact__data">
            <h3 className="contact__title">Don&apos;t be shy !</h3>

            <p className="contact__description">
              Feel free to get in touch with me. I am always open to discussing
              new Projects, creative ideas or opportunities to be part oy your
              visions.
            </p>

            {/* contact email & phone */}
            <div className="contact__info">
              <div className="info__item">
                <FaEnvelopeOpen className="info__icon" />
                <div>
                  <span className="info__title">Mail me</span>
                  <h4 className="info__desc">habibsaddique4410@gmail.com</h4>
                </div>
              </div>

              <div className="info__item">
                <FaPhoneSquareAlt className="info__icon" />
                <div>
                  <span className="info__title">Call me</span>
                  <h4 className="info__desc">+923078474302</h4>
                </div>
              </div>
            </div>

            {/* contact social */}
            <div className="contact__socials">
              <a
                href="https://www.facebook.com/profile.php?id=100024435036543"
                className="contact__social-link"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/MrHabibSaddique"
                className="contact__social-link"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/mehar_habib_/"
                className="contact__social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="www.linkedin.com/in/habib-ur-rehman-9a5917281"
                className="contact__social-link"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* contact form */}
          <form className="contact__form">
            <div className="form__input-group">
              <div className="form__input-dev">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form__control"
                />
              </div>

              <div className="form__input-dev">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form__control"
                />
              </div>

              <div className="form__input-dev">
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="form__control"
                />
              </div>
            </div>

            <div className="form__input-dev">
              <textarea
                placeholder="Your Message"
                className="form__control textarea"
              ></textarea>
            </div>

            <button className="button">
              Send Message{" "}
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
