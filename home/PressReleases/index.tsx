import React from "react";
import styles from "../PressReleases/Press.module.scss";
import { DemoPressReleases } from "./PressReleases";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Book from "../../public/assets/Hero/icons/book.svg";

const PressReleases = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
  };
  return (
    <div className={styles.pressReleasesContainer}>
      <div className="mx">
        <div className={styles.pressReleasesHead}>
          <h2>Press releases</h2>
          <p>
            The latest publications to keep up to date on the activities we
            carry out and our projects.
          </p>
        </div>
        <div className={styles.pressReleasesWrapper}>
          <Slider {...settings}>
            {DemoPressReleases.map((f, index) => {
              return (
                <div key={index} className={styles.pressReleaseContent}>
                  <div>
                    <Book />
                    <div className={styles.imgBorderBottom}></div>
                    <p>{f.date}</p>
                    <div className={styles.pressTitle}>
                      <div className={styles.borderLeft}></div>
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

export default PressReleases;
