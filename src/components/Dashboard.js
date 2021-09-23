import React, {Component, useEffect} from 'react';
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

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

    
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
    

export default function Dashboard() {
  const [listOfArticles, setArticlesList] = React.useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get(backendURL + 'articles/forDisplayList')
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
  }, []);

  const showBlogArticle = (title) => {
    history.push('/singlePage?blog_title=' + title);
  }

  axios.get(backendURL + "user/legit", {withCredentials: true})
    .then(res => {
        // console.log(res.data, "this is the response");
        if(!res.data){
            // window.location = '/login';
        }
    })
    .catch(err => {
        console.log(err);
    });

  const classes = useStyles();
  return (
    <React.Fragment>
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
              </CardContent>
              )}
          </div>
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