import React from "react";
import styles from "../GlobalPortfolio/GlobalPortfolio.module.scss";

const GlobalPortfolio = () => {
  return (
    <div className={styles.globalContainer}>
      <div className="mx">
        <div className={styles.globalWrapper}>
          <h2>A global portfolio for an equal and secure transition</h2>
          <p>
            Our global presence allows us to deal with the short and medium-term
            challenges posed by the energy sector. Thanks to our consolidated
            alliances with producing countries, we are able to increasingly
            diversify our procurement sources, working closely with partners and
            local institutions, and providing our customers worldwide with an
            extensive offering of more sustainable energy products and services.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GlobalPortfolio;
