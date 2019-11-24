import React, {Component} from 'react';
import './App.css';
import './responsive.css';
import Header from './Header.js';
import Footer from './Footer.js';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import Navigation from './Navigation';
import ProjectInfo from './ProjectInfo';

const projects = ProjectInfo

class App extends Component {

  //Set the initial state
  state = {
    projects: []
  }

  componentDidMount() {
    this.setState({projects: projects})
  }


  //Flip project container on user input

  flipProject = (projectId) => {
    let flippedProject = this.state.projects.filter((project) => project.id === projectId).map((project) =>
    project.flipped === false ? project.flipped = true : project.flipped = false)

    this.setState({projects: projects})
    return flippedProject
  }

  render() {

    return (
      <div className='App'>
        <Header />
        <Navigation />
        <About />
        <Projects
          projects={this.state.projects}
          flipProject={this.flipProject}
        />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
