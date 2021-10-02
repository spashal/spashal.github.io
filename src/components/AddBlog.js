import { Button, TextField } from '@mui/material';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {backendURL} from './Variables';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import { Paper } from '@material-ui/core';

export default function MyComponent() {
    const [text, setText] = useState('write here...');
    const [title, setTitle] = useState('title...');
    const [desc, setDesc] = useState('desrciption here...');
   
    function handleTextChange(value) {
      setText(value);
    }

    function handleDescChange(value) {
        setDesc(value);
        console.log("values are", value);
    }

    function handleTitleChange(value) {
        setTitle(value);
    }
    
    function blogEntry() {
        const info = {
            title: title,
            description: desc,
            text: text,
        };
        axios.post(backendURL + 'articles/recordArticle', info, {withCredentials: true})
            .then(res => {
                if(!res.error)
                    console.log(res.message);
                else
                    console.log("Error recieved from server:", res.error);    
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
    <div>
        <Paper>
        <TextField value={title} onChange={(val) => handleTitleChange(val.target.value)} style={{margin: '5%'}}>Title</TextField>
        <TextField value={desc} onChange={(val) => handleDescChange(val.target.value)} style={{margin: '5%'}}>Short Description</TextField>
        <ReactQuill value={text}
                onChange={(val) => handleTextChange(val)} />
        <Button color="primary" onClick={() => blogEntry()} variant="contained" style={{ borderRadius: 50 }}>
            Done
        </Button>
        </Paper>
    </div>
    );
}
