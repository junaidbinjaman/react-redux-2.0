const { createStore, applyMiddleware } = require('redux');
const {thunk} = require('redux-thunk');
const axios = require('axios');

// Initial state
const initialState = {
  data: [],
  loading: false,
  error: '',
};

// Reducer
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Thunk action creator for fetching data
const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
  };
};

// Create store with thunk middleware
const store = createStore(dataReducer, applyMiddleware(thunk));

// Subscribe to the store to log the state changes
store.subscribe(() => {
  console.log('Updated state:', store.getState());
});

// Dispatch the fetchData action
store.dispatch(fetchData());
