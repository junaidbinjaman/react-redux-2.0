import { createStore } from "redux";

const initialStates = {
  movies: [],
  basket: [],
  likedMovies: []
};

function reducer(state = initialStates, action) {
  switch(action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [...state.movies, action.payload]
      }
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload]
      }
    case 'ADD_TO_LIKED_MOVIES':
      return {
        ...state,
        likedMovies: [...state.likedMovies, action.payload]
      }
    default: 
    return state;
  }
}

const store = createStore(reducer);
export default store;