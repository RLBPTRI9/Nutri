import React, { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';


const LikeButton = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div id="likeBtn">
        <IconButton id='likeBtn'><FavoriteIcon style={{ color: isActive ? 'green' : 'gray' }}
            onClick={() => setIsActive(!isActive)} /></IconButton>
    </div>
    )
}

export default LikeButton;