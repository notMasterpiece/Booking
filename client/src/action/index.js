import {rentals} from '../rental';
import {FETCH_RENTAL_BY_ID, DELETE_SINGLE_RENTAL} from './types';



export const fetchRentalById = rentalId => dispatch => {

    let singleRental = [];
    setTimeout(function () {
        singleRental = rentals.filter(rental => parseFloat(rental.id) === parseFloat(rentalId));
        dispatch(acyncFetchRentalById(singleRental));
    }, 3000);

};


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


