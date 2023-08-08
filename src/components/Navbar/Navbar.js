import "./Navbar.css"
import cclogo from '../../assets/cc-logo.svg'
import cclogomobile from '../../assets/cc-logo-mobile.svg'
import React, { useState } from 'react'

import { FaBars,FaTimes } from "react-icons/fa"
 const Navbar = () => {
    const [click, setClick] =useState(false);
    const handleClick = () =>setClick(!click);

    const [color,setColor]=useState(false);
    const colorChange=()=>{
        if(window.scrollY >=100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",colorChange);

   return (
     <div className={color ? "header bg" : "header"}>       {/* made some changes here */}
        <div>
          {/* <img src={(window.width>700)? {cclogo}:{cclogomobile}} alt={cclogo} /> */}
          <picture>
          <source media="(max-width: 700px)" srcset={cclogomobile} />
          <img src={cclogo} alt="cclogo" />
        </picture>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <a href='#home'><button>Home</button></a>
            </li>
            <li>
                <a href='#contest'><button>Contest</button></a>
            </li>
            <li>
              <a href='#seminar'><button>Activities</button></a>
            </li>
            <li>
              <a href='#team'><button>Team</button></a>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color : "#fff"}}/>)
            :(<FaBars size={20} style={{color : "#000"}}/>)
            }
            
        </div>
     </div>    
   )
 }
 
 export default Navbar