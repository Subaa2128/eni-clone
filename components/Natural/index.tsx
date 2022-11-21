import React from "react";
import styles from "../Natural/Natural.module.scss";
import { DemoNatural } from "./Natural";
import NaturalImg from "../../public/assets/icons/natural.svg";

const Natural = () => {
  return (
    <div className={styles.NaturalContainer}>
      <div className="mx pad">
        <div className={styles.NaturalWrapper}>
          <div className={styles.NaturalImg}>
            <NaturalImg />
            <div className={styles.borderLeft}></div>
            <h1>Natural gas in Eni's decarbonisation path</h1>
          </div>
          <p>
            Natural gas is important to support the energy transition and at the
            same time ensure an effective response to growing energy demand.
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
