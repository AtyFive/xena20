//rfce + enter
//40-51 - finished
import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar';
//import Logo from './images/xena_logo.png';

function Post() {
    return (
        <div className = 'post'>
            <div className = 'post__header'>
                <Avatar 
                    className = 'post__avatar'
                    alt = "Kakuwa"
                    src = ''
                />
                <h3>XENA Graduates cum laude!</h3>
            </div>

            <img 
                className = 'post__Image'
                src = 'https://media.gettyimages.com/photos/high-school-graduates-in-a-row-picture-id1140162133?s=612x612' 
                alt = ''
            />
            <h4 className = 'post__text'><strong>Taras Grytsa: </strong>XENA's graduation!!! </h4>
            <h4 className = 'post__text'><strong>GrandPa Lewis: </strong>WOW! She's beautiful</h4>
        </div>
    )
}

export default Post
