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
    <section className="message">
      <h4 className="message__headline">
        {props.headline}
      </h4>
      <p className="message__body">{props.message}</p>
      <a href={props.url} className="message__url">
        {props.linkName}
      </a>
    </section>
  </div>
);

export default Card;
