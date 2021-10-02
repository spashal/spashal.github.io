import React, {useState, useEffect, Component} from 'react';
import {useLocation} from "react-router-dom";
import axios from 'axios';
import {backendURL} from '../components/Variables';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField } from '@material-ui/core';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TopBar from './templates/Topbar';
import Typography from '@mui/material/Typography';
import './BlogPage.css';
import { Divider } from 'material-ui';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

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


export default function SinglePage() {
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('blog_title');
    const [blogTitle, setTitle] = useState(name);
    const [blogData, setData] = useState(null);
    console.log(blogTitle);

    useEffect(() => {
        var temp = {
            title: name
        };
        axios.post(backendURL + 'articles/getBlogArticle', temp)
            .then(res => {
                if(res.data.error)
                    console.log(res.data.message, res.data.error);
                else{
                    console.log(res.data.data);
                    setData(res.data.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const classes = useStyles();

    return (
        <React.Fragment>
            <TopBar blog></TopBar>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="right">
                        {blogData ? blogData.dateCreatedString : "Loading"}
                    </Typography>
                    <Typography variant="h2" component="div" align="center">
                        {blogData ? blogData.title : "Loading"}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    </Typography>
                    <div>
                      {blogData ? <div dangerouslySetInnerHTML={{__html: blogData.text}}></div>: "Loading"}
                    </div>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </React.Fragment>
    );
}