import React from "react";
import styles from "../SuperFast/SuperFast.module.scss";
import Clock from "../../public/assets/home/icons/clock.svg";

const SuperFast = () => {
  return (
    <div className={styles.superFastContainer}>
      <div className="mx">
        <div className={styles.superFastWrapper}>
          <div className={styles.superBgImg}></div>
          <div className={styles.superFastContent}>
            <div className={styles.superFlexContent}>
              <div className={styles.superBorderLeft}></div>
              <h6>ENI TV</h6>
            </div>
            <h3>SUPERFAST#4 - A look at tomorrow</h3>
            <h4>Supercomputing in Eni is in continuous evolution</h4>
            <div className={styles.timeContent}>
              <h2>16 MARCH 2020</h2>
              <div className={styles.clockFlexContent}>
                <Clock />
                <p>04:55</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperFast;
