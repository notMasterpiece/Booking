import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RentalDetail extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                this is detail
            </div>
        );
    }
}

RentalDetail.propTypes = {};

export default RentalDetail;
