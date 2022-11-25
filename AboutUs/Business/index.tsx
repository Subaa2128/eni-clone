import React from "react";
import Button from "../../components/Button";
import styles from "../Business/Business.module.scss";

const Business = () => {
  return (
    <div className={styles.businessContainer}>
      <div className="mx pad">
        <div className={styles.businessWrapper}>
          <h2>Energy is our business</h2>
          <p>
            We are active at every stage of the value chain: from natural gas
            and oil to co-generated electricity and renewables, including both
            traditional and bio refining and chemicals.
          </p>
          <Button>OPERATIONS</Button>
        </div>
      </div>
    </div>
  );
};

export default Business;
