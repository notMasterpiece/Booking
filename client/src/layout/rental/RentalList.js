import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RentalCard from './RentalCard';

import {connect} from 'react-redux';
import {fetchAllRentals} from '../../action/index';

class RentalList extends Component {


    componentWillMount() {
        this.props.fetchAllRentals();
    }


    renderRentalList = () => {
        const {rentals} = this.props.rentals;
        if(rentals.length > 0) {
            return rentals.map(rental => {
                return <RentalCard key={rental._id} rental={rental} />
            })

        } else {
            return  <p>Loading ...</p>
        }


    };

    render() {

        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div id="tg-content" className="tg-content">
                        <div className="tg-listing tg-listingvfive">
                            { this.renderRentalList() }
                            <div className="clearfix" />
                            <nav className="tg-pagination">
                                <ul>
                                    <li className="tg-active"><a href='1'>1</a></li>
                                    <li><a href='1'>2</a></li>
                                    <li><a href='1'>3</a></li>
                                    <li><a href='1'>4</a></li>
                                    <li className="tg-nextpage">
                                        <a href="1"><i className="fa fa-angle-right" /></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

RentalList.propTypes = {
    rentals: PropTypes.object.isRequired
};

export default connect(state => ({
    rentals: state.rentals
}), {fetchAllRentals})(RentalList);
