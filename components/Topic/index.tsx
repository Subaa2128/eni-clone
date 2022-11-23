import React from "react";
import styles from "../Topic/Topic.module.scss";
import { DemoTopic } from "./Topic";
import Image from "next/image";

const Topic = () => {
  return (
    // <div className={styles.topicContainer}>
    //   <div className="mx pad">
    //     <h3>Topic</h3>
    //     <div className={styles.topicWrapper}>
    //       {DemoTopic.map((f, index) => {
    //         return (
    //           <div key={index} className={styles.topicContent}>
    //             <div className={styles.topicImg}>
    //               <Image
    //                 src={f.image.src}
    //                 alt={f.image.alt}
    //                 width={263}
    //                 height={160}
    //               />
    //             </div>
    //             <div className={styles.topicTitle}>
    //               <h5>{f.title}</h5>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div className={styles.topicContainer}>
      <div className="mx pad">
        <h3>Topic</h3>
        <div className={styles.topicWrapper}>
          {DemoTopic.map((f, index) => {
            return (
              <div key={index} className={styles.topicContent}>
                <div className={styles.topicImg}>
                  <Image src={f.image.src} alt={f.image.alt} layout="fill" />
                </div>
                <div className={styles.topicTitle}>
                  <h5>{f.title}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Topic;
