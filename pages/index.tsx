import type { NextPage } from "next";
import Head from "next/head";
import BackgroundImage from "../components/BackgroundImage";
import styles from "../styles/Home.module.scss";
import Explore from "../public/assets/Header/images/explore demo.jpg";
const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BackgroundImage image={Explore}>ello</BackgroundImage>
      </main>
    </div>
  );
};

export default Home;
