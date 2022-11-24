import React from "react";
import styles from "../Management/Management.module.scss";
import Arrow from "../../public/assets/contacts/icons/arrow-right.svg";

const Management = () => {
  return (
    <div className={styles.managementContainer}>
      <div className="mx">
        <div className={styles.managementWrapper}>
          <div className={styles.ourvalueContent}>
            <div className={styles.ourvalueContentImg}></div>
            <div className={styles.ourvaluePara}>
              <h1>Our values</h1>
              <h5>
                Our focus on people-centred sustainability and innovation allows
                us to harness ideas, skills and passion to create long-lasting
                growth.
              </h5>
            </div>
          </div>

          <div className={styles.sharingOurWorld}>
            <div className={styles.sharingImg}></div>
            <div className={styles.sharingPara}>
              <h1>Sharing our world</h1>
              <h5>
                Together is better. Only by working in partnership can we
                overcome the great climate challenge of our times.
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.managementContent}>
          <div className={styles.structure}>
            <h2>Eni’s management – organisational structure</h2>
            <p>Our management team’s structure and responsibilities.</p>
          </div>
          <div className={styles.organisational}>
            <div>
              <Arrow />
            </div>
            <div>
              <p>ORGANISATIONAL CHART</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
