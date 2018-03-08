import React, { Component } from 'react';
import '../styles/App.css';
import Card from './Card';
import headshot from '../self.jpg';
import sand from '../sand.jpg';



class App extends Component {
  render() {
    const headline = 'Learning React? Start Small.';
    const name = 'Michael Manges';
    const message = "Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps.";
    const url = 'https://michaelmanges.com';
    const linkName = 'michaelmanges.com';

    return (
      <div className="App">
        <Card 
          logoURL={sand}
          headline={headline}
          name={name}
          creditImageURL={headshot}
          message={message}
          url={url}
          linkName={linkName}
        />
      </div>
    );
  }
}

export default App;
