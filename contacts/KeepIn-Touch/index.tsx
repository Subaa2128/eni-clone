import React from "react";
import Button from "../../components/Button";
import styles from "../KeepIn-Touch/KeepTouch.module.scss";

const KeepInTouch = () => {
  return (
    <div className={styles.keepTouchContainer}>
      <div className="mx">
        <div className={styles.keepTouchWrapper}>
          <div className={styles.keepTouchContent}>
            <h1>Keep in touch</h1>
            <p>Sign up to receive updates from Eni.</p>
            <Button>Newsletter</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeepInTouch;
