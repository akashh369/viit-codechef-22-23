import React from 'react'
import Team from './Team'
import Seminar from './Activities'
import Contest from './Contest'
import codeingboy from '../assets/coding_boy.svg'
import {motion} from 'framer-motion';
import { Slide } from "react-awesome-reveal";
import { Rotate } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import {animate__lightSpeedInLeft } from "react-awesome-reveal";
import { AttentionSeeker } from 'react-awesome-reveal'
import 'animate.css'


import './Home.css'
const Home = () => {
  return (
    <>
    <section id='home'>
      <div className="homecontainer">
        <div className="textheader">
          <Zoom>
        <h1 className="animate__animated animate__fadeInDown animate__fast animate__delay-1s">
        Welcome to Codechef VIIT Chapter
          </h1>    
            </Zoom>        
        </div>
        <div className="ccimage animate__animated animate__fadeInDown ">
          {/* <motion.img initial={{rotateY:0}}  animate={{rotateY:[360,0,360]}} transition={{duration:2,ease:[0.4,0,0.2,1]}} src={codeingboy} alt="coding boy" /> */}
            <Zoom>
            <img src={codeingboy} />

            </Zoom>
        </div>
      </div>
    </section>
    <section id='contest'>
      <Contest/>
    </section>
    <section id='seminar'>
      <Seminar/>
    </section>
    <section id='team'>
      <Team/>
    </section>
    <footer class="footer">
            <p class="footer__title">Vignan'IIT CodeChef</p>
            <p>© 2023 Copyright all rights reserved</p>
    </footer>
    
    </>
  )
}

export default Home