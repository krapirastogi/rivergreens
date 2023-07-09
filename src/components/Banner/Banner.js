import React from "react";
import styles from "../../styles/Banner.module.css";

import {GiCancel} from "react-icons/gi"

const Banner = () => {
  return (
    <>
      <div className={styles.bannerBox}>
        <img
          src="/image/unsplash_jTCLppdwSEc.png"
          width={900}
          height={700}
          alt="Banner Image"
          className={styles.img}
        />
        <div className={styles.bannerTextBox}>
          <div style={{ width: "100%", height: "100%" }}>
            <h1 className={styles.heading}>Find best Real Estate Projects</h1>
            <p className={styles.headingText}>
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown.
            </p>
            <div className={styles.searchBox}>
              <div className={styles.firstInnerBox}>
                <input
                  type="text"
                  placeholder="Type Location, Project, Society or Keyword"
                />
              </div>
              <div className={styles.secondInnerBox}>
                <button className={styles.searchBtn}>search</button>
                <button className={styles.cnlBtn}><GiCancel fontSize={24} color="#949494" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.propertyBox}>
          <p className={styles.propertyHeading}>Discover your property in</p>
          <div className={styles.itemText}>
            <p>Mumbai</p>
            <p>Delhi</p>
            <p>Kolkata</p>
            <p>Goa</p>
            <p>Other</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
