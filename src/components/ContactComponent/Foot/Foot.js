import React from "react";
import styles from "./Footer.module.css";
import { Container, Col, Row } from "react-bootstrap";
import BackgroundLogo from "../../../Assets/newfooterlogo.png";
import envelope from "../../../Assets/envelope.png";
import whatsapp from "../../../Assets/whatsapp.png";
import linkedin from "../../../Assets/linkdn.png";
import twitter from "../../../Assets/twitter.png";

const Footer = () => {
  return (
    <Container className={styles.container}>
      <Row>
        {/* <Col className={styles.form_container}>
          <div
            className={`border mx-auto p-4 ${styles.form_background}`}
            style={{ width: "fit-content" }}
          >
            <form action="" className="border">
              <input type="text" className={styles.input_layout} />
              <button className={styles.sub_btn}>subscribe</button>
            </form>
          </div>
        </Col> */}
      </Row>
      <div className={styles.footer_contents}>
        <div className={styles.first_list}>
          <img src={BackgroundLogo} alt="" className={styles.background_logo} />
          <ul style={{ color: "white" }}>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div>
          <div className={styles.second_list}>
            <ul style={{ color: "white" }}>
              <li>Home</li>
              <li>Contact Us</li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.third_list}>
            <img src={envelope} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={whatsapp} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
