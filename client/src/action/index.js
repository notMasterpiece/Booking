import axios from 'axios';
import {FETCH_RENTAL_BY_ID, DELETE_SINGLE_RENTAL, FETCH_ALL_RENTALS, GET_ERRORS} from './types';


// get all rentals
export const fetchAllRentals = () => dispatch => {
    axios.get(`/api/v1/rentals/`)
        .then( res => dispatch(fetchAllRentals2(res.data)) )
};

// get all rentals
export const fetchAllRentals2 = rentals => {
    return {
        type: FETCH_ALL_RENTALS,
        payload: rentals
    }
};



// get rental by id
export const fetchRentalById = rentalId => dispatch => {
    axios.get(`/api/v1/rentals/${rentalId}`)
        .then( res => dispatch(acyncFetchRentalById(res.data)) )
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))

};

// get rental by id
export const acyncFetchRentalById = rental => {
    return {
        type: FETCH_RENTAL_BY_ID,
        payload: rental
    }
};


export const deleteSingleRental = () => {
    return {
        type: DELETE_SINGLE_RENTAL
    }
};


