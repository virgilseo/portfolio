import React, {Component} from 'react';

class Projects extends Component {

  render() {

    return(

      <section id='projects'>
        <h3>Projects</h3>
        <ul>
        {this.props.projects.map((project) => (
          <li key={project.id} className={project.flipped === true ? 'project project-flipped' : 'project project-flipped-back'}>
            <div className={project.flipped === false  ? '' : 'hide'}>
              <h4>{project.title}</h4>
              <i>happy</i>
              <p>{project.tag}</p>
              <button onClick={() => this.props.flipProject(project.id)}>More details</button>
            </div>
            <div className={project.flipped === true ? 'show' : 'hide'}>
              <button onClick={() => this.props.flipProject(project.id)}>Back</button>
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
