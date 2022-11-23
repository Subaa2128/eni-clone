import React from "react";
import Button from "../../components/Button";
import styles from "../Laptop/Laptop.module.scss";

const laptop = () => {
  return (
    <div className={styles.laptopContainer}>
      <div className="mx">
        <div className={styles.laptopWrapper}>
          <div className={styles.laptopContent}>
            <h1>Not found the information you were looking for?</h1>
            <Button>contact us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default laptop;
