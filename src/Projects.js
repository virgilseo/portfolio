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
              <div className='content-container'>
                <h4 className='project-title'>{project.title}</h4>
                <img src={project.image} alt={project.title} className='project-image'/>
                <p>{project.tag}</p>
              </div>
              <div className='button-container'>
                <button className='project-btn' onClick={() => this.props.flipProject(project.id)}>More details</button>
              </div>
            </div>
            <div className={project.flipped === true ? 'show' : 'hide'}>
              <div className='flip-content-container'>
                <i className='material-icons back-btn' onClick={() => this.props.flipProject(project.id)}>arrow_back</i>
                <p className='project-tags'>{project.description}</p>
              </div>
              <div className='links-container'>
                <a className='project-links' href={project.gitLink} target="_blank" rel='noopener noreferrer'>View Code</a>
                <a className='project-links' href={project.liveLink} target="_blank" rel='noopener noreferrer'>Live Page</a>
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
