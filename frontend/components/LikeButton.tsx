import React, { useEffect, useState, FC } from 'react';
// import { Outlet } from 'react-router-dom';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch } from '../store/hooks';
import { addFavoriteAsync } from '../features/userSlice';



const LikeButton: FC<{recipeId: string}> = ({recipeId}) => {
    const [isActive, setIsActive] = useState(false);

    const dispatch = useAppDispatch();

    const handleClick = (data:string) => {

        //@ts-ignore
        dispatch(addFavoriteAsync(data));
    }

    return (
        <div id="likeBtn">
        <IconButton id='likeBtn'><FavoriteIcon style={{ color: isActive ? 'green' : 'gray' }}
            onClick={() => {

                handleClick(recipeId)
                setIsActive(!isActive);
        
            }} />
            
            
            
            </IconButton>
    </div>
    )
}

export default LikeButton;