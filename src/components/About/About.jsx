import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../common/utlis";
const About = () => {
  const data = [
    {
      id: 1,
      name: "Frontend Developer",
      desc: "I'm a frontend developer with experience in building responsive and optimized sites",
      imgUrl: "about/cursorIcon.png",
    },
    {
      id: 2,
      name: "Backend Developer",
      desc: "I have experience developing fast and optimised back-end systems and APIs",
      imgUrl: "about/serverIcon.png",
    },
  ];
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
          {data?.map((item) => {
            return (
              <li key={item.id} className={styles.aboutItem}>
                <img src={getImageUrl(item.imgUrl)} alt="icon" />
                <div className={styles.aboutItemText}>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default About;
