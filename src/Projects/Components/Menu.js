import React from 'react'
import "../Styles/Menu.css";

import piza from "../Images/burger.jpg";
import piza1 from "../Images/pizaa3.jpg";
import piza2 from "../Images/pizaa1.jpg";
import piza3 from "../Images/burger2.jpg";

//import img from "./Images/fast1.jpg";
import img1 from "../Images/cake.jpg";
import img2 from "../Images/cake1.jpg";

import Cards from '../Components/Cards.js';


const data = [
  {
    name: "Burger",
    pic: piza,
    price: "RS-1250",
    Button: "Click to Order",
  },
  {
    name: "Chinese Pizza",
    pic: piza1,
    price: "RS-1450",
    Button: " Click to Order",
  },
  {
    name: "American Pizza",
    pic: piza2,
    price: "RS-1150",
    Button: "Click to Order",
  },
  {
    name: "Zinger Burger",
    pic: piza3,
    price: "RS-290",
    Button: "Click to Order",
  },
  {
    name: "American Burger",
    pic: img1,
    price: "RS-350",
    Button: "Click to Order",
  },
  {
    name: "Burger",
    pic: img2,
    price: "RS-550",
    Button: "Click to Order",
  },
];


const Menu = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <h2 className="card__products">Our <span>Menu</span></h2>
      <br />
      <br />

      
      <section className="cards__dashbaord">
        {data.map((it) => {
          return (
            <Cards
              imgSrc={it.pic}
              title={it.name}
              price={it.price}
              Button={it.Button}
            />
          );
        })}
      </section>

    </div>
  )
}

export default Menu