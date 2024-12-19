import React from "react";
import { getImageUrl } from "../utils";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/roboticsIcon.png")}
              alt="Cursor icon"
              className={styles.aboutItemImage}
            />
            <div>
              <h3>Control Engineering and Robotics</h3>
              <p>
                I’ve designed and developed autonomous systems, such as
                trajectory control modules and long-term planners using tools
                like MATLAB/Simulink, ROS2, and NAV2, contributing to robotics
                solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/aiIcon.png")}
              alt="Server icon"
              className={styles.aboutItemImage}
            />
            <div>
              <h3>Artificial Intelligence and Software Development</h3>
              <p>
                My experience includes building neural network-based classifiers
                and deep learning solutions for industrial applications, as well
                as software development for autonomous driving systems (ADAS)
                using C++, Python, and modern tools.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
