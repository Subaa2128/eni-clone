import React from "react";
import styles from "../OurActivities/OurActivities.module.scss";
import Arrow from "../../public/assets/contacts/icons/arrow-right.svg";
import { DemoOurActivities } from "./OurActivities";
import Link from "next/link";

const OurActivities = () => {
  return (
    <div className={styles.ourActivitiesContainer}>
      <div className="mx pad">
        <div className={styles.ourActivitiesHead}>
          <h2>Our activities</h2>
          <p>
            We are a global energy company, active at every stage of the value
            chain: from natural gas and oil to co-generated electricity and
            renewables, including both traditional and bio refining and
            chemicals
          </p>
        </div>
        <div className={styles.ourActivitiesWrapper}>
          {DemoOurActivities.map((f, index) => {
            return (
              <div key={index} className={styles.ourActivitiesContent}>
                <div className={styles.ourArrow}>
                  <Arrow />
                </div>
                <div className={styles.ourPara}>
                  <Link href="">
                    <p>{f.title}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurActivities;
