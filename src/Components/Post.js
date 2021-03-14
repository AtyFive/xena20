//rfce + enter
//40-51 - finished
import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import FavoriteIcon from '@material-ui/icons/Favorite';

import SendIcon from '@material-ui/icons/Send';

function Post() {
    return (
        <div>
            <Paper elevation={3}>
            <div className = 'post'>
                <div className = 'post__header'>
                    <Avatar 
                        className = 'post__avatar'
                        alt = "Kakuwa"
                        src = 'https://firebasestorage.googleapis.com/v0/b/xena-f7273.appspot.com/o/queen.jpg?alt=media&token=63f644e4-a20c-4aee-9d3c-a3b89a743327'
                    />
                    <h3>XENA Graduates cum laude!</h3>
                </div>

                <img 
                    className = 'post__Image'
                    src = 'https://media.gettyimages.com/photos/high-school-graduates-in-a-row-picture-id1140162133?s=612x612' 
                    alt = ''
                />
                <div className='like_share'>
                    <ScreenShareIcon color="action"/>
                    <FavoriteIcon color="action"/>
                    
                    <SendIcon color="action"/>
                </div>
                <h4 className = 'post__text'><strong>Taras Grytsa: </strong>XENA's graduation!!! </h4>
                <h4 className = 'post__text'><strong>GrandPa Lewis: </strong>WOW! She's beautiful</h4>
            </div>
            </Paper>

            
            <Paper elevation={3}>
                <div className = 'update_holder'>
                    <Avatar alt="Remy Sharp" src= 'https://firebasestorage.googleapis.com/v0/b/xena-f7273.appspot.com/o/queen.jpg?alt=media&token=63f644e4-a20c-4aee-9d3c-a3b89a743327' />
                    <div className = 'update'>
                        <span>Uploaded new </span> 
                        <span className='elementRef'>image</span> in 
                        <span className='groupName'> Marc Group</span>
                    </div>
                </div>
            </Paper>
            
        </div>

    )
}

export default Post
