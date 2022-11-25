import React from "react";
import styles from "../documents/document.module.scss";
import DocImg from "../../public/assets/aboutUs/images/card-storia.png";
import Image from "next/image";
import Button from "../../components/Button";

const Documents = () => {
  return (
    <div className={styles.documentContainer}>
      <div className="mx">
        <div className={styles.documentWrapper}>
          <div className={styles.docImg}>
            <Image src={DocImg} alt="" layout="fill" />
          </div>
          <div className={styles.docPara}>
            <h2>Historical archive: 100 years of Eni documents</h2>
            <p>
              From company history to management training, Villa Montecucco is
              home to our archive and school of management.
            </p>
            <Button>ARCHIVE</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
