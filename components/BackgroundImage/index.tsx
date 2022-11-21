import React from "react";
import styles from "./Background.module.scss";
import Image from "next/image";
interface IBackgroundImage {
  children: React.ReactNode;
  image?: any;
}
const BackgroundImage: React.FC<IBackgroundImage> = ({ image, children }) => {
  return (
    <div className={styles.backgroundimage}>
      <Image src={image} alt="" />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BackgroundImage;
