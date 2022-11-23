import React from "react";
import styles from "../News/New.module.scss";
import Slider from "react-slick";
import { DemoNews } from "./News";
import Image from "next/image";

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
  };
  return (
    <div className={styles.newsContainer}>
      <div className="mx">
        <div className={styles.newsHead}>
          <h2>News</h2>
          <p>Eni's news from Italy and the world.</p>
        </div>
        <div className={styles.newsWrapper}>
          <Slider {...settings}>
            {DemoNews.map((f, index) => {
              return (
                <div>
                  <div
                    key={index}
                    className={styles.newsContent}
                    style={{
                      backgroundImage: `url(${f.bgImg.src})`,
                    }}
                  >
                    <div className={styles.newsflexContent}>
                      {/* <Image
                      src={f.bgImg.src}
                      alt={f.bgImg.alt}
                      width={100}
                      height={100}
                    /> */}
                      <div className={styles.newsBoder}></div>
                      <h5>{f.title}</h5>
                    </div>
                    <h4>{f.description}</h4>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default News;
