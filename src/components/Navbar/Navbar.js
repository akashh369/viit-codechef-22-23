import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import cclogo from '../../assets/cc-logo.svg'
import cclogomobile from '../../assets/cc-logo-mobile.svg'
import './Navbar.css'
import { useMediaQuery } from '@mui/material';

const theme = createTheme({
  palette: {
    primary:{
      main : '#fff'
    }
  },
});

const Navbar = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [logo, setLogo] = useState(cclogo)
  useEffect(() => {
    isMobile?
    setLogo(cclogomobile):
    setLogo(cclogo);
  }, [isMobile])
  
  return(
  <>
    <ThemeProvider theme={theme}>
      <AppBar position="sticky"   >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className='cclogo'>
            <img src={logo} alt='cclogo' loading='lazy' />
          </div>

          <Box sx={{m:"0 100px 0 0"}}>
            <Button color="inherit" sx={{m:"20px 0"}} href='#home'>Home</Button>
            <Button color="inherit" href='#contest'>Contests</Button>
            <Button color="inherit" href='#seminar'>Activites</Button>
            <Button color="inherit" href='#team'>Team</Button>
          </Box>
        </Box>
      </AppBar>

    </ThemeProvider>
  </>
  )
  }

export default Navbar