import React, { Component } from 'react';
import '../styles/App.css';
import Card from './Card';
import headshot from '../self.jpg';
import sand from '../sand.jpg';



class App extends Component {
  render() {
    const headline = 'Learning React? Start Small.';
    const name = 'Michael Manges';

    return (
      <div className="App">
        <Card 
          logoURL={sand}
          headline={headline}
          name={name}
          creditImageURL={headshot}
        />
      </div>
    );
  }
}

export default App;
