import {FETCH_RENTAL_BY_ID, DELETE_SINGLE_RENTAL, FETCH_ALL_RENTALS, GET_ERRORS} from '../action/types';

const initState = {
    rentals : []
};


export default (state = initState, action ) => {
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
                singleRental: null,
                errors: null
            };
        case FETCH_ALL_RENTALS:
            const rentals = action.payload;
            return {
                ...state,
                rentals
            };
        case GET_ERRORS:
            const errors = action.payload;
            return {
                ...state,
                ...errors
            };

        default:
            return state;
    }
}