import React from "react";
import "../Styles/Main.css";
import img from "../Images/burger.jpg";

const Main = () => {
  return (
    <div className="main">
      <img src={img} className="main__img" alt="" />
     
      <h2 className="main__h">
        Fresh <span className="text-yellow-600">Food In The</span>
        <br /> Morning
      </h2>
      <p className="main__p">
        Sit labore pariatur commodo minim aliquip
        <br /> sunt.pariatur commodo minim aliquip sunt
      </p>

      <button className="button">Get Yours Own</button>
    </div>
  );
};

export default Main;
