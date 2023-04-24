import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <img className="card-img-top" src="project-image.jpg" alt="Project Image" />
              <div className="card-body">
                <h4 className="card-title">Project Title</h4>
                <p className="card-text">Description of the project and its features.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img className="card-img-top" src="project-image.jpg" alt="Project Image" />
              <div className="card-body">
                <h4 className="card-title">Project Title</h4>
                <p className="card-text">Description of the project and its features.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img className="card-img-top" src="project-image.jpg" alt="Project Image" />
              <div className="card-body">
                <h4 className="card-title">Project Title</h4>
                <p className="card-text">Description of the project and its features.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
