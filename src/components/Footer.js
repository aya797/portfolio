import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/images/logo.png";
import linkedIn from "../assets/images/linkedIn.svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="icon">
              <a href="#"><img src={linkedIn} alt="linkedIn" /></a>
              <a href="#"><img src={facebook} alt="facebook" /></a>
              <a href="#"><img src={instagram} alt="instagram" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
