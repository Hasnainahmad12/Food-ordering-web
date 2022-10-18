import React from 'react'
import "../Styles/Users.css";

import pic from "../Images/hasnain1.JPG";
import pic1 from "../Images/hasnain.jpg";
import pic2 from "../Images/hasnain2.jpg";

import UsersCard from './Users_Card';

const user = [
    { title : "hey i am hasnain bangash this is awesome website" , pic : pic, heading: "Hasanin bangash"},
    { title : "hey i am Aurangzeb Bangash your website is amazing. I really Like your website." , pic : pic1, heading: "Aurangzeb Bangash"},
    { title : "hey i am hasnain bangash this is awesome website" , pic : pic2, heading: "Hasanin bangash"},
]

const Users = () => {
  return (
    <div>
        <br />
        <br />
        <h2 className='users'>CUSTOMER <span>REVIEWS</span></h2>
        <br />
        <br />

        <section className='card__users'>
        {user.map((it) =>{
            return <UsersCard title={it.title} UserImg={it.pic} heading={it.heading}/>
        })}
        </section>
    </div>
  )
}

export default Users;