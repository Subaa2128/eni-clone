import React from "react";
import styles from "../CoralSouthProject/CoralSouth.module.scss";

const CoralSouthProject = () => {
  return (
    <div className={styles.coralSouthContainer}>
      <div className="mx">
        <div className={styles.coralSouthWrapper}>
          <div className={styles.coralSouthBgImg}></div>
          <div className={styles.coralContent}>
            <h1>Eni's Coral South project</h1>
            <h5>Towards new horizons with Coral Sul FLNG.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoralSouthProject;
