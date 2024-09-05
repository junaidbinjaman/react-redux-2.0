const redux = require('redux');
const produce = require('immer').produce;

const initialState = {
    name: 'Junaid Bin Jaman',
    address: {
        street: 'Road #06, House: #35',
        city: 'Boston',
        state: 'MA'
    }
}

const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case STREET_UPDATED: 
        // return {
        //     ...state,
        //     address: {
        //         ...state.address,
        //         street: action.payload
        //     }
        // }
        return produce(state, (draft) => {
            draft.address.street = action.payload;
        })
        default: 
        return state;
    }
}

const store = redux.createStore(reducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('Updated Store', store.getState())
})
store.dispatch(updateStreet('456 Main ST'));
unsubscribe();
