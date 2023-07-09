import React from "react";
import styles from "../../styles/VirtualTour.module.css";

import { MdOutlineSlowMotionVideo } from "react-icons/md";

const VirtualTour = () => {
  return (
    <>
      <div className={styles.virtualBox}>
        <img
          src="/image/unsplash_jTCLppdwSEc.png"
          width={1000}
          height={500}
          alt="virtualImg"
          className={styles.virtualImg}
        />
        <div className={styles.virtualInnerBox}>
          <div>
            <MdOutlineSlowMotionVideo className={styles.icon} />
            <h2>Virtul Tour</h2>
            <p>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualTour;
