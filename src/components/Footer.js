import React from 'react';
import { Icon } from '@chakra-ui/react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div>
      <h2 className='icon-text'>You can also find me here!</h2>
      <div className="icon-container">

        {/* Github Icon */}
        <a href="https://github.com/mattiemarie" target="_blank">
          <Icon  className='github-icon' as={GitHubIcon} />
        </a>
        {/* LinkedIn Icon */}
        <a href="" target="_blank">
          <Icon  className='linkedin-icon' as={LinkedInIcon} />
        </a>

        {/* Email Icon */}
        <a href="" target="_blank">
          <Icon  className='email-icon' as={EmailIcon} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
