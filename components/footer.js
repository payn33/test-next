import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";
import content from "../utils/footer.json";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.text}>
          <h2>{content.text.header}</h2>
          <p>{content.text.body}</p>
        </div>
        <div className={styles.link}>
          <h2>{content.links.header}</h2>
          <div>
            <span>
              {content.links.col1.map((data, idx) => (
                <Link key={idx} href={`${data.link}`}>
                  {data.title}
                </Link>
              ))}
            </span>
            <span>
              {content.links.col2.map((data, idx) => (
                <Link key={idx} href={`${data.link}`}>
                  {data.title}
                </Link>
              ))}
            </span>
          </div>
        </div>
        <div className={styles.contact}>
          <h2>{content.contact.header}</h2>
          <span>
            {content.contact.col.map((data, idx) => (
              <a key={idx} href={`${data.link}`}>
                {data.title}
              </a>
            ))}
          </span>
        </div>
      </div>
      {/* <div className={styles.copyright}> */}
        <p className={styles.copyright}>{content.foot}</p>
      {/* </div> */}
    </div>
  );
};

export default Footer;
