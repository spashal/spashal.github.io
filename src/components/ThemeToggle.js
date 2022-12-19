
import { Box, Button, Container } from '@material-ui/core';
import { CardContent, CardMedia, Typography, Card} from '@mui/material';
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import "./ThemeToggle.css"
  
export default function ThemeToggle(props) {
    const theme = props.theme;
    const changeTheme = props.changeTheme;
    // function setTheme(themeName) {
    //     localStorage.setItem('theme', themeName);
    //     document.documentElement.className = themeName;
    // }

    // function to toggle between light and dark theme
    function toggleTheme() {
        console.log("i am working", theme)
        if (theme === 'dark') {
            changeTheme('light');
        } else {
            changeTheme('dark');
        }
    }

    useEffect(() => {console.log("i reloaded")}, [theme]);

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
                {theme === 'dark' ? 
                    <input type="checkbox" value="1" checked={false} onChange={() => toggleTheme()} id="slider"/>
                    :
                    <input type="checkbox" value="0" checked={true} onChange={() => toggleTheme()} id="slider"/>
            }
                <span class="slider round"></span>
            </label>      
        </div>
    );
}