import { Box, Button, Container } from '@material-ui/core';
import { CardContent, CardMedia, Typography, Card} from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';
    
function Copyright(props) {

  return (
  <Typography variant="body2" color={props.theme === 'dark'? 'white':'textsecondary'} align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href="https://material-ui.com/"> */}
      Palash Sharma 
      {' '}
      {/* </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
  </Typography>
  );
}
  
export default function Footer(props) {
  const fgclr = props.theme === 'dark' ? 'white':'black';
  const bgclr = props.theme === 'dark' ? 'black':'white';
    return (
      
    <Box sx={{ flexGrow: 1 }}>
      <CardMedia>
          <CardContent>
              <Typography variant="h6" align="center"  component="p" id='root'>
                Find me at {' '}
                <SocialIcon url="https://www.github.com/spashal/" target="_blank" bgColor={bgclr} fgColor={fgclr} class="iconss"/>
                <SocialIcon url="https://www.linkedin.com/in/spashal/" target="_blank" bgColor={bgclr} fgColor={fgclr}/>
                <SocialIcon url="https://twitter.com/a_sharmaniac" target="_blank" bgColor={bgclr} fgColor={fgclr}/>
                <SocialIcon url="mailto:palash.sharma@students.iiit.ac.in" target="_blank" bgColor={bgclr} fgColor={fgclr}/>
                <SocialIcon url="https://www.instagram.com/a_sharmaniac?r=nametag" target="_blank" bgColor={bgclr} fgColor={fgclr}/>
              </Typography>
              <Copyright theme={props.theme}/>
          </CardContent>    
      </CardMedia>
    </Box>
    )
}