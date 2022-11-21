import React from "react";
import styles from "../Technological/Technological.module.scss";

const Technological = () => {
  return (
    <div className={styles.technologicalContainer}>
      <div className="mx">
        <div className={styles.technologicalWrapper}>
          <div className={styles.technologicalContent}>
            <h2>
              Eni is a global energy company with a <br /> high technological
              content
            </h2>
            <h6>
              Our commitment to energy transition translates into tangible
              actions aimed at <br /> achieving carbon neutrality by 2050.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technological;
