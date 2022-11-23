import React from "react";
import { DemoCard } from "./Card";
import Image from "next/image";
import styles from "../Card/Card.module.scss";
import ArrowRight from "../../public/assets/contacts/icons/arrow-right.svg";

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div className="mx pad">
        <div className={styles.cardWrapper}>
          {DemoCard.map((f, index) => {
            return (
              <div key={index} className={styles.cardContent}>
                <div>
                  <div className={styles.cardImg}>
                    <Image
                      src={f.image.src}
                      alt={f.image.alt}
                      width={100}
                      height={100}
                      style={{ borderRadius: "100px" }}
                    />
                  </div>
                  <h1>{f.title}</h1>
                  <p>{f.description}</p>
                </div>
                <div className={styles.arrowRight}>
                  <ArrowRight />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
