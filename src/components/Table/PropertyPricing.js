import React from "react";
import styles from "../../styles/Pricing.module.css";
import Table from "react-bootstrap/Table";

const PropertyPricing = () => {
  return (
    <>
      <div className={styles.pricingBox}>
        <h2 className={styles.heading}>Pricing</h2>
        <Table striped className={styles.table}>
          <thead>
            <tr>
              <th>Inventory Type</th>
              <th>Sizes</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Studio</td>
              <td>265-271 (sq.Ft)</td>
              <td>30.1-32.3 Lakhs</td>
            </tr>
            <tr>
              <td>1 BHK</td>
              <td>406-453 (sq.Ft)</td>
              <td>44.1-48.4 Lakhs</td>
            </tr>
            <tr>
              <td>2BHK</td>
              <td>617-624 (sq.Ft)</td>
              <td>62.8-69.1 Lakhs</td>
            </tr>
            <tr>
              <td>3BHK</td>
              <td>849-854 (sq.Ft)</td>
              <td>84.9-96.1 Lakhs</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default PropertyPricing;
