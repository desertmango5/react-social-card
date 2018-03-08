import React from 'react';
import Logo from './Logo'
import Headline from './Headline'
import CreditBox from './CreditBox'

const Card = props => (
  <div className="card">
    <section className="main">
      <Logo logo={props.logoURL} />
      <Headline headline={props.headline} />
      <CreditBox 
        name={props.name}  
        creditImageURL={props.creditImageURL}  
      />
    </section>
  </div>
);

export default Card;
