import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/footer.css'



function footer() {
  return (
    <div className='Footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <WhatsAppIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
        </div>
        <p>&copy;2023 Mirvan kotisvu </p>

    </div>
  )
}

export default footer