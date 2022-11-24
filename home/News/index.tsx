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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 873,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
    ],
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
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className={styles.newsflexContent}>
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
