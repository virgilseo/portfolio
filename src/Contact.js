import React, {Component} from 'react';
import LinkedinLogo from './Logo/LI-Logo.png';
import GithubLogo from './Logo/GitHub-Logo-White.png';

class Contact extends Component {

  render() {

    return(

      <section id='contact'>
        <h3 className='section-title'>Contact</h3>
        <div className='contact-container'>
          <div className='linkedin-container'>
            <img src={LinkedinLogo} alt='Linkedin-profile' className='social-logo'/>
            <a href='https://www.linkedin.com/in/virgil-avram/' className='logo-links' target="_blank" rel='noopener noreferrer'>View profile</a>
          </div>
          <div className='git-container'>
            <img src={GithubLogo} alt='Github-profile' className='social-logo'/>
            <a href='https://github.com/virgilseo' className='logo-links' target="_blank" rel='noopener noreferrer'>View profile</a>
          </div>
          <div className='email-container'>
            <i className='material-icons email-icon'>email</i>
            <a href='mailto:virgilavram.dev@gmail.com' className='email-text'>virgilavram.dev@gmail.com</a>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
