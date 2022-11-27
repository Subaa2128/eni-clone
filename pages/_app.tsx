import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
