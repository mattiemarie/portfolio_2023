import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar'
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

// import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </ChakraProvider>
  )
};

export default App;