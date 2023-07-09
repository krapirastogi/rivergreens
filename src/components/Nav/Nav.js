import React from "react";
import styles from "../../styles/Nav.module.css";

const Nav = () => {
  return (
    <>
      <div className={styles.navBox}>
        <p>
          <span>Home &nbsp; | &nbsp; </span>
          <span> Property &nbsp; | &nbsp; </span>
          <span> Blog &nbsp; | &nbsp; </span>
          <span> Developer &nbsp; | &nbsp; </span>
          <span> About us &nbsp; | &nbsp; </span>
          <span> Areas</span>
        </p>
      </div>
    </>
  );
};

export default Nav;
