import React from "react";
import "../styles/contactus.css";
import pict from "../img/contact.png";
import StarRating from "../components/Feedback.js"
import { Feedback } from "@mui/icons-material";
import { Rating } from "@mui/material";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide">

     <div className="Feedback"> <StarRating/></div>

      </div>
      <div className="rightSide">
        <h1>Contact/Feedback</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;