import React from 'react'
import './Footer.css'
import Instagram from "./assets/InstagramLogo.png"
import Linkdin from "./assets/LinkedinLogo.png"
function footer() {
  return (
      <div id="box2">
    <div id="left" className="last">
        <ul>
            <li className="li">Prompt Generator</li>
            <li className="li" >Dweep Daily</li>
            <li className="li" >All Contributors</li>
            <li className="li" >Your data on Dweep.io</li>
            <li className="li" >Contribute to Dweep</li>
        </ul>
    </div>
    <div id="right" className="last">
        <ul id="rightli" >
            <li className="li">Dweep.io</li>
            <li className="li" >Made with love in India</li>
            <li className="li" ><img src={Linkdin} alt=""/> <img src={Instagram} alt=""/> </li>
            <li className="li" ></li>
            <li className="li" >hello@dweep.io</li>
        </ul>
    </div>
    
    
</div>
  )
}

export default footer