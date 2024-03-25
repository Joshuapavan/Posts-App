import './Post.css'

import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Post(props){

    const [likes , setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [posts, setPosts] = useState([]);

    const incrementLikes = () => {
        setLikes(prev => prev + 1);
    }

    const decrementLikes = () => {
        setDislikes(prev => prev + 1);
    }

    function deletePost(index){
        setPosts(posts.filter((_, i) => i !== index))
    }


    return(
        <div className="post-container">
            <h1 className="text">Text</h1>
            <div className='post-actions-container'>
                <Button className="like-btn" variant="contained" startIcon={<ThumbUpIcon/>} onClick={incrementLikes}>
                    Like {likes}
                </Button>
                <Button className="dislike-btn" variant="contained" startIcon={<ThumbDownIcon/>} onClick={decrementLikes}>
                    Dislike {dislikes}
                </Button>
                <IconButton onClick={() => deletePost(index)} className='delete-btn' color="info" aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </div>
        </div>
    );
}