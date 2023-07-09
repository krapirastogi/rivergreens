import React from "react";
import styles from "../../styles/Banner2.module.css";    


const Banner2 = () => {
  return (
    <div className={styles.Banner2} style={{ width: "100%" }}>
       <h2>LIVE A HEALTHY LIFESTYLE WITH SPORTING AMENITIES IN LUSH GREENERY</h2>
       <div className={styles.gridContainer}>
       <div className={styles.innerBox}>
       <img src="/image/unsplash_jTCLppdwSEc.png" alt="" />
       <p>Work from Garden </p>
      </div>
       <div className={styles.innerBox}>
        <img src="/image/unsplash_jTCLppdwSEc.png" alt="" />
        <p> Majestic Clubhouse </p>
      </div>
       <div className={styles.innerBox}>
       <img src="/image/unsplash_jTCLppdwSEc.png" alt="" />
       <p> Roof-top Features</p>
      </div>
       <p>Solar-powered Outdoor Work Spaces | 6500+ sq. mt. Space with 50+ Amenities | 1500 sq. mt. of Terrace with 15+ Facilities</p>
      </div>
    </div>
  );
};

export default Banner2;
