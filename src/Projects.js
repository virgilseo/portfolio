import React, {Component} from 'react';

class Projects extends Component {

  render() {

    return(

      <section id='projects'>
        <h3 className='section-title'>Projects</h3>
        <ul>
        {this.props.projects.map((project) => (
          <li data-aos="fade-up" data-aos-duration="1300" key={project.id} className='project'>
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
            <div className={project.flipped === true ? '' : 'hide'}>
              <div className='flip-content-container'>
                <i className='material-icons back-btn'
                   onClick={() => this.props.flipProject(project.id)}
                   onKeyPress={() => this.props.flipProject(project.id)}
                   tabindex='0'>arrow_back</i>
                <div className='skill-container'>
                {project.description.map((skill, index) => (
                  <span key={index} className='project-tags'>{skill}</span>
                ))}
                </div>
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
