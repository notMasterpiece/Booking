import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

const RentalCard = ({rental}) => {
    const {_id, title, image, description, dailyRate, createdAt, shared, category} = rental;

    return (
        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
            <div className={`tg-populartour ${category}`}>
                <figure>
                    <Link to={`/rental/${_id}`}><img src={image} alt={title} /></Link>
                    {/*sale*/}
                    {/*<span className="tg-descount">25% Off</span>*/}
                </figure>
                <div className="tg-populartourcontent">
                    <div className="tg-populartourtitle">
                        <h3><Link to={`/rental/${_id}`}>{title}</Link></h3>
                    </div>
                    <div className="tg-description">
                        <p><mark>{description}</mark></p>
                    </div>
                    <div className="tg-populartourfoot">
                        <div className="tg-durationrating">
                            <span className="tg-tourduration">
                                <i className="material-icons">access_time</i>
                                {createdAt}
                            </span>
                            <h3>{shared ? 'shared' : 'noShared'}</h3>
                            {/*<span className="tg-stars">*/}
                                {/*<i className="material-icons">stars</i>*/}
                            {/*</span>*/}
                            {/*<em>(3 Review)</em>*/}
                        </div>
                        <div className="tg-pricearea">
                            {/*old price*/}
                            {/*<del>$2,800</del>*/}
                            <h4>{`$ ${dailyRate}`}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

RentalCard.propTypes = {
    rental: PropTypes.object.isRequired,
};

export default RentalCard;
