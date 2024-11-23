import { Component } from 'react';
import Title from './components/Description';
import Description from './components/Description';

class App extends Component {
  render() {
    return (
      <>
        <Title title={"App title"} rating={5}/>
        <Description/>
      </>
    );
  }
}

export default App;