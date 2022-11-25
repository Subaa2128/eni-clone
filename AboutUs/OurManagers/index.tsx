import React from "react";
import styles from "../OurManagers/OurManagers.module.scss";
import Arrow from "../../public/assets/contacts/icons/arrow-right.svg";
import ManagementOne from "../../public/assets/aboutUs/images/managersImg-1.png";
import ManagementTwo from "../../public/assets/aboutUs/images/managersImg-2.png";
import Image from "next/image";

const OurManagers = () => {
  return (
    <div className={styles.ourManagersContainer}>
      <div className="mx">
        <div className={styles.managementContent}>
          <div className={styles.structure}>
            <h2>Our managers</h2>
            <p>
              Biographies of Eni managers: the people we trust to guide our
              company towards the future.
            </p>
          </div>
          <div className={styles.organisational}>
            <div>
              <Arrow />
            </div>
            <div>
              <p>MANAGERS'S PROFILES</p>
            </div>
          </div>
        </div>

        <div className={styles.managersWrapper}>
          <div className={styles.managersFirstContent}>
            <div className={styles.managers}>
              <Image src={ManagementOne} alt="" width={200} height={200} />
            </div>
            <div className={styles.managementPara}>
              <h6>Lucia Calvosa</h6>
              <p>Chairman of the Board</p>
              <Arrow />
            </div>
          </div>

          <div className={styles.managersFirstContent}>
            <div className={styles.managers}>
              <Image src={ManagementTwo} alt="" width={200} height={200} />
            </div>
            <div className={styles.managementPara}>
              <h6>Claudio Descalzi</h6>
              <p>Chief Executive Officer</p>
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurManagers;
