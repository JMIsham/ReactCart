import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import cartReducer from './cart-reducer';
import foodReducer from './food-reducer';

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer,
    cartReducer: cartReducer,
    foodReducer: foodReducer
});

export default reducers;
