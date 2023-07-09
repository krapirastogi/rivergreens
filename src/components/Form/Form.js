import React from "react";
import styles from "../../styles/Form.module.css";

const Form = () => {
  return (
    <>
      <div className={styles.formSection}>
        <h2>Let Talk</h2>
        <div className={styles.formBox}>
          <div className={styles.innerBox}>
            <form>
              <div className={styles.inputBox}>
                <p>Name</p>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className={styles.inputBox}>
                <p>Phone</p>
                <input type="text" placeholder="Enter Your Number" />
              </div>
              <div className={styles.inputBox}>
                <p>Email</p>
                <input type="text" placeholder="Enter your Email" />
              </div>
              <div className={styles.inputBox}>
                <p>Message</p>
                <textarea
                  placeholder="Write your message"
                  className={styles.textarea}
                />
              </div>
              <div className={styles.btnBox}>
                <button>Submit</button>
              </div>
            </form>
          </div>
          <div className={styles.innerBox}>
            <h3>About Godrej Rivergreens</h3>
            <p>
            Godrej Rivergreens - Homes for Green and Leisurely LifeThe realty markets of India have shown
exponential growth in the past few decades. One of the major rises was provided by the suburban
market that has started dwelling around all the major cities of India. One of the major markets
among all the major cities in the city of Pune. This city has been one of the most enriching markets in
the Indian Subcontinent. With regular developments and a rise in demand for various employment
opportunities.
               <br />{" "}
              <br />
              All the major central areas have become crowded.
This led the developers to push their developments toward suburban areas. Especially the
residential developments have become a part of these areas in the past few years. Although the
whole area has some good projects, that area is already in development. One of the most sought
after properties in the area is the one that is being built by Godrej Properties. One of the most
talked-about upcoming projects of this group is Godrej Rivergreens Manjari.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
