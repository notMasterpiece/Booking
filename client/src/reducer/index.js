import { combineReducers } from 'redux';

import rentalReducer from './rental';


export default combineReducers({
    rentals: rentalReducer
})