import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <footer id="tg-footer" className="tg-footer tg-haslayout">
                <div className="tg-fourcolumns">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                                <div className="tg-footercolumn tg-widget tg-widgettext">
                                    <div className="tg-widgettitle">
                                        <h3>About Travlu</h3>
                                    </div>
                                    <div className="tg-widgetcontent">
                                        <div className="tg-description">
                                            <p>Nunc cursus liero purs ac cogue arcu cursus ut sed vitae pulvinar
                                                massaidp nequetiam lore elerisque</p>
                                        </div>
                                        <span>1-800-321-6543</span>
                                        <a href="mailto:info@travlu.com">info@travlu.com</a>
                                        <ul className="tg-socialicons tg-socialiconsvtwo">
                                            <li><a href="javascript:void(0);"><i
                                                className="icon-facebook-logo-outline"></i></a></li>
                                            <li><a href="javascript:void(0);"><i
                                                className="icon-instagram-social-outlined-logo"></i></a></li>
                                            <li><a href="javascript:void(0);"><i
                                                className="icon-twitter-social-outlined-logo"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                                <div className="tg-footercolumn tg-widget tg-widgettravelunews">
                                    <div className="tg-widgettitle">
                                        <h3>Travelu News</h3>
                                    </div>
                                    <div className="tg-widgetcontent">
                                        <ul>
                                            <li>
                                                <figure>
                                                    <a href="javascript:void(0);"><img src="images/thumbnail/img-01.jpg"
                                                                                       alt="image destinations" /></a>
                                                </figure>
                                                <div className="tg-newcontent">
                                                    <h4><a href="javascript:void(0);">Bungee Jumping Trip</a></h4>
                                                    <div className="tg-description">
                                                        <p>Nunc cursus libero purus congue arcu vitae pulvinar</p>
                                                    </div>
                                                    <time dateTime="2017-06-06">Feb 22, 2017</time>
                                                </div>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a href="javascript:void(0);"><img src="images/thumbnail/img-02.jpg"
                                                                                       alt="image destinations" /></a>
                                                </figure>
                                                <div className="tg-newcontent">
                                                    <h4><a href="javascript:void(0);">Trip to White Castle</a></h4>
                                                    <div className="tg-description">
                                                        <p>Nunc cursus libero purus congue arcu vitae pulvinar</p>
                                                    </div>
                                                    <time dateTime="2017-06-06">Feb 22, 2017</time>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                                <div className="tg-footercolumn tg-widget tg-widgetdestinations">
                                    <div className="tg-widgettitle">
                                        <h3>Top Destinations</h3>
                                    </div>
                                    <div className="tg-widgetcontent">
                                        <ul>
                                            <li><a href="javascript:void(0);">Bayonne, Melbourne</a></li>
                                            <li><a href="javascript:void(0);">Greenville, New Jersey</a></li>
                                            <li><a href="javascript:void(0);">The Heights, London</a></li>
                                            <li><a href="javascript:void(0);">West Side, New York</a></li>
                                            <li><a href="javascript:void(0);">Upper East Side, New York</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                                <div className="tg-footercolumn tg-widget tg-widgetnewsletter">
                                    <div className="tg-widgettitle">
                                        <h3>Newsletter</h3>
                                    </div>
                                    <div className="tg-widgetcontent">
                                        <div className="tg-description"><p>Sign up for our mailing list to get latest
                                            updates and offers</p></div>
                                        <form className="tg-formtheme tg-formnewsletter">
                                                <input type="email" name="email" className="form-control"
                                                       placeholder="Your Email" />
                                                    <button type="submit">
                                                        <img src="images/icons/icon-08.png" alt="image destinations" />
                                                    </button>
                                        </form>
                                        <span>We respect your privacy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tg-footerbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <p>Copyright © { new Date().getFullYear() }. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {};

export default Footer;
