import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

const CalendarWrapper: FC = () => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <div
      style={{ width: "40vw" }}
      className="bokunWidget"
      data-src="https://widgets.bokun.io/online-sales/011d63dd-940e-48b9-84b2-60140fa46dac/experience-calendar/690816"
    ></div>
  );
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

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
          <div
            style={{
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50px",
              padding: "4px",
              width: "200px",
              marginBottom: "20px",
              backgroundColor: "yellow",
            }}
          >
            <Link href="/productpage">Go to ProductPage.</Link>
          </div>

          <button
            className="bokunButton"
            //id="bokun_cab0f5b1_b4ed_4043_9a31_6658ff7c332d" only for button style
            data-src="https://widgets.bokun.io/online-sales/011d63dd-940e-48b9-84b2-60140fa46dac/experience/689777?partialView=1"
            data-testid="widget-book-button"
          >
            <p>Book my tour with B??kun</p>
          </button>
        </div>
        <div
          style={{
            display: "flex",

            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "200px",
            padding: "20px",
            margin: "20px",
            borderRadius: "6px",
            backgroundColor: "orange",
          }}
        >
          TRY THE CALENDAR HERE ON THE INDEX PAGE.
          <br />
          YOU WILL SEE THAT IT WORKS HERE BUT NOT
          <br />
          WHEN YOU NAVIGATE TO A SUBROUTE.
          <div
            style={{
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50px",
              padding: "4px",
              width: "200px",
              marginBottom: "20px",

              backgroundColor: "yellow",
            }}
          >
            <Link href="/try-calendar-widget">Go to Calendar subpage.</Link>
          </div>
        </div>
        <CalendarWrapper />
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
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

export default Home;
