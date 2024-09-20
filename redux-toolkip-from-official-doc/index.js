const {createStore, applyMiddleware, combineReducers} = require('redux');
const thunk = require('redux-thunk').default;
const axios = require('axios');
const logger = require('redux-logger').createLogger();

// Initial state
const initialState = {
    count: 0,
};

const incrementAction = {
    type: 'INCREMENT',
    payload: {task: 'Learn Redux'},
};

const decrementAction = {
    type: 'DECREMENT',
};

// Reducer functions
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

const userReducer = (state = {name: 'Anonymous'}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));

const getCount = (state) => state.count;

// const unsubscribe = store.subscribe(() => {
//     console.log('State Changed: ', getCount(store.getState()));
// })

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'SET_USER', payload: 'Junaid Bin Jaman'});
store.dispatch({type: 'INCREMENT'});

// unsubscribe();
