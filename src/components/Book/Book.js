import React from 'react';
import './Book.css';

export default function Book(props) {

  return(
    <div id='flexContainer'>
      <div className='flexItem'>
        <img src={props.image} alt="book cover" />
      </div>
      <div className='flexItem'>
        <h3>{props.title}</h3>
        <h4>{props.author}</h4>
        <p>{props.desc}</p>
      </div>
      
    </div>
  )
  
}