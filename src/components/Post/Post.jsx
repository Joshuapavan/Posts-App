import './Post.css'

import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Button } from "@mui/material";

export default function Post(props){

    const [likes , setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const incrementLikes = () => {
        setLikes(prev => prev + 1);
    }

    const decrementLikes = () => {
        setDislikes(prev => prev + 1);
    }


    return(
        <div className="post-container">
            <h1 className="text">Text</h1>
            <Button className="like-btn" variant="contained" startIcon={<ThumbUpIcon/>} onClick={incrementLikes}>
                Like {likes}
            </Button>
            <Button className="dislike-btn" variant="contained" startIcon={<ThumbDownIcon/>} onClick={decrementLikes}>
                Dislike {dislikes}
            </Button>
        </div>
    );
}