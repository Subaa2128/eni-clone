import React from "react";
import styles from "../PressReleases/Press.module.scss";
import { DemoPressReleases } from "./PressReleases";

const PressReleases = () => {
  return (
    <div className={styles.pressReleasesContainer}>
      <div className="mx pad">
        <div className={styles.pressReleasesHead}>
          <h2>Press releases</h2>
          <p>
            The latest publications to keep up to date on the activities we
            carry out and our projects.
          </p>
        </div>
        <div className={styles.pressReleasesWrapper}>
          {DemoPressReleases.map((f, index) => {
            return (
              <div key={index} className={styles.pressReleaseContent}>
                <div>
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
        </div>
      </div>
    </div>
  );
};

export default PressReleases;
