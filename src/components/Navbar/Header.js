import React from "react";
import styles from "../../styles/Header.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";


const Header = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={styles.header}
          fixed="top"
        >
          <Container style={{ marginTop: "20px" }}>
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <img
                src="/image/logo.jpg"
                width={100}
                height={50}
                alt="LOGO"
                className={styles.logo}
              />
            </a>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className={styles.navItem}>
                   Home
                  </Nav.Link>
                  <Nav.Link href="#action2" className={styles.navItem}>
                   Overview
                  </Nav.Link>
                 
                  <Nav.Link href="#action6" className={styles.navItem}>
                    Amenities
                  </Nav.Link>
                  <Nav.Link href="/contact" className={styles.navItem}>
                    Pricing Details
                  </Nav.Link>
                  <Nav.Link href="/contact" className={styles.navItem}>
                   Location
                  </Nav.Link>
                  <Nav.Link href="/contact" className={styles.navItem}>
                    Virtual Tour
                  </Nav.Link>
                </Nav>
                <Button className={styles.contactBtn}>Contact</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
