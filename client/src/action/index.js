import {rentals} from '../rental';
import axios from 'axios';
import {FETCH_RENTAL_BY_ID, DELETE_SINGLE_RENTAL} from './types';



export const fetchRentalById = rentalId => dispatch => {

    axios.get(`http://localhost:3001/api/v1/rentals/${rentalId}`)
        .then( res => dispatch(acyncFetchRentalById(res)) )

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


