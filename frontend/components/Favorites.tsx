import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AuthState } from '../features/authSlice';
import { Recipe } from '../features/interfaces/recipe';
import { UserState } from '../features/userSlice';
import RecipeCard from './RecipeCard';
import { store } from '../store/store';

const Favorites = () => {
  const favorites: Recipe[] = useSelector<UserState, Recipe[]>(
    (state) => state.favorites
  );
  const auth: AuthState = useSelector<AuthState, AuthState>((state) => state);

  //   const store1 = store.getState();

  //   console.log(store1);
  console.log(auth);
  //   console.log(favorites);
  // if (!auth.isLoggedIn) return Navigate({ to: '/login' });

  return (
    <div className='Favorites'>
      {/* {auth.username ? ( */}
      <div className='Favs'>
        {favorites?.length ? (
          favorites.map((recipe) => (
            <RecipeCard
              key={recipe.recipeId}
              name={recipe.recipeName}
              image={recipe.image}
              url={recipe.sourceUrl}
              source={recipe.sourceUrl}
              ingredients={recipe.ingredients}
            />
          ))
        ) : (
          <h1>No favs</h1>
        )}
      </div>
      {/* ) : (
        <h1>Not logged in</h1>
      )} */}
      {/* <div className='Favs'>
        {favorites?.length ? (
          favorites.map((recipe) => (
            <RecipeCard
              key={recipe.recipeId}
              name={recipe.recipeName}
              image={recipe.image}
              url={recipe.sourceUrl}
              source={recipe.sourceUrl}
              ingredients={recipe.ingredients}
            />
          ))
        ) : (
          <h1>No favs</h1>
        )}
      </div> */}
    </div>
  );
};

export default Favorites;

//   name?: string;
//   image?: string;
//   healthLabels?: string[];
//   url?: string;
//   ingredients?: any;
//   source?: string;
//   props?: any;
