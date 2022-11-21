import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../public/assets/Header/logo/logo.svg";
import DropArrow from "../../public/assets/Header/icons/drop-arrow.svg";
import FourSquare from "../../public/assets/Header/icons/four-square.svg";
import MenuBar from "../../public/assets/Header/icons/menu-bar.svg";
import Search from "../../public/assets/Header/icons/search.svg";
import Stats from "../../public/assets/Header/icons/stats.svg";
import Video from "../../public/assets/Header/icons/video.svg";
import Work from "../../public/assets/Header/icons/work.svg";
import styles from "./Header.module.scss";
import Image from "next/image";
import Explore from "./Explore";
const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const [explore, setExplore] = useState(false);

  return (
    <div className={styles.header}>
      <div className="mx">
        <div className={styles.logo_container}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.contact}>
            <Link href={"/contacts"}>contacts</Link>
            <Link href={"/publications"}>publications</Link>
            <div className={styles.icon}>
              <FourSquare />
              <p>product and services</p>
            </div>
            <div className={styles.drop_container}>
              <div
                className={styles.drop}
                onClick={() => setDropDown((m) => !m)}
              >
                <p>EN</p>
                <DropArrow />
              </div>
              {dropDown && (
                <div className={styles.drop_down}>
                  <p>EN</p>
                </div>
              )}
            </div>
          </div>
          <div className={styles.contact_icon}>
            <FourSquare />
            <div
              className={styles.menubar}
              onClick={() => setDropDown((m) => !m)}
            >
              <MenuBar />
            </div>
          </div>
        </div>
        <div className={styles.search}>
          <Search />
          <input
            type="text"
            placeholder="Would you like to know morw? ask a question"
          />
        </div>
        <div className={styles.navbar}>
          <div className={styles.home}>
            <h4>Home</h4>
            <h5 onClick={() => setExplore(true)}>
              EXPLORE <span>+</span>
            </h5>
          </div>
          <div className={styles.investors}>
            <div className={styles.box}>
              <Stats />
              <p>Investors</p>
            </div>
            <div className={styles.box}>
              <Video />
              <p>Media</p>
            </div>
            <div className={styles.box}>
              <Work />
              <p>Careers</p>
            </div>
          </div>
        </div>
        {dropDown && (
          <div className={styles.side_navbar}>
            <div
              onClick={() => setDropDown((m) => !m)}
              className={styles.close}
            >
              X
            </div>
            <div className={styles.content}>
              <h4>Home</h4>
              <h5>investors</h5>
              <h5>media</h5>
              <h5>careers</h5>
              <span></span>
              <h6>contacts</h6>
              <h6>publication</h6>
              <span></span>
              <div className={styles.language}>
                <h5>EN</h5>
              </div>
            </div>
          </div>
        )}
        {explore && <Explore onClose={() => setExplore(false)} />}
      </div>
    </div>
  );
};

export default Header;
