import React, { Component } from 'react';

import CV from './components/task1/CV';
import Education from './components/task1/Education';
import Experience from './components/task1/Experience';
import Skills from './components/task1/Skills';
class App extends Component {
  render() {
    return (
      <div className="products">
        <CV/>
         <Education/>
          <Experience/>
          <Skills/>
      </div>
    );
  }
}

export default App;
