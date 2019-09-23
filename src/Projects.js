import React, {Component} from 'react';

class Projects extends Component {

  render() {

    return(

      <section id='projects'>
        <h3>Projects</h3>
        <ul>
        {this.props.projects.map((project) => (
          <li key={project.id} className='project'>
            <div className='project-front'>
              <h4>{project.title}</h4>
              <i>happy</i>
              <p>{project.tag}</p>
            </div>
            <div className='project-back'>
              <p>{project.description}</p>
              <a href={project.gitLink}>View Code</a>
              <a href={project.liveLink}>Live Page</a>
            </div>
          </li>
        ))}
        </ul>
      </section>
    )
  }
}

export default Projects
