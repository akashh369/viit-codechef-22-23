import React from 'react'
import { Reveal, Zoom } from 'react-awesome-reveal'
import OnVisible from 'react-on-visible';
import { AttentionSeeker } from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";



import './Contest.css'
const Contest = () => {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(400px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
  return (
    <>
      <div className="maincontainer">
        <div className="text">
          <Zoom>
          <h1>Contest</h1>
          </Zoom>
        </div>
        <div className="flexcontainer">

        
          <div className="contestcontainer"
          >
            <Reveal>
              <div>
            <div className="card">
              <img src="https://cdn.codechef.com/download/small-banner/LTCD22TS/1662645462.jpg" alt="Denim Jeans"/>
              <h1>Tailored Jeans</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button className='button button2'>Results</button></p>
            </div>
            </div>   
            </Reveal>
          </div>


            <div className="contestcontainer animate__animated animate__fadeInLeft ">
            <Reveal>
            <div>

            <div className="card">
              <img src="https://cdn.codechef.com/download/small-banner/HPCF2022/1664027933.jpeg" alt="Denim Jeans"/>
              <h1>Tailored Jeans</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button className='button button2'>Results</button></p>
            </div>
            </div>
            </Reveal>
            </div>

          <div className="contestcontainer animate__animated animate__fadeInRight">
            <Reveal keyframes={customAnimation}>
            <div>
            <div className="card">
              <img src="https://cdn.codechef.com/download/small-banner/PRNV2022/1664683882.jpeg" alt="Denim Jeans"/>
              <h1>Tailored Jeans</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button className='button button2'>Results</button></p>
            </div>
              </div>  
            </Reveal>
          </div>  

        </div>
      </div>
    </>
  )
}

export default Contest