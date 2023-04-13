import React from "react";
import '../styles/footer.css'
import Avatar from '@mui/material/Avatar';
import monkey from "../img/monkey1.png"
import monkey1 from "../img/monkey .png"
import monkey2 from "../img/monkey2.png"
import monkey5 from "../img/monkey6.png"
import monkey4 from "../img/monkey5.png"

function Footer() {
  return (
    <div className="footer">
      <div className="avatar">
 
      <Avatar alt="Elina" src={monkey} />
      <Avatar alt="Aleksi" src={monkey1} />
      <Avatar alt="Tommi" src={monkey2} />
      <Avatar alt="Nikita" src={monkey5} />
      <Avatar alt="Mirva" src={monkey4} />
        </div> 

      <p> &copy;  <b>2023  Verkkopalveluprojekti</b>  Aleksi, Elina, Mirva, Nikita, Tommi  </p>
    </div>
  );
}

export default Footer;