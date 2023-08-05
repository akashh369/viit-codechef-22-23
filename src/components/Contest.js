import React from 'react'
import './Contest.css'
const Contest = () => {
  return (
    <>
      <div className="maincontainer">
        <div className="text">
          <h1>Contest</h1>
        </div>
        <div className="flexcontainer">

          <div className="contestcontainer">
            <div className="card">
              <img src="https://cdn.codechef.com/download/small-banner/LTCD22TS/1662645462.jpg" alt="Denim Jeans"/>
              <h1>Tailored Jeans</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button className='button button2'>Results</button></p>
            </div>
          </div>

          <div className="contestcontainer">
            <div className="card">
              <img src="https://cdn.codechef.com/download/small-banner/HPCF2022/1664027933.jpeg" alt="Denim Jeans"/>
              <h1>Tailored Jeans</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button className='button button2'>Results</button></p>
            </div>
          </div>

          <div className="contestcontainer">
            <div className="card">
              <img src="https://cdn.codechef.com/download/small-banner/PRNV2022/1664683882.jpeg" alt="Denim Jeans"/>
              <h1>Tailored Jeans</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button className='button button2'>Results</button></p>
            </div>
          </div>  

        </div>
      </div>
    </>
  )
}

export default Contest