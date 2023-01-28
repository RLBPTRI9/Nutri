import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthState, ReturnedState } from '../features/authSlice';
import { Recipe } from '../features/interfaces/recipe';
import { UserState } from '../features/userSlice';
import RecipeCard from './RecipeCard';
import { store } from '../store/store';

const Favorites = () => {
  //   const favorites: Recipe[] = useSelector<UserState, Recipe[]>(
  //     (state) => state.favorites
  //   );
  const user = useSelector<ReturnedState, ReturnedState>((state) => state);
  const favorites = user.data.favorites;

  //   const store1 = store.getState();

  //   console.log(store1);
  //   console.log(auth.username);
  console.log('user ', user);
  console.log('favs', user.data.favorites ?? null);
  // if (!auth.isLoggedIn) return Navigate({ to: '/login' });

  return (
    <div className='Favorites'>
      {user.auth.username !== undefined ? (
        <div className='Favs'>
          {favorites?.length ? (
            favorites.map((recipe) => (
              <RecipeCard
                key={recipe.recipeId}
                name={recipe.recipeName}
                image={recipe.image}
                url={recipe.sourceUrl}
                source={recipe.source}
                ingredients={recipe.ingredients}
              />
            ))
          ) : (
            <h1>No favs</h1>
          )}
        </div>
      ) : (
        <div className='NoAuth'>
          <h1>Not logged in</h1>
          <p>
            Please{' '}
            <span>
              <Link to='/login'>Login</Link>
            </span>
          </p>
        </div>
      )}
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
