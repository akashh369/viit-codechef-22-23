import React, { useEffect, useState } from 'react';

import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

import {Timeline,TimelineConnector,TimelineContent,TimelineDot,TimelineSeparator}from '@mui/lab'
import {Box,Typography,Modal} from '@mui/material'
import { Zoom, Reveal } from 'react-awesome-reveal';

import './Activities.css'
import { keyframes } from '@emotion/react';
export default function AlternateReverseTimeline() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
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

  const [pos, setPos] = useState(`${(window.innerWidth < 700) ? "right" : "alternate-reverse"}`);
  const pos1 = "animate__animated animate__fadeInRight";
  const pos2 = "animate__animated animate__fadeInLeft";

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700)
        setPos("right");
      else
        setPos("alternate-reverse");
    })
  }, []);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
        sx={(pos == "right") ? {
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          }
        } :
          null
        }
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='secondary' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Reveal>
              <div className="timecontainer" onClick={handleOpen}>
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
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </Reveal>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='secondary' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Reveal keyframes={(pos == 'right') ? left : right}>
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
            <TimelineDot color='secondary' />
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
            <TimelineDot color='secondary' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Reveal keyframes={(pos == 'right') ? left : right}>
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
      </>
  );
}