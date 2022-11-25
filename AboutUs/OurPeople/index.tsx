import React from "react";
import styles from "../OurPeople/OurPeople.module.scss";
import Upload from "../../public/assets/aboutUs/icon/upload-cloud.svg";
import Image from "next/image";

const OurPeople = () => {
  return (
    <div className={styles.ourPeopleContainer}>
      <div className="mx">
        <div className={styles.ourPeopleWrapper}>
          <div className={styles.ourBgImg}></div>
          <div className={styles.content}>
            <div className={styles.ourPeopleHead}>
              <h4>Our people</h4>
            </div>
            <div className={styles.ourPeopleGridContent}>
              <div className={styles.ourPeopleFirst}>
                <div className={styles.firstContent}>
                  <h6>
                    <span>69</span> countries
                  </h6>
                  <p>we work in</p>
                </div>
                <div className={styles.firstContent}>
                  <h6>
                    <span>1,040</span> million
                  </h6>
                  <p>Hours of staff training</p>
                </div>
              </div>
              <div className={styles.ourPeopleSecond}>
                <div className={styles.firstContent}>
                  <h6>
                    <span>31,888</span>
                  </h6>
                  <p>
                    <span>Numbers of staff at the end of 2021</span>
                  </p>
                </div>
                <div className={styles.secondContent}>
                  <h6>
                    <span>11,256</span> Employees
                  </h6>
                  <p>outside Italy</p>
                </div>
              </div>
              <div className={styles.ourPeopleFirst}>
                <div className={styles.firstContent}>
                  <h6>
                    <span>27,3%</span> women
                  </h6>
                  <p>in managerial positions</p>
                </div>
                <div className={styles.firstContent}>
                  <h6>
                    <span>20,632</span> Employees
                  </h6>
                  <p>in Italy</p>
                </div>
              </div>
            </div>

            <div className={styles.uploadContent}>
              <Upload />
              <h2>Turn your smartphone and discover more</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
