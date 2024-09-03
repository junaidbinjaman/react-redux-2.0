'use client';
import Image from 'next/image';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';

export default function Home() {
    const [movieTitle, setMovieTitle] = useState('');
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);
    const basket = useSelector((state) => state.basket);
    const likedMovies = useSelector((state) => state.likedMovies);

    function handleAddMovie() {
        dispatch({type: 'ADD_MOVIE', payload: movieTitle});
        setMovieTitle('');
    }

    function handlerAddToBasket(movie) {
        dispatch({type: 'ADD_TO_BASKET', payload: movie});
    }

    function handleAddToLikedMovies(movies) {
        dispatch({type: 'ADD_TO_LIKED_MOVIES', payload: movies})
    }

    return (
        <main>
            <div>
                <h1>My Movie List</h1>
            </div>
            <div>
                <input
                    type='text'
                    placeholder='Enter a movie title'
                    value={movieTitle}
                    onChange={(e) => setMovieTitle(e.target.value)}
                />
                <button onClick={handleAddMovie}>Add Movie</button>
            </div>
            <h2>My Movies</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        {movie}
                        <button onClick={() => handlerAddToBasket(movie)}>Add To Basket</button>
                        <button onClick={() => handleAddToLikedMovies(movie)}>Like</button>
                    </li>
                ))}
            </ul>
            <h2>Basket {basket.length}</h2>
            <ul>
                {basket.map((movie, index) => (
                    <li key={index}>
                        {movie}
                    </li>
                ))}
            </ul>
            <h2>Liked Movies {likedMovies.length}</h2>
            <ul>
                {likedMovies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
        </main>
    );
}
