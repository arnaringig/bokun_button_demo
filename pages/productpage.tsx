import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const ProductPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Product Page</h1>
        <div
          style={{
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            width: "500px",
            backgroundColor: "lightgreen",
          }}
        >
          <button
            className="bokunButton"
            //id="bokun_cab0f5b1_b4ed_4043_9a31_6658ff7c332d" only for button style
            data-src="https://widgets.bokun.io/online-sales/011d63dd-940e-48b9-84b2-60140fa46dac/experience/689777?partialView=1"
            data-testid="widget-book-button"
          >
            <p>Book my tour with Bókun</p>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default ProductPage;
