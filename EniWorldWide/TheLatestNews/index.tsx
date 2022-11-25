import React from "react";
import Button from "../../components/Button";
import styles from "../TheLatestNews/TheLatestNews.module.scss";
import { DemoLatestNews } from "./TheLatestNews";
import Image from "next/image";

const TheLatestNews = () => {
  return (
    <div className={styles.latestNewsContainer}>
      <div className="mx">
        <div className={styles.latestNewsHead}>
          <h3>The latest news from around the world</h3>
          <p>
            The latest updates on our ongoing projects and initiatives in Italy
            and abroad.
          </p>
        </div>
        <div className={styles.latestNewsWrapper}>
          {DemoLatestNews.map((f, index) => {
            return (
              <div key={index} className={styles.latestNewsContent}>
                {/* <div className={styles.latestNewsMedia}>
                  <Image src={f.image.src} alt={f.image.alt} layout="fill" />
                </div> */}
                <div className={styles.latestNewsTitle}>
                  <h1>{f.title}</h1>
                  <p>{f.description}</p>
                  <Button>{f.button}</Button>
                </div>

                <div className={styles.latestNewsImg}>
                  <Image src={f.image.src} alt={f.image.alt} layout="fill" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TheLatestNews;
