import { Box, Button, Container } from '@material-ui/core';
import { AppBar, IconButton, Toolbar } from 'material-ui';
import { CardContent, CardMedia, Typography, Card} from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

    
function Copyright() {
  return (
  <Typography variant="body2" color="textSecondary" align="center">
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
  
export default function Footer() {
    return (
      
    <Box sx={{ flexGrow: 1 }}>
      <CardMedia>
          <CardContent>
              <Typography variant="h6" align="center"  component="p">
                Find me at {' '}
                <SocialIcon url="https://www.linkedin.com/in/palash-sharma-4a49a5200/" bgColor='white' fgColor='black'/>
                <SocialIcon url="https://twitter.com/PalashS47534442?s=09" bgColor='white' fgColor='black'/>
                <SocialIcon url="mailto:palash.sharma@students.iiit.ac.in" bgColor='white' fgColor='black'/>
                <SocialIcon url="https://www.instagram.com/a_sharmaniac?r=nametag" bgColor='white' fgColor='black'/>
              </Typography>
              <Copyright />
          </CardContent>    
      </CardMedia>
    </Box>
    )
}