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
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
    <Navbar expand="lg" bg="dark" variant="dark" className = {scrolled ? "scrolled" : ""}>
    <Container>
          <Nav className="me-auto">
            <Nav.Link href="#about" className = {activeLink === 'bio' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('about')}>About Me</Nav.Link>
            <Nav.Link href="#skills" className = {activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#resume" className = {activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
            <Nav.Link href="#contact" className = {activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          {/* add icons for socials linkedin github
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </div>
            <button className="contactbtn" onClick={() => console.log ('connect')}><span>Submit</span></button>
          </span> */}

    </Container>
    </Navbar>
    );
}

export default NavBar;