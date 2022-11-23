import React from "react";
import styles from "../Voucher/Voucher.module.scss";
import { DemoVoucher } from "../Voucher/Voucher";
import Image from "next/image";
const Voucher = () => {
  return (
    <div className={styles.voucherContainer}>
      <div className="mx pad">
        <div className={styles.voucherWrapper}>
          {DemoVoucher.map((f, index) => {
            return (
              <div key={index} className={styles.voucherContent}>
                <div>
                  <div className={styles.borderTop}></div>
                  <p>{f.description}</p>
                </div>
                <div>
                  <h6>{f.name}</h6>
                  <div className={styles.voucherImg}>
                    <Image src={f.logo.src} alt={f.logo.alt} layout="fill" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Voucher;
