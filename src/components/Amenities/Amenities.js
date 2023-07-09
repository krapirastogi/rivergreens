import React from "react";
import styles from "../../styles/Amenities.module.css";
import { FaRunning } from "react-icons/fa";

const Ameneties = () => {
  return (
    <>
      <div className={styles.amenetiesSection}>
        <h2>Amenities</h2>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </p>
        <div className={styles.amenetiesBox}>
          <div className={styles.innerBox}>
            <div>
              <FaRunning className={styles.icon} />
              <p className={styles.text}>Patio Lounge</p>
            </div>
          </div>
          <div className={styles.innerBox}>
            <div>
              <FaRunning className={styles.icon} />
              <p className={styles.text}>Youth Katta (Deck)</p>
            </div>
          </div>
          <div className={styles.innerBox}>
            <div>
              <FaRunning className={styles.icon} />
              <p className={styles.text}>Outdoor Crossfit Area</p>
            </div>
          </div>
          <div className={styles.innerBox}>
            <div>
              <FaRunning className={styles.icon} />
              <p className={styles.text}>Sky Cinema</p>
            </div>
          </div>
          <div className={styles.innerBox}>
            <div>
              <FaRunning className={styles.icon} />
              <p className={styles.text}>Pool Cabanas</p>
            </div>
          </div>
          <div className={styles.innerBox}>
            <div>
              <FaRunning className={styles.icon} />
              <p className={styles.text}>Squash Court</p>
            </div>
          </div>
          <div className={styles.innerBox}>
            <div>
              <FaRunning className={styles.icon} />
              <p className={styles.text}>HealthCare Centre</p>
            </div>
          </div>
          <div className={styles.innerBox}>
            <div>
              <FaRunning className={styles.icon} />
              <p className={styles.text}>Lounge Pool</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ameneties;
