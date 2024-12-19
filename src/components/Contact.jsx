import React from "react";
import { getImageUrl } from "../utils";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/lorenzorod/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/lorenzorod
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://www.github.com/lorenzo-rod"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/lorenzo-rod
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
