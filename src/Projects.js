import React, {Component} from 'react';

class Projects extends Component {

  render() {

    return(

      <section id='projects'>
        <h3 className='section-title'>Projects</h3>
        <ul>
        {this.props.projects.map((project) => (
          <li key={project.id} className={project.flipped === true ? 'project project-flipped' : 'project project-flipped-back'}>
            <div className={project.flipped === false  ? '' : 'hide'}>
              <h4 className='project-title'>{project.title}</h4>
              <img src={project.image} alt={project.title} className='project-image'/>
              <p>{project.tag}</p>
              <button className='project-btn' onClick={() => this.props.flipProject(project.id)}>More details</button>
            </div>
            <div className={project.flipped === true ? 'show' : 'hide'}>
              <i className='material-icons back-btn' onClick={() => this.props.flipProject(project.id)}>arrow_back</i>
              <p>{project.description}</p>
              <div className='links-container'>
                <a className='project-links' href={project.gitLink}>View Code</a>
                <a className='project-links' href={project.liveLink}>Live Page</a>
              </div>
            </div>
          </li>
        ))}
        </ul>
      </section>
    )
  }
}

export default Projects
