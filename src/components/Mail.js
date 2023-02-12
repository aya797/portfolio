import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Mail = ({ status, onValidated }) => {
  const [email, setEmail] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }


  return (
      <Col lg={12}>
        <div className="email wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>See My Projects At Once <br></br> & Leave Here Your Email Address.</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
            
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="submit-email">
                  <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
