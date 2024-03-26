import './Post.css'

import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Post({ post, index, deletePost }){

    const [likes , setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const incrementLikes = () => {
        setLikes(prev => prev + 1);
    }

    const decrementLikes = () => {
        setDislikes(prev => prev + 1);
    }

    const handleDelete = (index) => {
        deletePost(index)
    };


    return(
        <div className="post-container">
            <h1 className="text">{ post.text }</h1>
            <div className='post-actions-container'>
                <Button className="like-btn" variant="contained" startIcon={<ThumbUpIcon/>} onClick={incrementLikes}>
                    Like {likes}
                </Button>
                <Button className="dislike-btn" variant="contained" startIcon={<ThumbDownIcon/>} onClick={decrementLikes}>
                    Dislike {dislikes}
                </Button>
                <IconButton onClick={() => handleDelete(index)} className='delete-btn' color="info" aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </div>
        </div>
    );
}