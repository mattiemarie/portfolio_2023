import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="row">
          <div className="col-lg-6">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          <div className="col-lg-6">
            <h3>Get in touch</h3>
            <p>If you have any questions or would like to work together on a project, please get in touch using the form or the contact details below.</p>
            <ul className="list-unstyled">
              <li><i className="fas fa-envelope"></i> email@example.com</li>
              <li><i className="fas fa-phone"></i> 123-456-7890</li>
              <li><i className="fas fa-map-marker-alt"></i> City, State, Country</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
