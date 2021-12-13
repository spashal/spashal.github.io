import React from 'react';
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

function App() {
  return (
    <Router>
      <div className="container">
        <br/>
        <Route path="/" exact component={Dashboard}/>
        {/* <Route path="/register" component={Register}/> */}
        <Route path="/loginKarnaImpossibleHai112358" component={Login}/>
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
