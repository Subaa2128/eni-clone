import React from "react";
import styles from "../Natural/Natural.module.scss";
import { DemoNatural } from "./Natural";
import NaturalImg from "../../public/assets/home/icons/natural.svg";

const Natural = () => {
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
            {DemoNatural.map((f, index) => {
              return (
                <div key={index} className={styles.overflow}>
                  <div className={styles.borderTop}></div>
                  <h3>{f.percentage}</h3>
                  <p>{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Natural;
