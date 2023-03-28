import React from 'react'
import '../styles/contactUs.css'
import image from '../images/naamat-1.png'

function ContactUs() {
  return (
    <div className='contact'>
    <div className='rightSide'>
        <h1>Contact us</h1>

        <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" placeholder='Enter full name...'/> 
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder='Enter email...'/>  
            <label htmlFor="message">Message</label>
            <textarea rows="20" cols="10" name='message'></textarea>
            <button type="submit">Send Message</button>
            </form>
    </div>
    <div className='leftSide' style={{ backgroundImage: `url(${image})` }}>

    </div>
 </div>
  )
}

export default ContactUs