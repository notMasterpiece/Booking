import React, {Component} from 'react';
import logo from '../image/logo.png'
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header id="tg-header" className="tg-header tg-haslayout">
                <div className="container-fluid">
                    <div className="row">
                        <div className="tg-navigationarea tg-headerfixed">
                            <strong className="tg-logo">
                                <Link to={'/'}>
                                    <img src={logo} alt="company logo here" />
                                </Link>
                            </strong>
                            <div className="tg-socialsignin">
                                <ul className="tg-socialicons">
                                    <li><a><i className="icon-facebook-logo-outline" /></a>
                                    </li>
                                    <li><a><i
                                        className="icon-instagram-social-outlined-logo" /></a></li>
                                    <li><a><i
                                        className="icon-twitter-social-outlined-logo" /></a></li>
                                </ul>
                                <div className="tg-userbox">
                                    <Link to={'/sing-up'} id="tg-btnsignin" className="tg-btn"><span>sign in</span></Link>
                                    <div className="dropdown tg-dropdown">
                                        <button className="tg-btndropdown" id="tg-dropdowndashboard" type="button"
                                                data-toggle="dropdown">
                                            <img src="images/author/img-01.jpg" alt="image description" />
                                                <span>john smith</span>
                                                <i className="fa fa-caret-down"></i>
                                        </button>
                                        <ul className="dropdown-menu tg-dropdownusermenu"
                                            aria-labelledby="tg-dropdowndashboard">
                                            <li><a>Dashboard</a></li>
                                            <li><a>Edit Profile</a></li>
                                            <li><a>Sign Out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <nav id="tg-nav" className="tg-nav">
                                <div className="navbar-header">
                                    <a className="navbar-toggle collapsed">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </a>
                                </div>
                                <div id="tg-navigation" className="collapse navbar-collapse tg-navigation">
                                    <ul>
                                        <li className="menu-item-has-children current-menu-item">
                                            <Link to={'/'}>Home</Link>
                                            <ul className="sub-menu">
                                                <li className="current-menu-item"><a>Home ~ Modern</a>
                                                </li>
                                                <li><a>Home ~ Full Screen</a></li>
                                                <li><a>Home ~ Creative</a></li>
                                                <li><a>Home ~ Simple</a></li>
                                                <li><a>Home ~ Video</a></li>
                                            </ul>
                                        </li>
                                        <li><a>destinations</a></li>
                                        <li className="menu-item-has-children menu-item-has-mega-menu"><a>listings</a></li>
                                        <li className="menu-item-has-children"><a>pages</a></li>
                                        <li><a>shop</a></li>
                                        <li><Link to={'/about'}>About</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
