
import { Box, Button, Container } from '@material-ui/core';
import { CardContent, CardMedia, Typography, Card} from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react';
import "./ThemeToggle.css"
  
export default function ThemeToggle(props) {

    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }

    // function to toggle between light and dark theme
    function toggleTheme() {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
        } else {
            setTheme('theme-dark');
        }
    }

    // Immediately invoked function to set the theme on initial load
    // (function () {
    //     if (localStorage.getItem('theme') === 'theme-dark') {
    //         setTheme('theme-dark');
    //         document.getElementById('slider').checked = false;
    //     } else {
    //         setTheme('theme-light');
    //       document.getElementById('slider').checked = true;
    //     }
    // })();

    return (
        <div>
            <label id="switch" class="switch">
                {/* <input type="checkbox" id="slider"/> */}
                <input type="checkbox" onchange="toggleTheme()" id="slider"/>
                <span class="slider round"></span>
            </label>      
        </div>
    );
}