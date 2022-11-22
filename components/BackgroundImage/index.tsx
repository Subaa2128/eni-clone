import React from "react";
import styles from "./Background.module.scss";
import Image from "next/image";
import { url } from "inspector";
interface IBackgroundImage {
  children: React.ReactNode;
  image?: any;
  url: any;
}
const BackgroundImage: React.FC<IBackgroundImage> = ({
  image,
  children,
  url,
}) => {
  return (
    <div className={styles.backgroundimage}>
      <div className={styles.img}>
        <Image src={image} alt="" />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BackgroundImage;
