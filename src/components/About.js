import React from 'react';
import { Image } from '@chakra-ui/react'

import aboutimage from '../components/images/aboutimage.jpg';

function About() {
  return (
    <div>
    {/* Heading of Section -- About Me */}
      <div className='heading-container'>
        <h1>About Me</h1>
      </div>

      {/* Image of Me */}
        <div className='about-image-container'>
        <Image className='about-image'
            src={aboutimage}
            alt='About Me Image'
            borderRadius='lg'
          />
        </div>

      {/* About Me text */}
      <div className='about-text'>
        <h2>Hey there, I'm Mattie! I have a Bachelor's degree in Studio Art from UCF. I recently completed a 3-month full-stack coding bootcamp at UCF, which was a challenging but rewarding experience. I learned a lot about coding and programming and enjoyed the process of developing my skills in this area. In my free time I love to crochet, skateboarding, and playing guitar. Oveall,I'm a friendly and sweet person who is driven by my passions and loves to make the most of every opportunity that comes my way. I'm excited to see where my creativity and skills take me next!</h2>
      </div>
    
        
    </div>
  );
}

export default About;
