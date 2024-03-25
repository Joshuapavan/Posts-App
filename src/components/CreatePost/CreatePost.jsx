import './CreatePost.css'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function CreatePost(){

    return(
        <div className='create-posts-container'>
            <TextField className='post-input' id="outlined-basic" label="Write something" variant="filled"
            color="primary" />
            <Button  className="create-btn" variant='contained'> 
            <AddIcon/>
            </Button>
        </div>
    );
}
