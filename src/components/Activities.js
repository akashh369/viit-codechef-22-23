import React, { useEffect, useState} from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Zoom,Reveal } from 'react-awesome-reveal';
// import timelineItemClasses from '@mui/lab/timeline';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// import i1 from '../assets/seminars/1.jpg'
// import i2 from '../assets/seminars/2.jpg'
// import i3 from '../assets/seminars/3.jpg'
// import i4 from '../assets/seminars/4.jpg'
// import i5 from '../assets/seminars/5.jpg'
// import i6 from '../assets/seminars/6.jpg'
// import i7 from '../assets/seminars/7.jpg'
// import i8 from '../assets/seminars/8.jpg'


import './Activities.css'
import { keyframes } from '@emotion/react';
export default function AlternateReverseTimeline() {
  
  // const [pos, setpos] = useState("alternate-reverse")
  // const [dimensions, setDimensions] =useState({ 
  //   height: window.innerHeight,
  //   width: window.innerWidth
  // })
  // useEffect(() => {
  //   function handleResize() {
  //     setDimensions({
  //       height: window.innerHeight,
  //       width: window.innerWidth
  //     })
  //     if(dimensions.width>700){
  //       setpos("alternate-reverse")
  //     }
  //     else
  //     setpos("right")
    
  //   }

  //   window.addEventListener('resize', handleResize)
  // })


  
  // useEffect(() => {
  //   if(dimensions.width >800){
  //     setpos("alternate-reverse")
  //   }
  //   else{
  //     setpos('right')
  //   }
  //   console.log({pos})
  // }, [dimensions.width,pos])
  
  const [pos,setPos]=useState(`${(window.innerWidth<700) ? "right" : "alternate-reverse"}`);
  const pos1="animate__animated animate__fadeInRight";
  const pos2="animate__animated animate__fadeInLeft";

  useEffect(()=>{
    window.addEventListener("resize",()=>{
      if(window.innerWidth<700)
      setPos("right");
      else
      setPos("alternate-reverse");
    })
  },[]);

  const right = keyframes`
  from {
    opacity: 0;
    transform: translate3d(400px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const left = keyframes`
from {
  opacity: 0;
  transform: translate3d(-200px, 0, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;

  return (
    <>
    <div className="seminarcomponent" >
    <div className="text">
          <Zoom>

          <h1>Activities</h1>
          </Zoom>
        </div>
    </div>
    <Timeline position={pos}
     sx={(pos=="right")?{[`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
           padding: 0,
         }}:
         null
        }
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='secondary'/>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
          <Reveal>
          <div className="timecontainer">
          <div className="Timecard">
            <div className="date">
            <p>25 Sept 2022 - 27 Sept 2022</p>
            </div>
            <div className="timecardcontainer">
              <div className="timecardheading">
                <h1>heading</h1>
              </div>
              <div className="timecarddetail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus quisquam distinctio, ad repellendus ducimus, vel mollitia sint nemo est at aliquid laborum amet iure harum magni voluptate modi sequi.</p>
              </div>
            </div>
          </div>
          </div>
          </Reveal>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='secondary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Reveal keyframes={(pos=='right')?left:right}>
          <div className="timecontainer">
          <div className="Timecard">
            <div className="date">
            <p>25 Sept 2022 - 27 Sept 2022</p>
            </div>
            <div className="timecardcontainer">
              <div className="timecardheading">
                <h1>heading</h1>
              </div>
              <div className="timecarddetail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus quisquam distinctio, ad repellendus ducimus, vel mollitia sint nemo est at aliquid laborum amet iure harum magni voluptate modi sequi.</p>
              </div>
            </div>
          </div>
          </div>
          </Reveal>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='secondary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Reveal>
          <div className="timecontainer">
          <div className="Timecard">
            <div className="date">
            <p>25 Sept 2022 - 27 Sept 2022</p>
            </div>
            <div className="timecardcontainer">
              <div className="timecardheading">
                <h1>heading</h1>
              </div>
              <div className="timecarddetail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus quisquam distinctio, ad repellendus ducimus, vel mollitia sint nemo est at aliquid laborum amet iure harum magni voluptate modi sequi.</p>
              </div>
            </div>
          </div>
          </div>
          </Reveal>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='secondary'/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
        <Reveal keyframes={(pos=='right')?left:right}>
          <div className="timecontainer">
          <div className="Timecard">
            <div className="date">
            <p>25 Sept 2022 - 27 Sept 2022</p>
            </div>
            <div className="timecardcontainer">
              <div className="timecardheading">
                <h1>heading</h1>
              </div>
              <div className="timecarddetail">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus quisquam distinctio, ad repellendus ducimus, vel mollitia sint nemo est at aliquid laborum amet iure harum magni voluptate modi sequi.</p>
              </div>
            </div>
          </div>
          </div>
          </Reveal>
        </TimelineContent>
        
      </TimelineItem>
    </Timeline>
    {/* <br />
    <br />
    <br />
    <br />
    <br />
    <br /> */}
    
    {/* <Carousel
     autoPlay="true"
    infiniteLoop="true" 
    emulateTouch="true" 
    centerMode="true" 
    interval={1500}
    centerSlidePercentage={70}>
        <div className='activityimage'>
            <img src={i1}/>
        </div>
        <div className='activityimage'>
            <img src={i2}/>
        </div>
        <div className='activityimage'>
            <img src={i3}/>
        </div>
      
        <div className='activityimage'>
            <img src={i4}/>
        </div>
      
        <div className='activityimage'>
            <img src={i5}/>
        </div>
      
        <div className='activityimage'>
            <img src={i6}/>
        </div>
      
        <div className='activityimage'>
            <img src={i7}/>
        </div>
      
        <div className='activityimage'>
            <img src={i8}/>
        </div>
    </Carousel> */}

    </>
  );
}