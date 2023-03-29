import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export const NavBar = () => {
    const {activeLink, setActiveLink} = useState('home');
    const{scrolled, setScrolled} = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar expand="lg" bg="dark" variant="dark" className = {scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
            <Nav.Link href="#bio" className = {activeLink === 'bio' ? 'active navbar-link' : 'navbar-link'}>Bio</Nav.Link>
            <Nav.Link href="#skills" className = {activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Features</Nav.Link>
            <Nav.Link href="#projects"className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Pricing</Nav.Link>
            <Nav.Link href="#resume" className = {activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}>Resume</Nav.Link>
            <Nav.Link href="#contact" className = {activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={} alt=""/></a>
                <a href="#"><img src={} alt=""/></a>
                <a href="#"><img src={} alt=""/></a>
            </div>
            <button className="contactbtn" onClick={() => console.log ('connect')}><span>Submit</span></button>
          </span>
        </Container>
      </Navbar>
    );
}

export default NavBar;