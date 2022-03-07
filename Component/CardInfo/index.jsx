import React from "react";
import styles from "./CardInfo.module.css";
import H4 from "../Typography/H4";
import H3 from "../Typography/H3";

const CardInfo = () => {
  return (
    <div className={styles.contaner}>
      <div className={styles.shadows}>
        <div className={styles.title}>
          <H3>خدمات ما</H3>
        </div>
        <div className={styles.content}>
          {" "}
          <div className={`${styles.main} ${styles.class_1}`}>
            <div className={styles.heading}>
              <img src="MyService.png" alt="MyService.png" />
              <H4>طراحی سایت</H4>
            </div>
            <div className={styles.body}>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که
              </p>
            </div>
          </div>
          <div className={`${styles.main} ${styles.class_2}`}>
            <div className={styles.heading}>
              <img src="MyService.png" alt="MyService.png" />
              <H4>طراحی سایت</H4>
            </div>
            <div className={styles.body}>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که
              </p>
            </div>
          </div>
          <div className={`${styles.main} ${styles.class_3} `}>
            <div className={styles.heading}>
              <img src="MyService.png" alt="MyService.png" />
              <H4>طراحی سایت</H4>
            </div>
            <div className={styles.body}>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
