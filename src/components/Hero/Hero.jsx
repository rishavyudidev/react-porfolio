import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../common/utlis";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Rishav</h1>
        <p className={styles.description}>
          I'm a Software Developer with over 2.5 years of experience
          specializing in JavaScript and its modern libraries. Let's connect if
          you're interested in learning more!
        </p>
        <a href="mailto:rishavyudi.dev@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
