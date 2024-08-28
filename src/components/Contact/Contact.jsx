import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../common/utlis";

const Contact = () => {
  const data = [
    {
      id: 1,
      url: "mailto:rishavyudi.dev@gmail.com",
      imgUrl: "contact/emailIcon.png",
      altIcon: "Email icon",
      text: "Mail",
    },
    {
      id: 2,
      url: "https://www.linkedin.com/in/rishav-kumar-b190451ab/",
      imgUrl: "contact/linkedinIcon.png",
      altIcon: "Linkedln icon",
      text: " Linkedln",
    },
    {
      id: 3,
      url: "https://github.com/rishavyudidev",
      imgUrl: "contact/githubIcon.png",
      altIcon: "GitHub icon",
      text: "GitHub",
    },
  ];
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        {data?.map((item) => {
          return (
            <li className={styles.link}>
              <img src={getImageUrl(item.imgUrl)} alt={item.altIcon} />
              <a href={item.url} target="_blank">
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Contact;
