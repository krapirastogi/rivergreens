import React from "react";
import styles from "../../styles/Table.module.css";
import Table from "react-bootstrap/Table";

const PropertyTable = () => {
  return (
    <>
      <div className={styles.tableBox}>
        <h2>Key takeaways</h2>
        {/* <Table striped bordered className={styles.innerTableBox}>
          <thead>
            <tr>
              <th>Bedrooms</th>
              <th>Built up area</th>
              <th>Number of floors</th>
              <th>Number of floors</th>
              <th>Number of units</th>
              <th>Unit types</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3 to 5</td>
              <td>6,400 to 30,000 sq. ft.</td>
              <td>17</td>
              <td>17</td>
              <td>Number of floors</td>
              <td>Unit types</td>
            </tr>
          </tbody>
        </Table> */}
        <div className={styles.innerTableBox}>
          <div className={styles.innerBoxH}>
            <p>Bedrooms</p>
            <p>Built up area</p>
            <p>Number of floors</p>
          </div>
          <div className={styles.innerBoxB}>
            <p>3 to 5</p>
            <p>6,400 to 30,000 sq. ft.</p>
            <p>17</p>
          </div>
          <div className={styles.innerBoxH}>
            <p>Number of floors</p>
            <p>Number of units</p>
            <p>Unit types</p>
          </div>
          <div className={styles.innerBoxB}>
            <p>17</p>
            <p>Number of floors</p>
            <p>Unit types</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyTable;
