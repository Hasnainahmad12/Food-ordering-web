import React from 'react'
import "../Styles/Users_Card.css";

const Users_Card = ({title, UserImg, heading}) => {
  return (
    <div className='users_card'>
        <p className='users__title'>{title}</p>
        <img src={UserImg} alt='' />
        <h2 className='users__heading'>{heading}</h2>
    </div>
  )
}

export default Users_Card