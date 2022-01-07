import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import ResponsiveDrawer from './templates/Sidebar';
import AppBar from '@material-ui/core/AppBar';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {backendURL} from '../components/Variables';
import {useHistory} from 'react-router-dom';
import TopBar from './templates/Topbar';
import Footer from './templates/Footer';

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
    

export default function Dashboard() {
  const [listOfArticles, setArticlesList] = React.useState([]);
  const history = useHistory();
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    axios.get(backendURL + 'blogsite/allArticles')
      .then(res => {
        if(res.data.error){
          console.log("An error received with the response", res.data.error);
          return;
        }
        setArticlesList(res.data.data);
        console.log("This is the data recieved", res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
      // axios.get(backendURL + 'user/legit', {withCredentials:true})
      //       .then(res => {
      //         console.log(res.data);
      //         if(res.data){
      //           setAdmin(true);
      //         }
      //       })
      //       .catch(err => {
      //         console.log(err, "this error in legit");
      //       });
  }, []);

  const showBlogArticle = (title) => {
    history.push('/singlePage?blog_title=' + title);
  }

  // axios.get(backendURL + "user/legit", {withCredentials: true})
  //   .then(res => {
  //       // console.log(res.data, "this is the response");
  //       if(!res.data){
  //           // window.location = '/login';
  //       }
  //   })
  //   .catch(err => {
  //       console.log(err);
  //   });
  
  const deleteArticle = (titles) => {
    const body = {
      title: titles
    };
    console.log(body, "to be deleted");
    axios.post(backendURL + 'articles/deleteArticle', body, {withCredentials: true})
      .then(res => {
        history.push('/dashboard');
      })
      .catch(err => {
        console.log('this error', err);
      })
  }

  const classes = useStyles();
  return (
    <React.Fragment>
      <TopBar blog></TopBar>
      <main>
            <div>
              {listOfArticles.map((article, ind) =>
              <CardContent>
                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography> */}
                <Typography component="div" align="center">
                  <Button disableRipple={true} variant="h1" onClick={() => showBlogArticle(article.title)}>
                    <Typography variant="h4" style={{fontFamily: "monospace", fontWeight: 'bold'}}>
                      {article.title}
                    </Typography>
                  </Button>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                  {article.desc}
                </Typography>
                <Typography variant="body2" align="right">
                  {article.dateCreatedString}
                </Typography>
                {/* <Button onClick={() => {deleteArticle(article.title);}}>
                  Delete
                </Button> */}
              </CardContent>
              )}
          </div>
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
}