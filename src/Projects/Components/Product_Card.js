import React from 'react'
import "../Styles/Product_Card.css";

const Product_Card = ({img, title, price, Button}) => {
  return (
    <div className='product__card'>
        <img src={img} className="img" alt='' />
        <div className='main__title'>
        <h2>{title}</h2>
        <p>{price}</p>
        </div>
        <button className='main__button'>{Button}</button>
    </div>
  )
}

export default Product_Card