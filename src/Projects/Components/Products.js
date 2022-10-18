import React from 'react'
import "../Styles/Products.css";
import {FaTimes} from "react-icons/fa";

import kabab from "../Images/pizaa4.jpg";
import cake from "../Images/cake1.jpg";
import pizaa from "../Images/biryani.jpg";
import ProductCard from './Product_Card';


const product = [
    {img: kabab , title: 'Milky Ice Cream' , price: "RS 150", Button: FaTimes},    
    {img: cake , title: 'Pizzaa' , price: "RS 150"},    
    {img: pizaa , title: 'Burger' , price: "RS 150"},    
]


const Products = () => {
  return (
    <div>
        <br />
        <br />
        <br />
        <h2 className='product'>OUR <span>PRODUCTS</span></h2>
        <br />

        <section className='product__section'>
            {product.map((it) =>{
                return <ProductCard  img={it.img} title={it.title} price={it.price} Button={it.Button}/>
            })}
        </section>
    </div>
    
  )
}

export default Products