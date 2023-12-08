import React from 'react';

export default function Fortune(props) {
 return (

  <div className={`fortune--display ${props.showFortune ? 'show' : ''}`}>
   <div className="triangle-container">
    <div className="answer">{props.getAnswer}</div>

   </div>

  </div>

 );
}
