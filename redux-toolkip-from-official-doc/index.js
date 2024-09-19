const {createStore} = require('redux');

// Initial state
const initialState = {
    count: 0,
};

const incrementAction = {
    type: 'INCREMENT',
    payload: {task: 'Learn Redux'}
  };
  
  const decrementAction = {
    type: 'DECREMENT'
  };

// Reducer function
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};

const store = createStore(counterReducer);

const getCount = state => state.count;

const unsubscribe = store.subscribe(() => {
    console.log('State Changed: ', getCount(store.getState()));
})

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});

unsubscribe();
