import React, { useState } from "react";
import styles from "./Explore.module.scss";
import { ExploreData, Format, Topic } from "./Explore";
import Image from "next/image";
interface IExplore {
  onClose: () => void;
}
const Explore: React.FC<IExplore> = ({ onClose }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.explore_container}>
      <div className={styles.header}>
        <div className={styles.title}>Explore</div>
        <div onClick={onClose} className={styles.close}>
          X
        </div>
      </div>
      <div className={styles.card_container}>
        {ExploreData.map((f, index) => {
          return (
            <div key={index} className={styles.explore_card}>
              <div className={styles.image}>
                <Image src={f.image} alt="" width={200} height={200} />
                <div className={styles.content}>
                  <p>+</p>
                  <p>add to your menu</p>
                  <h1>{f.title}</h1>
                  <h1>~</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.topic_format_container}>
        <div className={styles.title}>
          <h1
            style={{
              color: open ? "red" : "pink",
              borderBottom: open ? "1px solid yellow" : "none",
              width: "fit-content",
            }}
            onClick={() => setOpen(true)}
          >
            Topic
          </h1>
          <h1
            style={{
              color: !open ? "red" : "pink",
              borderBottom: !open ? "1px solid yellow" : "none",
              width: "fit-content",
            }}
            onClick={() => setOpen(false)}
          >
            Format
          </h1>
        </div>
        {open ? (
          <div className={styles.card_container}>
            {Topic.map((f, index) => {
              return (
                <div key={index} className={styles.explore_card}>
                  <div className={styles.image}>
                    <Image src={f.image} alt="" width={200} height={200} />
                    <div className={styles.content}>
                      <p>+</p>
                      <p>add </p>
                      <h1>{f.title}</h1>
                      <h1>~</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.card_container}>
            {Format.map((f, index) => {
              return (
                <div key={index} className={styles.explore_card}>
                  <div className={styles.image}>
                    <Image src={f.image} alt="" width={200} height={200} />
                    <div className={styles.content}>
                      <p>+</p>
                      <p>add </p>
                      <h1>{f.title}</h1>
                      <h1>~</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
