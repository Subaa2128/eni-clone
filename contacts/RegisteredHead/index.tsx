import React from "react";
import styles from "../RegisteredHead/Registered.module.scss";
import Image from "next/image";
import ContactImgOne from "../../public/assets/contacts/images/contactImg-1.jpg";

const RegisteredHead = () => {
  return (
    <div className={styles.registeredContainer}>
      <div className="mx">
        <div className={styles.head}>
          <h3>Contacts</h3>
          <p>
            On this page you can find Contact details for customers or anyone
            who is interested in information about our company.
          </p>
        </div>
        <div className={styles.registeredWrapper}>
          <div className={styles.registeredImg1}>
            <Image src={ContactImgOne} alt="" layout="fill" />
          </div>
          <div className={styles.registeredPara}>
            <h4>
              Registered Head Office - <br /> Rome
            </h4>
            <p>Piazzale Enrico Mattei, 1</p>
            <p>00144 Roma</p>
            <p>Tel: 06 598 21 / Fax: +39 06 598 22141</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisteredHead;
