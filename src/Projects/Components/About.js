import React from 'react'
import "../Styles/About.css";
import img1 from "../Images/pizaa3.jpg";

const About = () => {
  return (
    <div className='main__about'>
        <br />
        <br />
        <br />
        <p><span className='about__us'>ABOUT</span> US</p>
        <br />
        <div>
            <img src={img1} className="img__pizaa" alt='' />            
        </div>

        <div className='blur__div'>
            <h2 className='main__head'>What About Our Foods</h2>
            <span className='div__paragh'>Excepteur eu ex culpa mollit minim. Labore ipsum dolore eu qui et exercitation eiusmod esse laborum anim. Excepteur irure amet sunt culpa cupidatat anim aute. In proident cillum aliqua anim sint cupidatat. Cupidatat aute proident commodo consequat tempor Lorem ad id reprehenderit amet consectetur pariatur Lorem ullamco. Anim dolore magna duis dolor magna laboris ea pariatur ad excepteur.</span><br />
            
            <button className="button__more">Learn more</button>
        </div>
    </div>
  )
}

export default About