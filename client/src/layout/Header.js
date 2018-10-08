import React, {Component} from 'react';
import logo from '../image/logo.png'
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';
import 'material-design-icons/iconfont/material-icons.css';
import '../css/main.css';
import '../css/color.css';
import '../App.css';

class Header extends Component {
    render() {
        return (
            <header id="tg-header" className="tg-header tg-haslayout">
                <div className="container-fluid">
                    <div className="row">
                        <div className="tg-navigationarea tg-headerfixed">
                            <strong className="tg-logo"><a href="index.html"><img src={logo} alt="company logo here" /></a></strong>
                            <div className="tg-socialsignin">
                                <ul className="tg-socialicons">
                                    <li><a href="javascript:void(0);"><i className="icon-facebook-logo-outline"></i></a>
                                    </li>
                                    <li><a href="javascript:void(0);"><i
                                        className="icon-instagram-social-outlined-logo"></i></a></li>
                                    <li><a href="javascript:void(0);"><i
                                        className="icon-twitter-social-outlined-logo"></i></a></li>
                                </ul>
                                <div className="tg-userbox">
                                    <a id="tg-btnsignin" className="tg-btn" href="#tg-loginsingup"><span>sign in</span></a>
                                    <div className="dropdown tg-dropdown">
                                        <button className="tg-btndropdown" id="tg-dropdowndashboard" type="button"
                                                data-toggle="dropdown">
                                            <img src="images/author/img-01.jpg" alt="image description" />
                                                <span>john smith</span>
                                                <i className="fa fa-caret-down"></i>
                                        </button>
                                        <ul className="dropdown-menu tg-dropdownusermenu"
                                            aria-labelledby="tg-dropdowndashboard">
                                            <li><a href="dashboard.html">Dashboard</a></li>
                                            <li><a href="dashboard.html">Edit Profile</a></li>
                                            <li><a href="javascript:void(0);">Sign Out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <nav id="tg-nav" className="tg-nav">
                                <div className="navbar-header">
                                    <a href="#menu" className="navbar-toggle collapsed">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </a>
                                </div>
                                <div id="tg-navigation" className="collapse navbar-collapse tg-navigation">
                                    <ul>
                                        <li className="menu-item-has-children current-menu-item"><a
                                            href="javascript:void(0);">Home</a>
                                            <ul className="sub-menu">
                                                <li className="current-menu-item"><a href="index.html">Home ~ Modern</a>
                                                </li>
                                                <li><a href="indexv2.html">Home ~ Full Screen</a></li>
                                                <li><a href="indexv3.html">Home ~ Creative</a></li>
                                                <li><a href="indexv4.html">Home ~ Simple</a></li>
                                                <li><a href="indexv5.html">Home ~ Video</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="destinations.html">destinations</a></li>
                                        <li className="menu-item-has-children menu-item-has-mega-menu"><a
                                            href="javascript:void(0);">listings</a>
                                            <div className="mega-menu">
                                                <ul>
                                                    <li><a href="listingvone.html">list style one</a></li>
                                                    <li><a href="listingvtwo.html">list style two</a></li>
                                                    <li><a href="listingvthree.html">list style three</a></li>
                                                    <li><a href="listingvfour.html">list style four</a></li>
                                                    <li><a href="listingvfive.html">list style five</a></li>
                                                    <li><a href="listingvsix.html">list style six</a></li>
                                                </ul>
                                                <div className="tg-sliderarea">
                                                    <h2>Popular Tours</h2>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="menu-item-has-children"><a href="javascript:void(0);">pages</a>
                                            <ul className="sub-menu">
                                                <li><a href="faqs.html">FAQ’s</a></li>
                                                <li><a href="packages.html">Table</a></li>
                                                <li><a href="aboutus.html">About Us</a></li>
                                                <li><a href="contactus.html">Contact us</a></li>
                                                <li><a href="billingdetail.html">Billing Detail</a></li>
                                                <li><a href="404error.html">404 Error</a></li>
                                                <li><a href="comingsoon.html">Coming Soon</a></li>
                                                <li><a href="cart.html">cart</a></li>
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Tours</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="tourcatagory.html">Tour Catagory</a></li>
                                                        <li><a href="tourbookingdetail.html">Tour Detail</a></li>
                                                        <li><a href="tourpaymentdetail.html">Tour Payment</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="shop.html">shop</a></li>
                                        <li><a href="blog.html">blog</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div></div>
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
