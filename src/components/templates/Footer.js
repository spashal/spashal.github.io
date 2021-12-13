import { Box, Button, Container } from '@material-ui/core';
import { AppBar, IconButton, Toolbar } from 'material-ui';
import { CardContent, CardMedia, Typography, Card} from '@mui/material';
import { Link } from "react-router-dom";
    
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
              <Typography variant="h6" align="center" >
              Footer
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Something here to give the footer a purpose! asdfasdfasdfasdfasdfasdfasdfasdfasdf
              </Typography>
              <Copyright />
          </CardContent>    
      </CardMedia>
    </Box>
    )
}