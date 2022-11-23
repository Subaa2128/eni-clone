import React from "react";
import styles from "../Branches/Branches.module.scss";
import Image from "next/image";
import BranchesImg from "../../public/assets/contacts/images/branchesImg.jpg";

const Branches = () => {
  return (
    <div className={styles.branchesContainer}>
      <div className="mx">
        <div className={styles.branchesWrapper}>
          <div className={styles.branchesImg1}>
            <Image src={BranchesImg} alt="" layout="fill" />
          </div>
          <div className={styles.branchesPara}>
            <h4>
              Branches - San Donato <br /> Milanese (MI)
            </h4>
            <p>Piazza Ezio Vanoni, 1 / Via Emilia, 1</p>
            <p>20097 San Donato Milanese (MI)</p>
            <p>Tel: 02 520 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
