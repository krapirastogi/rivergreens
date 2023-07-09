import React from "react";
import styles from "../../styles/Map.module.css";
import { ImLocation } from "react-icons/im";

const Map = () => {
  return (
    <div className={styles.mapSection}>
      <div className={styles.innerBox}>
        <h3>Location Map</h3>
        <p>
          <ImLocation className={styles.icon} />
          Godrej Rivergreens, Pune East
        </p>
      </div>
      <div className={styles.innerBox}>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15131.168990609374!2d73.9626047554199!3d18.5382881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c333cd0b4b5b%3A0xe54fa35a5b8fa711!2sGodrej%20Boulevard%20at%20%23RiverGreens%2C%20Pune!5e0!3m2!1sen!2sin!4v1688895328384!5m2!1sen!2sin"
          width={800}
          height={500}
         
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
