import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchRentalById, deleteSingleRental} from '../../action/index';

import Spinner from '../spinner/Spinner';

class RentalDetail extends Component {

    componentDidMount() {
        const rentalId = this.props.match.params.id;
        const {fetchRentalById} = this.props;
        fetchRentalById(rentalId);
    }

    componentWillUnmount() {
        console.log('delete');
        this.props.deleteSingleRental();
    }



    render() {


        if(this.props.singleRental.singleRental) {
            const { title, image, datailimage, description } = this.props.singleRental.singleRental[0];

            return (
                <Fragment>
                    <section className="tg-parallax tg-innerbanner bg-tg" style={{backgroundImage : `url(${datailimage})`}}>
                        <div className="tg-sectionspace tg-haslayout">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1>{title}</h1>
                                        <h2>{description}</h2>
                                        <ol className="tg-breadcrumb">
                                            <li><Link to={'/'}>Home</Link></li>
                                            <li className="tg-active">Listing</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <main id="tg-main" className="tg-main tg-sectionspace tg-haslayout tg-bglight">
                        <div className="container">
                            <div className="row">
                                <div id="tg-twocolumns" className="tg-twocolumns">
                                    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 pull-left">
                                        <div id="tg-content" className="tg-content">
                                            <div className="tg-listing tg-listingvsix">
                                                <div className="tg-populartour tg-populartourvtwo">
                                                    <figure>
                                                        <a href="tourbookingdetail.html"><img
                                                            src={image} alt="image destinations" /></a>
                                                    </figure>
                                                    <div className="tg-populartourcontent">
                                                        <div className="tg-populartourtitle">
                                                            <h3><a href="tourbookingdetail.html">City Tours in Europe,
                                                                Paris</a></h3>
                                                        </div>
                                                        <div className="tg-description">
                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                                sed diam nonummy Etiam porta sem malesuada magna mollis
                                                                euismod.</p>
                                                            <p>Maecenas sed diam eget risus varius blandit sit amet non
                                                                magna. Vivamus sagittis lacus vel augue laoreet...</p>
                                                        </div>
                                                        <div className="tg-populartourfoot">
                                                            <div className="tg-durationrating">
                                                                <span className="tg-tourduration">7 Days</span>
                                                                <span className="tg-stars"><span></span></span>
                                                                <em>(3 Review)</em>
                                                            </div>
                                                            <ul className="tg-likeshare">
                                                                <li className="tg-shareicon">
                                                                    <a href="javascript:void(0);"><i
                                                                        className="icon-share-button-outline"></i><span>share</span></a>
                                                                    <ul className="tg-share">
                                                                        <li><a href="javascript:void(0);"><i
                                                                            className="icon-twitter"></i></a></li>
                                                                        <li><a href="javascript:void(0);"><i
                                                                            className="icon-facebook"></i></a></li>
                                                                        <li><a href="javascript:void(0);"><i
                                                                            className="icon-pinterest"></i></a></li>
                                                                    </ul>
                                                                </li>
                                                                <li><a href="javascript:void(0);"><i
                                                                    className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="tg-priceavailability">
                                                            <div className="tg-availhead">
                                                                <time dateTime="2017-12-12">Availability : Jan 16’ - Dec
                                                                    16’
                                                                </time>
                                                            </div>
                                                            <div className="tg-pricearea">
                                                                <span>From</span>
                                                                <h4>$2,500</h4>
                                                            </div>
                                                            <a className="tg-btn" href="tourbookingdetail.html"><span>Explore Tour</span></a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 pull-right">
                                        <aside id="tg-sidebar" className="tg-sidebar">
                                            <div className="tg-widget tg-widgetlatesttour">
                                                <div className="tg-widgettitle">
                                                    <h3>Latest Tour</h3>
                                                </div>
                                                <div className="tg-widgetcontent">
                                                    Lorem ipsum.
                                                </div>
                                            </div>

                                            <div className="tg-widget tg-widgetcatagories">
                                                <div className="tg-widgettitle">
                                                    <h3>Tour Category</h3>
                                                </div>
                                                <div className="tg-widgetcontent">
                                                    <ul>
                                                        <li><a href="#"> <i className="material-icons">trending_up</i> Family Friendly Tours</a></li>
                                                        <li><a href="#"> <i className="material-icons">trending_up</i> Behave in Foreign Land</a></li>
                                                        <li><a href="#"> <i className="material-icons">trending_up</i> Hiking in The Wild</a></li>
                                                        <li><a href="#"> <i className="material-icons">trending_up</i> Luxury Tours in Alps</a></li>
                                                        <li><a href="#"> <i className="material-icons">trending_up</i> Holiday &amp; Seasonal Tours</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </Fragment>
            );
        } else {
            return <Spinner />
        }


    }
}

RentalDetail.propTypes = {
    fetchRentalById: PropTypes.func.isRequired,
    singleRental: PropTypes.object.isRequired
};

export default connect(state => ({
    singleRental: state.rentals
}), {fetchRentalById, deleteSingleRental})(RentalDetail);
