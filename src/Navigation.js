import React, {Component} from 'react';

class Navigation extends Component {

  render() {

    return(

      <nav className='nav-container'>
        <div className='inner-nav'>
          <a href='#about' className='nav-link'>About</a>
          <a href='#projects' className='nav-link'>Projects</a>
          <a href='#contact' className='nav-link'>Contact</a>
        </div>
      </nav>
    )
  }
}

export default Navigation
