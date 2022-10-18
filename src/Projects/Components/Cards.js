import React from 'react'
import "../Styles/Cards.css";

const Cards = ({imgSrc, title, price, Button}) => {
  return (
    <div className='card'>
        <img src={imgSrc} className="card__img" alt='' />
        <div className='div_head'>
        <p>{title}</p>
        <p>{price}</p>
        </div>
          <button className='card__btn'>{Button}</button>
    </div>
  )
}

export default Cards;