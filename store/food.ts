import {createStore} from 'redux';

const initialState = {
    foods: [],
    basket: [],
    likedFood: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FOOD':
            return {
                ...state,
                foods: [...state.foods, action.payload]
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case 'ADD_TO_LIKED_FOOD':
            return {
                ...state,
                likedFood: [...state.likedFood, action.payload]
            }
        default: 
        return state;
    }
}

const foodStore = createStore(reducer);

export default foodStore;