import React from "react";
import styles from "../Topic/Topic.module.scss";
import { DemoTopic } from "./Topic";
import Image from "next/image";
import Slider from "react-slick";

const Topic = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1402,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className={styles.topicContainer}>
      <div className="mx pad">
        <h3>Topic</h3>
        <div className={styles.topicWrapper}>
          <Slider {...settings}>
            {DemoTopic.map((f, index) => {
              return (
                <div key={index} className={styles.topicContent}>
                  <div className={styles.topicImg}>
                    <Image src={f.image.src} alt={f.image.alt} layout="fill" />
                  </div>
                  <div className={styles.topicTitle}>
                    <h5>{f.title}</h5>
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

export default Topic;
