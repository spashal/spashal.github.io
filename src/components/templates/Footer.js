import { Box, Button, Container } from '@material-ui/core';
import { CardContent, CardMedia, Typography, Card} from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react';
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
                <SocialIcon url="https://www.linkedin.com/in/palash-sharma-4a49a5200/" target="_blank" bgColor='white' fgColor='black'/>
                <SocialIcon url="https://twitter.com/PalashS47534442?s=09" target="_blank" bgColor='white' fgColor='black'/>
                <SocialIcon url="mailto:palash.sharma@students.iiit.ac.in" target="_blank" bgColor='white' fgColor='black'/>
                <SocialIcon url="https://www.instagram.com/a_sharmaniac?r=nametag" target="_blank" bgColor='white' fgColor='black'/>
              </Typography>
              <Copyright />
          </CardContent>    
      </CardMedia>
    </Box>
    )
}