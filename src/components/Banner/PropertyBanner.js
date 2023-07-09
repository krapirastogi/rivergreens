import React from "react";
import styles from "../../styles/Banner.module.css";


const PropertyBanner = () => {
  return (
    <>
      <div className={styles.bannerBox}>
        <img
          src="/image/unsplash_jTCLppdwSEc.png"
          width={900}
          height={700}
          alt="Banner"
          className={styles.img}
        />
        <div className={styles.propertyBannerTextBox}>
          <p className={styles.type}>Townships</p>
          <h1>
          A Mammoth-size Township for those Seeking a King-size Life
           of Pune East
          </h1>
          
          <p className={styles.propertyLocation}>
            Pune East <br />A Quaint Society in the Serene Wilderness <br /> 
          </p>
        </div>
      </div>
    </>
  );
};

export default PropertyBanner;
