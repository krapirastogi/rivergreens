import React from "react";
import styles from "../../styles/ReadMore.module.css";

const Overview = () => {
  return (
    <>
      <div className={styles.readmoreBox} style={{ width: "100%" }}>
        <h2>Overview</h2>
        <p style={{ width: "85%", margin: "auto" }}>
        Established in 1897, the Multinational conglomerate, Godrej Group is a household name and
Godrej Properties has also made its name in the realm of housing developments now. The
developments are known for the dominating tranquility in the ethos of the premises. 
          <br />
          <br />
          Godrej
Rivergreens too has a broad range of amenities like a flower garden sit-out, amphitheatre,
sky cafeteria, Vitamin D deck, archery, gymnastics, library, digital gaming room, etc. The
other noteworthy fact is the location in Kharadi-Manjari which is easily accessible from
nearby areas while being pollution-free.
          <br />
          <br />
         
        </p>
      </div>
    </>
  );
};

export default Overview;
