import React from 'react';

const CreditBox = props => (
     <div className="credit-box">
      <p className="credit-box__name">{props.name}</p>
      <img src={props.creditImageURL} alt="person" className="credit-box__headshot" />
    </div>
);

export default CreditBox;
