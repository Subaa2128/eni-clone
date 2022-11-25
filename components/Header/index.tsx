import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import Explore from "./Explore";
import { GoGraph } from "react-icons/go";
import { FiVideo } from "react-icons/fi";
import { FaHardHat } from "react-icons/fa";
import Logo from "../../public/assets/Header/logo/logo.svg";
import DropArrow from "../../public/assets/Header/icons/drop-arrow.svg";
import FourSquare from "../../public/assets/Header/icons/four-square.svg";
import MenuBar from "../../public/assets/Header/icons/menu-bar.svg";
import Search from "../../public/assets/Header/icons/search.svg";
import Demo1 from "../../public/assets/Header/images/pro-service1.jpg";
import Demo2 from "../../public/assets/Header/images/pro-service2.jpg";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const [languageDeopdown, setLanguageDropdown] = useState(false);
  const [explore, setExplore] = useState(false);
  const [product, setProduct] = useState(false);
  return (
    <div className={styles.header}>
      <div className="mx">
        <div className={styles.logo_container}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div className={styles.contact}>
            <Link href={"/contact"}>contacts</Link>
            <Link href={"/publications"}>publications</Link>
            <div className={styles.icon} onClick={() => setProduct((m) => !m)}>
              <FourSquare />
              <p>product and services</p>
            </div>
            <div className={styles.drop_container}>
              <div
                className={styles.drop}
                onClick={() => setLanguageDropdown((m) => !m)}
              >
                <p>EN</p>
                <DropArrow />
              </div>
              {languageDeopdown && (
                <div className={styles.drop_down}>
                  <p>EN</p>
                </div>
              )}
            </div>
          </div>
          <div className={styles.contact_icon}>
            <div
              className={styles.menubar}
              onClick={() => setProduct((m) => !m)}
            >
              {" "}
              <FourSquare />
            </div>

            <div
              className={styles.menubar}
              onClick={() => setDropDown((m) => !m)}
            >
              <MenuBar />
            </div>
          </div>
        </div>
        {product && (
          <div className={styles.product_services}>
            <div className={styles.content}>
              <div className={styles.channel}>
                <div className={styles.image}>
                  <Image src={Demo1} alt="" />
                </div>
                <div className={styles.category}>
                  <span className={styles.dash}></span>
                  RETAIL
                </div>
                <h3>Eni for you</h3>
                <p>Our energy at your service.</p>
              </div>
              <div className={styles.channel}>
                <div className={styles.image}>
                  <Image src={Demo2} alt="" />
                </div>
                <div className={styles.category}>
                  <span className={styles.dash}></span>
                  BUSINESS
                </div>
                <h3>For your business</h3>
                <p>Energy solutions for large and small buisness.</p>
              </div>
            </div>
            <div className={styles.close}>
              <div className={styles.heading}>
                <h1>Products and Services</h1>
                <h1 onClick={() => setProduct(false)}>X</h1>
              </div>
              <div className={styles.detail}>
                <h2>enistation</h2>
                <h2>oil products</h2>
                <h2>enjoy</h2>
                <h2>multicard</h2>
                <h2>eni rewind</h2>
                <h2>versalis</h2>
              </div>
            </div>
          </div>
        )}
        <div className={styles.search}>
          <Search />
          <input
            type="text"
            placeholder="Would you like to know more? ask a question"
          />
        </div>
        <div className={styles.navbar}>
          <div className={styles.home}>
            <Link href="/">
              <p>Home</p>
            </Link>
            <div className={styles.linkBorderLeft}></div>
            <Link href="/aboutUs">Who We are</Link>
            <Link href="">Operation</Link>
            <Link href="/eniWorldWide">Eni worldwide</Link>
            <Link href="">Just Transition</Link>

            <h5 onClick={() => setExplore(true)}>
              EXPLORE <span>+</span>
            </h5>
          </div>
          <div className={styles.investors}>
            <div className={styles.box}>
              <GoGraph />
              <p>Investors</p>
            </div>
            <div className={styles.box}>
              <FiVideo />
              <p>Media</p>
            </div>
            <div className={styles.box}>
              <FaHardHat />
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
              <Link href={"/contact"}>contacts</Link>
              <Link href={"/publications"}>publications</Link>
              <span></span>
              <div className={styles.language}>
                <h6>EN</h6>
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
