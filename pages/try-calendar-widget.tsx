import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import React, { FC, useEffect, useState } from "react";

const CalendarWrapper: FC = () => {
  // This wrapper is to solve the hydration error
  // which wasn´t a hard error before React 18 and
  // is unrelated to the Bókun widget problem in this
  // application.
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

const CalendarPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Calendar Page</h1>
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
          TRY THE CALENDAR HERE ON THE CALENDAR PAGE.
          <br />
          YOU WILL SEE THAT IT FAILS HERE BUT NOT
          <br />
          ON THE INDEX PAGE.
        </div>
        <CalendarWrapper />
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

export default CalendarPage;