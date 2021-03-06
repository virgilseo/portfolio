import React, {Component} from 'react';
import LinkedinLogo from './Logo/LI-Logo.png';
import GithubLogo from './Logo/GitHub-Logo-White.png';
import GitLabLogo from './Logo/gitlab-icon-rgb.png';

class Contact extends Component {

  render() {

    return(

      <section id='contact'>
        <div className='contact-container'>
          <h4 className='contact-tag'>Get in touch</h4>
          <div className='linkedin-container'>
            <img src={LinkedinLogo} alt='Linkedin-profile' className='social-logo'/>
            <a href='https://www.linkedin.com/in/virgil-avram/' className='logo-links' target="_blank" rel='noopener noreferrer'>Go to Linkedin</a>
          </div>
          <div className='git-container'>
            <img src={GithubLogo} alt='Github-profile' className='social-logo'/>
            <a href='https://github.com/virgilseo' className='logo-links' target="_blank" rel='noopener noreferrer'>Go to GitHub</a>
          </div>
          <div className='git-container'>
            <img src={GitLabLogo} alt='Github-profile' className='social-logo lab-logo'/>
            <a href='https://gitlab.com/virgilavram.dev' className='logo-links' target="_blank" rel='noopener noreferrer'>Go to GitLab</a>
          </div>
          <div className='email-container'>
            <i className='material-icons email-icon'>email</i>
            <a href='mailto:virgilavram.dev@gmail.com' className='email-text'>virgilavram.dev@gmail.com</a>
          </div>
          <div className='location-container'>
            <i className='material-icons location-icon'>place</i>
            <span className='location-text'>Leeuwarden, Netherlands</span>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
