
import logo from '../assets/images/logo.png';
import linkedIn from '../assets/images/linkedIn.svg';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import { Navbar, Nav, Container } from "react-bootstrap";


import { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {

  const [scroll, setScroll] = useState(false);
  const [link, setLink] = useState('home');

  const Update = (val) => {
    setLink(val);
  }

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 30) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  })


  
  return (
    <Router>
      <Navbar expand="md" className={scroll ? "scroll" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={link == 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => Update('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={link == 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => Update('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={link == 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => Update('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-connect">
              <div className="icon">
                <a href="#"><img src={linkedIn} alt="linkedIn" /></a>
                <a href="#"><img src={facebook} alt="facebook" /></a>
                <a href="#"><img src={instagram} alt="instagram" /></a>
              </div>
              <HashLink to='#connect'>
                <button>Let’s Connect</button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
