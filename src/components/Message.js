import React from 'react';

const Message = props => (
  <section className="message">
    <h4 className="message__headline">
      {props.title}
    </h4>
    <p className="message__body"> 
      {props.message}
    </p>
    <a href={props.url} className="message__url">
      {props.urlDisplayName}
    </a>
  </section>
);

export default Message;
