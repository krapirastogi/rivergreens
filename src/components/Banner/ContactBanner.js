import React from "react";
import styles from "../../styles/contact.module.css";


const ContactBanner = () => {
  return (
    <>
      <div className={styles.bannerBox}>
        <Image
          src="/image/unsplash_jTCLppdwSEc.png"
          width={900}
          height={700}
          alt="Banner Image"
          className={styles.img}
        />
        <div className={styles.bannerTextBox}>
          <h1 className={styles.heading}>Contact us</h1>
        </div>
      </div>
    </>
  );
};

export default ContactBanner;
