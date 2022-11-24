import React from "react";
import styles from "../WhoweareFinancial/Whoweare.module.scss";
import Natural from "../../public/assets/home/icons/natural.svg";
import Slider from "react-slick";
import { DemoWhoWeAre } from "./Whoweare";

const WhoWeAre = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 2,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 732,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 500,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    // ],
  };
  return (
    <div className={styles.whoWeAreContainer}>
      <div className="mx">
        <div className={styles.whoWeAreWrapper}>
          <div className={styles.whoWeAreHeading}>
            <h3>Who we are</h3>
            <p>
              We are an integrated energy company whose dedication to the energy
              transition translates into tangible actions aimed at achieving
              carbon neutrality by 2050.
            </p>
          </div>
          <div className="pad">
            <div className={styles.dollarImg}>
              <Natural />
              <div className={styles.borderLeft}></div>
              <h1>Financial highlights 2021</h1>
            </div>
            <p>
              Eni has proven the robustness and flexibility of its business
              model by reacting swiftly and effectively to the extraordinary
              crisis context, while progressing the Company’s irreversible path
              for the energy transition.
            </p>
          </div>
          <div className={styles.whoWeAreContent}>
            {/* {DemoWhoWeAre.map((f, index) => {
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
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
