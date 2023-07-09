import React from "react";
import styles from "../../styles/ReadMore.module.css";

const PropertyDeveloper = () => {
  return (
    <>
      <div className={styles.readmoreBox} style={{ width: "100%" }}>
        <h2>About Developer</h2>
        <p style={{ width: "85%", margin: "auto" }}>
        The Godrej Group comprises a varied business portfolio that includes real estate
development, fast moving consumer goods, advanced engineering, home appliances,
furniture, security &amp; agri-care. While a large number of our businesses are privately held,
          <br />
          <br />
          The
combined market cap of our publicly listed entities is in excess of USD 15 billion. Ranked as
the 2nd most trusted Indian brand, with an annual revenue of USD 5 billion, and an
estimated 1.1 billion customers across the world that use one or another Godrej product
every day, the Godrej Group is amongst India&amp;#39;s most diversified and trusted
conglomerates.
          <br />
          <br />
         
        </p>
      </div>
    </>
  );
};

export default PropertyDeveloper;
