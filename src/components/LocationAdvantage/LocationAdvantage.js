import React from "react";
import styles from "../../styles/LocationAdvantage.module.css";
import { ImLocation } from "react-icons/im";

const LocationAdvantage = () => {
  return (
    <div className={styles.locationAdvantage} style={{ width: "100%" }}>
       <h2>Location Advantage</h2>
       <div className={styles.gridContainer}>
       <div className={styles.innerBox}>
        <p>
          <ImLocation className={styles.icon} />
          <br />
          Holy Angels School - 1 Km
        </p>
      </div>
       <div className={styles.innerBox}>
        <p>
          <ImLocation className={styles.icon} />
          <br />
          Lexicon International School - 5 Kms
        </p>
      </div>
       <div className={styles.innerBox}>
        <p>
          <ImLocation className={styles.icon} />
           <br />
          Zensar - 6.5 Kms
        </p>
      </div>
       <div className={styles.innerBox}>
        <p>
          <ImLocation className={styles.icon} />
          <br/>
          Lifeline Hospital - 6.5 Kms
        </p>
      </div>
       <div className={styles.innerBox}>
        <p>
          <ImLocation className={styles.icon} />
          <br />
          Phoenix Mall - 8 Kms
        </p>
      </div>
       <div className={styles.innerBox}>
        <p>
          <ImLocation className={styles.icon} />
          <br />
          Pune International Airport - 10 Kms
        </p>
      </div>
      </div>
    </div>
  );
};

export default LocationAdvantage;
