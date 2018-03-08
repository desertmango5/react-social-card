import React, { Component } from 'react';
import '../styles/App.css';
import card from '../cardData';
import Card from './Card';
import headshot from '../self.jpg';
import sand from '../sand.jpg';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Card 
          logoURL={sand}
          headline={card.headline}
          name={card.name}
          creditImageURL={headshot}
          message={card.message}
          url={card.url}
          urlDisplayName={card.urlDisplayName}
        />
      </div>
    );
  }
}

export default App;
