import React from "react";
import { getImageUrl } from "../utils";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Lorenzo</h1>
        <p className={styles.description}>
          I’m passionate about shaping the future of technology through
          robotics, artificial intelligence, and automation. Currently, I work
          as a Software Developer for ADAS, helping enhance autonomous driving
          solutions and driving innovation in Industry 4.0.
        </p>
        <a
          href="https://www.linkedin.com/in/lorenzorod/"
          className={styles.contactBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="My hero image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
