import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import getApi from "../utils/getApi";
import { css, cx } from "@emotion/css";
import store from "../configs/store";
import contentful from "../helpers/contentful";
import { LOAD_COURSES_ACTION } from "../actions";
import { useState } from "react";
import Link from "next/link";
import CardInfo from "../Component/CardInfo";

const Home = () => {
  return (
    <>
      <Head>
        <title> خانه </title>{" "}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.shadow}>
          <div className={styles.heading}>
            <div className={styles.title}>
              <div
                className={css`
                  padding: 20px;
                `}
              >
                <h4>آموزش پروژه محور برنامه نویسی </h4>
              </div>
              <div
                className={css`
                  padding: 20px;
                  font-size: 20px;
                  width: 50%;
                `}
              >
                <h4>پشتیبانی قدم به قدم | وبینار های رایگان </h4>
              </div>
              <div>
                <Link href={`/Courses`}>
                  <a>
                    <button className={styles.button}>همین الان شروع کن</button>
                  </a>
                </Link>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div>
        <CardInfo />
      </div>
    </>
  );
};

Home.getInitialProps = async ({ reduxStore }) => {
  // console.log("reduxStore", reduxStore);
  await reduxStore.dispatch(LOAD_COURSES_ACTION());
  const { courses } = reduxStore.getState();
  // console.log("courses", courses);

  return {
    courses,
  };
};

export default Home;
