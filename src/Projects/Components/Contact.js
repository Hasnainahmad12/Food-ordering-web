import React, {useRef, useState} from 'react'
import "../Styles/Contact.css";
import picture from "../Images/telephone.PNG";
//first install npm i emailjs then @emailjs/browser
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [done , setDone] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_kj8einb', 'template_9d3mw4v', form.current, 'yAzxC3-DjbCtoArTI')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='main__divide'>
        <br />
        <br />
        <br />
        <h2 className='Contact__us'><span>CONTACT</span> US</h2>
        <br />
        <img src={picture} className="tele__pic" alt='' />
        <br />
        <br />
        <div className='form__div'>
            <h2 className='form__head'>Get In <span>Touch</span></h2><br />
            <form className='form' ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Enter Your Name" /><br /><br />
                <input type="text" name="user_email" placeholder="Enter Your Email" /><br /><br />
                <input type="text" name="message" placeholder="Enter Your Message" /><br /><br />
                <button type="submit"  className='form__button'>Submit</button><br />
                <span className='span__tag'>{done && "Thanks For Contacting Me.."}</span>
            </form>
        </div>
    </div>
  )
}

export default Contact