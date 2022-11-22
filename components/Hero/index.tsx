import React from "react";
import styles from "../Hero/Hero.module.scss";
import { DemoHero } from "./Hero";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={styles.heroContainer}>
      <div className="mx">
        <div className={styles.heroWrapper}>
          <Slider {...settings}>
            {DemoHero.map((f, index) => {
              return (
                <div key={index} className={styles.heroContent}>
                  <div className={styles.heroSliderImg}>
                    <Image src={f.image.src} alt={f.image.alt} layout="fill" />
                  </div>
                  <div className={styles.heroPara}>
                    <h3>{f.title}</h3>
                    <p>{f.description}</p>
                  </div>
                  <div className={styles.flexContent}>
                    <h4>
                      Research centre for renewable energy and the environment
                      in Novara
                    </h4>
                    <h4>People and values</h4>
                    <h4>
                      New photovoltaic plant under construction in Algeria
                    </h4>
                    <h4>Action for gas supply diversification</h4>
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

export default Hero;
