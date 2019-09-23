import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import Navigation from './Navigation';
import ProjectInfo from './ProjectInfo';

const projects = ProjectInfo

class App extends Component {

  state = {
    projects: []
  }

  componentDidMount() {
    this.setState({projects: projects})
  }

  render() {

    return (
      <div className='App'>
        <Header />
        <Navigation />
        <About />
        <Projects projects={this.state.projects} />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
