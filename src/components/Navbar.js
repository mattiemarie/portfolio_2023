import React from 'react';
import { Flex, Box, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className='container'>
    <Flex className='navbar-container' p={4}>
      <Box>
        <Heading className='navbar-name'size="md">Mattie Marie</Heading>
      </Box>
      <Spacer />
      <Box display="flex" alignItems="center">
        <Link to="About" smooth={true} duration={500}>
          <Button className='nav-btn'>About</Button>
        </Link>
        <Link to="Experience" smooth={true} duration={500}>
          <Button className='nav-btn'>Experience</Button>
        </Link>
        <Link to="Skills" smooth={true} duration={500}>
          <Button className='nav-btn'>Skills</Button>
        </Link>
        <Link to="Projects" smooth={true} duration={500}>
          <Button className='nav-btn'>Projects</Button>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
          <Button className='nav-btn'>Contact</Button>
        </Link>
      </Box>
    </Flex>
    </div>
  );
}

export default Navbar;
