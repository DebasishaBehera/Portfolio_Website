import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);

// enter your own web3 forms access key below

    formData.append("access_key", "73e49380-3d07-4a14-9626-ff4c68e080bb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    
      alert(res.message);
      form.reset();
    
  };


  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p> I'm looking for opportunities where I can apply my skills, learn from experienced developers, and grow as a professional in a collaborative environment. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>debasisha.behera.dev@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+91-95834-95674</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Bhubaneswar, Odisha</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' required />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' required />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
            <button type='submit' className="contact-submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact





