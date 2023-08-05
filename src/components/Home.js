import React from 'react'
import Team from './Team'
import Seminar from './Activities'
import Contest from './Contest'
import codeingboy from '../assets/coding_boy.svg'

import './Home.css'
const Home = () => {
  return (
    <>
    <section id='home'>
    <div className="homecontainer">
      <div className="textheader">
          <h1>Welcome to Codechef VIIT Chapter</h1>
      </div>
      <div className="ccimage">
        <img src={codeingboy} alt="coding boy" />
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