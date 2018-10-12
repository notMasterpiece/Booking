import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div id="tg-loginsingup" className="tg-loginsingup open" data-vide-bg="poster: images/singup-img.jpg"
                 data-vide-options="position: 0% 50%">
                <div className="bg" />
                <div className="tg-contentarea tg-themescrollbar mCustomScrollbar _mCS_1">
                    <div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" tabIndex="0">
                        <div id="mCSB_1_container" className="mCSB_container" dir="ltr">
                            <div className="tg-scrollbar">
                                <button type="button" className="close">x</button>
                                <div className="tg-logincontent">
                                    <nav id="tg-loginnav" className="tg-loginnav">
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">My Wishlist</a></li>
                                        </ul>
                                    </nav>
                                    <div className="tg-themetabs">
                                        <ul className="tg-navtbs" role="tablist">
                                            <li role="presentation" className=""><a href="#home" data-toggle="tab"
                                                                                    aria-expanded="false">Already
                                                Registered</a></li>
                                            <li role="presentation" className="active"><a href="#profile"
                                                                                          data-toggle="tab"
                                                                                          aria-expanded="true">New to
                                                Travleu ?</a></li>
                                        </ul>
                                        <div className="tg-tabcontent tab-content">
                                            <div role="tabpanel" className="tab-pane fade" id="home">
                                                <form className="tg-formtheme tg-formlogin">
                                                    <fieldset>
                                                        <div className="form-group">
                                                            <label>Name or Email <sup>*</sup></label>
                                                            <input type="text" name="firstname" className="form-control"
                                                                   placeholder="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Password <sup>*</sup></label>
                                                            <input type="password" name="password"
                                                                   className="form-control" placeholder="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="tg-checkbox">
                                                                <input type="checkbox" name="remember"
                                                                       id="rememberpass" />
                                                                    <label htmlFor="rememberpass">Remember Me</label>
                                                            </div>
                                                            <span><a href="#">Lost your password?</a></span>
                                                        </div>
                                                        <button className="tg-btn tg-btn-lg"><span>update profile</span>
                                                        </button>
                                                    </fieldset>
                                                </form>
                                            </div>
                                            <div role="tabpanel" className="tab-pane fade active in" id="profile">
                                                <form className="tg-formtheme tg-formlogin">
                                                    <fieldset>
                                                        <div className="form-group">
                                                            <label>Name or Email <sup>*</sup></label>
                                                            <input type="text" name="firstname" className="form-control"
                                                                   placeholder="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Password <sup>*</sup></label>
                                                            <input type="password" name="password"
                                                                   className="form-control" placeholder="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Confirm Password <sup>*</sup></label>
                                                            <input type="password" name="password"
                                                                   className="form-control" placeholder="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="tg-checkbox">
                                                                <input type="checkbox" name="remember" id="remember" />
                                                                    <label htmlFor="remember">Remember Me</label>
                                                            </div>
                                                            <span><a href="#">Lost your password?</a></span>
                                                        </div>
                                                        <button className="tg-btn tg-btn-lg"><span>update profile</span>
                                                        </button>
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tg-shareor"><span>or</span></div>
                                    <div className="tg-signupwith">
                                        <h2>Sign in With...</h2>
                                        <ul className="tg-sharesocialicon">
                                            <li className="tg-facebook"><a href="#"><i
                                                className="icon-facebook-1"></i><span>Facebook</span></a></li>
                                            <li className="tg-twitter"><a href="#"><i
                                                className="icon-twitter-1"></i><span>Twitter</span></a></li>
                                            <li className="tg-googleplus"><a href="#"><i
                                                className="icon-google4"></i><span>Google+</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="mCSB_1_scrollbar_vertical"
                             className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" >
                            <div className="mCSB_draggerContainer">
                                <div id="mCSB_1_dragger_vertical" className="mCSB_dragger" >
                                    <div className="mCSB_dragger_bar" />
                                </div>
                                <div className="mCSB_draggerRail" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {};

export default Login;
