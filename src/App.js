import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import Dashboard from './components/Dashboard'
import SinglePage from './components/BlogPage';
import MyComponent from './components/AddBlog';
import About from './components/Aboutme';
import axios from 'axios';
import { backendURL } from './components/Variables';
import { browserName, browserVersion } from "react-device-detect";

function App() {
  const [location, setLocation] = useState({});
  const [sentDetails, setSentDetails] = useState(false);
  
  useEffect(() => {  
    async function getIP() {
      const res = await axios.get('https://geolocation-db.com/json/')
      console.log(res.data);
      return res.data;
    };
    if(sentDetails == true)
      return;
    console.log("running this");
    getIP().then(async () => {
      const userdetails = {
        location: await getIP(),
        browsername: browserName,
        browserversion: browserVersion,
      }
      setSentDetails(true);

      axios.post(backendURL + 'blogsite/putUserDetails/', userdetails)
      .then(res => {
        if(res.data.error) {
          console.log(res.data.error);
        }
        else {
          console.log("look here",userdetails);
          console.log("Yay, sent your details mf (remove this in deployment version XD)");
        }
      })
      .catch(err => {
        console.log("couldn't send details", err);
      })
    });
  }, []);
  // }, [location]);
  return (
    <Router>
      <div className="container" data-theme={'light'} id='root'>
      {/* <div className="container" data-theme={'light'} id='root'> */}
        <br/>
        <Route path="/" exact component={About}/>
        {/* <Route path="/register" component={Register}/> */}
        <Route path="/loginKarnaImpossibleHai123789" component={Login}/>
        <Route path="/logout" component={Logout} />
        <Route path="/blog" component={Dashboard}/>
        <Route path="/singlePage" component={SinglePage} />
        <Route path="/add" component={MyComponent} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
