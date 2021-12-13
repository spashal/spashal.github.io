import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField } from '@material-ui/core';
import Topbar from './templates/Topbar';
import {backendURL} from '../components/Variables';
import {useHistory} from 'react-router-dom';
import { CardContent, CardMedia, Typography, Card} from '@mui/material';
import mypic from '../sherlock.png';
import { Box, maxHeight} from '@mui/system';
import Footer from './templates/Footer';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    padding: 'auto',
    // textAlign: 'center',
  },
  paper: {
    height: 300,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  root2: {
    height: 500,
    maxWidth: 900,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    gridRow: 10,
    height: "300px",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    bottom: '5%',
    position: 'fixed',
  },
}));


const videoConstraints = {
  facingMode: "user"
};


// the renderer function in this page
export default function About(props) {
  const classes = useStyles();
  const [camera, OpenCamera] = useState(false);
  const [curImage, setImage] = useState();
  const history = useHistory();


  axios.get(backendURL + "user/legit", {withCredentials: true})
    .then(res => {
        if(!res.data){
//            window.location = '/table-ocr/login';
        }
    })
    .catch(err => {
        console.log(err);
    });

  return (
    <div>
        <Topbar></Topbar>
        <div>
        <Grid container direction="column" justify="center">
            <Grid item>
              
                
                <Grid item container className={classes.root} direction="row" justify="center">
                    <Grid item className={classes.root} style={{maxWidth: "35%"}}>
                        <Box>
                            <img src={mypic} style={{maxWidth:'100%'}}/>
                        </Box>
                    </Grid>
                    <Grid item className={classes.root}>
                        <Typography variant='h2'>
                            Hi!                        
                        </Typography>
                        <br/>
                        <Typography variant='h5'>
                            I am Palash Sharma
                        </Typography>
                        <br/> <br/>
                        <Typography>
                            I am a Computer Science sophomore at IIIT Hyderabad.<br/>
                            I like to draw ocassionaly and also play music once in a while.<br/>
                            Apart from discussing my views on random topics, you'll find me <br/>supporting Manchester United
                            so please pray that my taste in football improve.<br/>
                             <br/>
                            If you wish to discuss anything with me, <br/>feel free to reach out! <br/><br/>Do read my blogs and show some love {'<'}3
                        </Typography>
                        
                    </Grid>
                </Grid> 
        </Grid>
        
        </Grid>
        </div>
        <Footer></Footer>
    </div>
  );
}