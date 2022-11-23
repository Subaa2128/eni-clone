import React from "react";
import styles from "../Natural/Natural.module.scss";
import { DemoNatural } from "./Natural";
import NaturalImg from "../../public/assets/home/icons/natural.svg";
import Slider from "react-slick";

const Natural = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
  };
  return (
    <div className={styles.NaturalContainer}>
      <div className="mx pad">
        <div className={styles.NaturalWrapper}>
          <div className={styles.NaturalImg}>
            <NaturalImg />
            <div className={styles.borderLeft}></div>
            <h1>Net Zero: our first targets</h1>
          </div>
          <p>
            We are bringing forward our decarbonisation goal to 2040 by offering
            our customers ever-increasingly decarbonised products and services.
            Here are the goals we aim to meet by 2025.
          </p>

          <div className={styles.NaturalContent}>
            <Slider {...settings}>
              {DemoNatural.map((f, index) => {
                return (
                  <div key={index} className={styles.overflow}>
                    <div className={styles.borderTop}></div>

                    <div className={styles.para}>
                      <h5>{f.percentage}</h5>
                      <p>{f.million}</p>
                    </div>
                    <p>{f.description}</p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Natural;
