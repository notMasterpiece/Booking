import {rentals} from "../rental";
import {FETCH_RENTAL_BY_ID, DELETE_SINGLE_RENTAL} from '../action/types';

const initState = {
    rentals
};


export default (state = initState, action ) => {
    console.log('this is action', action);
    switch (action.type) {
        case FETCH_RENTAL_BY_ID:
            const singleRental = action.payload;
            return {
                ...state,
                singleRental
            };
        case DELETE_SINGLE_RENTAL:
            return {
                ...state,
                singleRental: null
            };
        default:
            return state;
    }
}