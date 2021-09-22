import React, {Component} from 'react';
import axios from 'axios';
import ResponsiveDrawer from './templates/Sidebar';
import AppBar from '@material-ui/core/AppBar';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

    
function Copyright() {
    return (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
        Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    );
}
    
        const useStyles = makeStyles((theme) => ({
        icon: {
            marginRight: theme.spacing(2),
        },
        heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
    }));
    
    const cards = [1, 2, 3, 4];
    const imgs = [
        './static/img/1.jpg',
        './static/img/2.jpg',
        './static/img/3.jpg',
        './static/img/4.jpg'
    ]
    const icon = (
      <Paper sx={{ m: 1 }} elevation={4}>
        <Box component="svg" sx={{ width: 100, height: 100 }}>
          <Box
            component="polygon"
            sx={{
              fill: (theme) => theme.palette.common.white,
              stroke: (theme) => theme.palette.divider,
              strokeWidth: 1,
            }}
            points="0,100 50,00, 100,100"
          />
        </Box>
      </Paper>
    );
    
    export default function Dashboard() {
      const [checked, setChecked] = React.useState(false);

      const handleChange = () => {
        setChecked((prev) => !prev);
      };
    
      axios.get("http://localhost:4000/user/legit", {withCredentials: true})
        .then(res => {
            // console.log(res.data, "this is the response");
            if(!res.data){
                window.location = '/login';
            }
        })
        .catch(err => {
            console.log(err);
        });

      const classes = useStyles();
        console.log(imgs);
      return (
        <React.Fragment>
            <ResponsiveDrawer/>
          {/* <CssBaseline /> */}
          <AppBar position="relative">
            {/* <Toolbar>
              <CameraIcon className={classes.icon} />
              <Typography variant="h6" color="inherit" noWrap>
                Album layout
              </Typography>
            </Toolbar> */}
          </AppBar>
          <main>
            <Box sx={{ height: 300 }}>
              <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="Show"
              />
              <Box
                sx={{
                  '& > :not(style)': {
                    display: 'flex',
                    justifyContent: 'space-around',
                    height: 120,
                    width: 250,
                  },
                }}
              >
                <div>
                <Collapse in={checked}>{icon}</Collapse>
                <Collapse in={checked} collapsedSize={40}>
                  {icon}
                </Collapse>
              </div>
            </Box>
            </Box>
          </main>
          {/* Footer */}
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Something here to give the footer a purpose!
            </Typography>
            <Copyright />
          </footer>
          {/* End footer */}
        </React.Fragment>
      );
    }