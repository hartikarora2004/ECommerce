import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo ">
              <div>
                <h1 className="text-white mb-3">ShopFusion</h1>
              </div>
            </div>
            <p className="footer__text mb-4">
            "Experience seamless shopping with our eCommerce platform. 
             Enjoy quality products, easy navigation, and secure transactions. 
             Shop confidently and find what you need to enhance your lifestyle."
            </p>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <i className="ri-map-pin-line"></i>
                  <p>Connaught Place, New Delhi, India </p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <i className="ri-phone-line"></i>
                  <p>+91 7217322301</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <i className="ri-mail-line"></i>
                  <p>shopfusion.support@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
             &copy;Copyright {year}. All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
