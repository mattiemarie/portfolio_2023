import React from 'react';
import { FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
// import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  return (
    <div>
      {/* Heading of Section -- Contact */}
      <div className='heading-container'>
        <h1>Contact Me</h1>
      </div> 

      {/* Contact Me Form */}
      <h3> CONNECT FORM SO THAT IT CAN SUBMIT TO YOUR! DELETE THIS WHEN DONE! </h3>
      <h2> If you have any questions or wish to get in touch send me a message! </h2>

      <div className= 'contact-container'>
        <form style={{ width: "60%", margin: "0 auto"}}>
          <FormControl id="name">
            <FormLabel className="contact-text">Name</FormLabel>
            <Input className="contact-input" type="text" style={{ width: "100%" }} />
          </FormControl>

          <FormControl id="email" mt={4}>
            <FormLabel className="contact-text">E-Mail Address</FormLabel>
            <Input className="contact-input" type="email" style={{ width: "100%" }} />
          </FormControl>

          <FormControl id="message" mt={4}>
            <FormLabel className="contact-text">Message</FormLabel>
            <Textarea className="contact-input" style={{ width: "100%" }} />
          </FormControl>

          <Button className="contact-button"type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
