import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {useHistory} from 'react-router-dom';
import Divider from '@mui/material/Divider';
import ThemeToggle from '../ThemeToggle';
import '../../App.css';

export default function TopBar(props) {
  const [pageIsIntro, setPage] = React.useState(true);
  const history = useHistory();
  const theme = props.theme;
  const changeTheme = props.changeTheme;
  React.useEffect(() => {
    if(props.blog)
      setPage(false);
  }, []);

  const goToAbout = () => {
    history.push('/about');
  }

  const goToBlog = () => {
    history.push('/blog')
  }
  return (
    // <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" id='root' style={{padding:"2%", paddingBottom:"0px"}} elevation="0" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h3" style={{fontWeight:"bold"}}  component="div" sx={{ flexGrow: 1 }}>
            Palash Sharma
          </Typography>
          <Button color="inherit" style={{fontSize:"150%"}} onClick={() => goToAbout()}>
            About me
          </Button>
          <Button style={{fontSize:"150%"}} color="inherit" onClick={() => goToBlog()}>
            My Blog
          </Button>
          <div style={{width:"5%"}}></div>
          <ThemeToggle theme={theme} changeTheme={changeTheme}/>
        </Toolbar>
        <Divider style={{backgroundColor:"white"}} />
      </AppBar>
    /* </Box> */
  );
}
