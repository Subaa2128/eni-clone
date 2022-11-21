import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import FooterLogo from "../../public/assets/Footer/logo/logo-eni-footer.png";
import Link from "next/link";
import Twitter from "../../public/assets/Footer/icons/twitter.svg";
import Youtube from "../../public/assets/Footer/icons/youtube.svg";
import Linkedin from "../../public/assets/Footer/icons/linkedin.svg";
import Instagram from "../../public/assets/Footer/icons/instagram.svg";
import FaceBook from "../../public/assets/Footer/icons/facebook.svg";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className="mx">
        <div className={styles.footerWrapper}>
          <div className={styles.leftBorder}></div>
          <div className={styles.footerOneContent}>
            <div className={styles.firstSet}>
              <div className={styles.logoImg}>
                <Image src={FooterLogo} alt="" width={34} height={45} />
              </div>
              <p>
                We are an energy company. We concretely support a just energy
                transition, with the objective of preserving our planet and
                promoting an efficient and sustainable access to energy for all.
                Our work is based on passion and innovation, on our unique
                strengths and skills, on the equal dignity of each person,
                recognizing diversity as a key value for human development, on
                the responsibility, integrity and transparency of our actions.
                We believe in the value of long term partnerships with the
                countries and communities where we operate, bringing
                long-lasting prosperity for all.
              </p>
              <Link href="">
                <h5>Find out more</h5>
              </Link>
            </div>
            <div className={styles.footerOneContentPara}>
              <h5>Registered Head Office</h5>
              <p>Piazzale Enrico Mattei,1 00144 Rome, Italy</p>
            </div>
            <div className={styles.footerOneContentPara}>
              <h5>Branches</h5>
              <p>
                Via Emilia, 1 and Piazza Ezio Vanoni, 1 20097 San Donato
                Milanese, Milan, Italy
              </p>
            </div>
            <div className={styles.footerOneContentPara}>
              <h5>Company Share Capital</h5>
              <p>€ 4.005.358.876,00 paid up</p>
            </div>
            <div className={styles.footerOneContentPara}>
              <h5>Rome Company Register</h5>
              <p>00484960588</p>
            </div>
            <div className={styles.footerOneContentPara}>
              <h5>Tax Identification Number</h5>
              <p>VAT Number 00905811006</p>
            </div>
          </div>
          <div>
            <div className={styles.footerSecondContent}>
              <h4>ENI ON SOCIAL MEDIA</h4>
              <div className={styles.socialMedia}>
                <Link href="">
                  <Twitter />
                </Link>
                <Link href="">
                  <Youtube />
                </Link>
                <Link href="">
                  <Linkedin />
                </Link>
                <Link href="">
                  <Instagram />
                </Link>
                <Link href="">
                  <FaceBook />
                </Link>
              </div>
            </div>
            <div className={styles.policy}>
              <h4>POLICIES</h4>
              <div className={styles.terms}>
                <Link href="">
                  <p>Terms and Conditions</p>
                </Link>
                <Link href="">
                  <p>Privacy policy</p>
                </Link>
                <Link href="">
                  <p>Cookie policy</p>
                </Link>
                <Link href="">
                  <p>Info Reserved Area</p>
                </Link>
              </div>
            </div>
            <div className={styles.otherLinks}>
              <h4>OTHER LINKS</h4>
              <div className={styles.calendar}>
                <Link href="">
                  <p>Calendar</p>
                </Link>
                <Link href="">
                  <p>Contact us</p>
                </Link>
                <Link href="">
                  <p>Remit</p>
                </Link>
                <Link href="">
                  <p>Newsletter</p>
                </Link>
                <Link href="">
                  <p>eniSpace</p>
                </Link>
                <Link href="">
                  <p>Modern Slavery Statement</p>
                </Link>
                <Link href="">
                  <p> Scams and Phishing</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
