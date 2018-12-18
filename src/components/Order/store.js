import { listProductData } from './firebaseConnect';

var redux = require('redux');
const noteInitialState = {
    testConnect: 'testthoi'
}

const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return state
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

export default store;