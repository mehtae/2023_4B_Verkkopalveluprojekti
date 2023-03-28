import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from '../images/taustakuva5.jpg';
import '../styles/home.css'

function Home() {
  return (
    <div className='Home'>
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}> 
        <div className="logo" style={{ image: 'url(${Logo})'}}>
          
        </div>
        <h1>OamkCampusMonkeys</h1>
        <p>Someting about us</p>
        <Link to="/menu">
        <button>Register</button>
        </Link>
    </div>
    </div>
  )
}

export default Home