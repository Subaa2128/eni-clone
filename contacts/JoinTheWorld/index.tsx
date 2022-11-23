import React from "react";
import styles from "../JoinTheWorld/Join.module.scss";
import Button from "../../components/Button";

const JoinTheWorld = () => {
  return (
    <div className={styles.joinContainer}>
      <div className="mx">
        <div className={styles.joinWrapper}>
          <div className={styles.joinContent}>
            <h1>Want to join the world of Eni?</h1>
            <p>
              Choosing Eni means working for an Italian company operating all
              over the world. Find out how to apply
            </p>
            <Button>Apply</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTheWorld;
