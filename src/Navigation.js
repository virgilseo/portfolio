import React, {Component} from 'react';

class Navigation extends Component {

  render() {

    return(

      <nav className='nav-container'>
        <a href='#about' className='nav-link'>About</a>
        <a href='#projects' className='nav-link'>Projects</a>
        <a href='#contact' className='nav-link'>Contact</a>
      </nav>
    )
  }
}

export default Navigation
