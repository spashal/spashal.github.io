import React, { useEffect } from 'react';
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
    // backgroundColor: 'black',
    // color:'white',
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
    margin: '0% !important',
    padding: '0% !important',
    spacing: '0% !important'
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
  const [currentlyWorking, getCurrentlyWorking] = useState("");
  useEffect(() => {
    axios.get(backendURL + 'blogsite/getCurrentlyWorking')
      .then(res => {
        getCurrentlyWorking(res.data.currentlyWorking.text);
      })
      .catch(err => {
        console.log(err);
      });
  });
//   axios.get(backendURL + "user/legit", {withCredentials: true})
//     .then(res => {
//         if(!res.data){
// //            window.location = '/table-ocr/login';
//         }
//     })
//     .catch(err => {
//         console.log(err);
//     });

  return (
    <div>
        <Topbar></Topbar>
        <div>
        <Grid container direction="column" justify="left" style={{height:"100%", padding:"5%", paddingTop:"0px"}}>
            <Grid item >
              
                <Grid item container className={classes.root} direction="row" wrap="nowrap" justify="space-evenly" >
                    <Grid item className={classes.root} style={{minWidth: "55%"}}>
                        <Box>
                            <img alt='Shrelock I drew for fun. Turned out great :)' src={mypic} style={{maxWidth:'80%'}}/>
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
                            so please pray that my taste in football improve.
                             <br/>
                             <br/>
                            {currentlyWorking}
                            <br/>
                            <br/>

                            If you wish to discuss anything with me, <br/>feel free to reach out! 
                            <br/>
                            <br/>
                            Do read my blogs and show some love {'<'}3
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