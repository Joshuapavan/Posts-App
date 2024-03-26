import './CreatePost.css'

import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import { useState } from 'react';



export default function CreatePost({ addPost }){

    const [text, setText] = useState('');

    const handleAddPost = () =>{
        if( text.trim() !== '' ){
            addPost({ text });
            setText('');
            document.getElementById('outlined-basic').value = ""
        }
    }

    return(
        <div className='create-posts-container'>
            <TextField className='post-input' id="outlined-basic" label="Write something" variant="filled"
            color="primary" onChange={(e) => setText(e.target.value)}/>
            <Button  className="create-btn" variant='contained' onClick={handleAddPost}> 
                <AddIcon/>
            </Button>
        </div>
    );
}
