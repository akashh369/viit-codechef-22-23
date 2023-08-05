import React,{ Component } from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import i1 from '../assets/seminars/1.jpg'
import i2 from '../assets/seminars/2.jpg'
import i3 from '../assets/seminars/3.jpg'
import i4 from '../assets/seminars/4.jpg'
import i5 from '../assets/seminars/5.jpg'
import i6 from '../assets/seminars/6.jpg'
import i7 from '../assets/seminars/7.jpg'
import i8 from '../assets/seminars/8.jpg'


import './Activities.css'
export default function AlternateReverseTimeline() {
  return (
    <>
    <div className="seminarcomponent">
    <div className="text">
          <h1>Activities</h1>
        </div>
    </div>
    <Timeline position="alternate-reverse">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='secondary'/>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
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
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='secondary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div className="Timecard">
            <div className="date">
              April 20, 2021
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
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='secondary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div className="Timecard">
            <div className="date">
              April 20, 2021
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
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='secondary'/>
        </TimelineSeparator>
        <TimelineContent>
        <div className="Timecard">
            <div className="date">
              April 20, 2021
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