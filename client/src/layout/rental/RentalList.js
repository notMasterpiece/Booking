import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {rentals} from '../../rental';

import RentalCard from './RentalCard';

class RentalList extends Component {
    constructor(props) {
        super(props);
    }


    renderRentalList = () => {
         return rentals.map(rental => {
            return <RentalCard
                        key={rental.id}
                        rental={rental}
                    />
        })
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
                                    <li className="tg-active"><a>1</a></li>
                                    <li><a>2</a></li>
                                    <li><a>3</a></li>
                                    <li><a>4</a></li>
                                    <li className="tg-nextpage"><a><i className="fa fa-angle-right" /></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

RentalList.propTypes = {};

export default RentalList;
