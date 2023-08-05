import React from 'react'
import './Team.css'
import { Box } from '@mui/material'
import defaultimg from '../assets/team/default.jpg'


import sanjay from '../assets/team/sanjay.jpeg'
import kiran from '../assets/team/kiran.jpg'
import akash from '../assets/team/akash.jpeg'
import prasad from '../assets/team/prasad.jpeg'
import lasya from '../assets/team/lasya.jpeg'
import anjali from '../assets/team/anjali.jpeg'
import harshapriya from '../assets/team/harshapriya.jpeg'
import arjun from '../assets/team/arjun.png'

const Team = () => {
  return (
    <Box>
      <div className="teamcontainer">
        
      <div className="text">
          <h1>Meet Our Team</h1>
      </div>
      
      <div className="coreteam">
        <div className="text2">
            <h1>Core Team</h1>
        </div>
        <div className="teamcardcontainer">
          <div className="membercard">
            <img src={defaultimg} />
            <div className="membername">
              <h3>Dinesh Reddy</h3>
            </div>
            <p>faculty advisor</p>
          </div>   

          <div className="membercard">
            <img src={kiran} />
            <div className="membername">
              <h3>Kiran</h3>
            </div>
            <p>president</p>
          </div>   

          <div className="membercard">
            <img src={sanjay} />
            <div className="membername">
              <h3>sanjay</h3>
            </div>
            <p>cp-lead</p>
          </div>   

          <div className="membercard">
            <img src={akash} />
            <div className="membername">
              <h3>Akash</h3>
            </div>
            <p>speaker</p>
          </div>   

          
        </div>
        
        
      </div>

      <div className="Eventteam">
        <div className="text2">
            <h1>Event Management Team</h1>
        </div>
        <div className="teamcardcontainer">
          
          <div className="membercard">
            <img src={prasad} />
            <div className="membername">
              <h3>prasad</h3>
            </div>
            <p>Event lead</p>
          </div>   

          <div className="membercard">
            <img src={arjun} />
            <div className="membername">
              <h3>Arjun</h3>
            </div>
            <p>Content Lead</p>
          </div>   

          
        </div>
        
        
      </div>

      <div className="members">
        <div className="text2">
            <h1>Members</h1>
        </div>
        <div className="teamcardcontainer">
          <div className="membercard">
            <img src={harshapriya} />
            <div className="membername">
              <h3>Harsha Priya</h3>
            </div>
            <p>member</p>
          </div>   

          <div className="membercard">
            <img src={lasya} />
            <div className="membername">
              <h3>Lasya</h3>
            </div>
            <p>member</p>
          </div>   

          <div className="membercard">
            <img src={anjali} />
            <div className="membername">
              <h3>lasya</h3>
            </div>
            <p>member</p>
          </div>   

          
        </div>
        
        
      </div>
      </div>
    </Box>
  )
}

export default Team
