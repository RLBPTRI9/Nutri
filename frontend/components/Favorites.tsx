import React from 'react'
import { useSelector } from 'react-redux'
import { UserState } from '../features/userSlice'

const Favorites = () => {

    const favorites = useSelector<UserState>((state) => state.favorites)

    return (
        <div>helloooo favorites page</div>
    //render favorites below using favorites variable above

    )
}

export default Favorites;