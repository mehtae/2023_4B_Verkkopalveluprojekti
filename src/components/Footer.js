import React from "react";
import '../styles/footer.css'
import Avatar from '@mui/material/Avatar';

function Footer() {
  return (
    <div className="footer">
      <div className="avatar">
 
      <Avatar alt="Elina" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Aleksi" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Tommi" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Nikita" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Mirva" src="/static/images/avatar/3.jpg" />
        </div> 

      <p> &copy;  <b>2023  Verkkopalveluprojekti</b>  Aleksi, Elina, Mirva, Nikita, Tommi  </p>
    </div>
  );
}

export default Footer;