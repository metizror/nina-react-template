import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div className="inner-wrapper">
                <div className="container-fluid no-padding">
                    <div className="row no-gutters overflow-auto">
                        <div className="col-md-6">
                            <div className="main-banner">
                                <img src={process.env.PUBLIC_URL + "/assets/img/slider.jpg"} className="img-fluid full-width main-img" alt="banner" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="section-2 user-page main-padding">
                                <div className="login-sec">
                                    <div className="login-box">
                                        <form>
                                            <h4 className="text-light-black fw-600">Sign in with your Ecom account</h4>
                                            <div className="row">
                                                <div className="col-12">
                                                    <p className="text-light-black">Have a corporate username? <Link to="#">Click here</Link>
                                                    </p>
                                                    <div className="form-group">
                                                        <label className="text-light-white fs-14">Email</label>
                                                        <input type="email" name="#" className="form-control form-control-submit" placeholder="Email I'd" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="text-light-white fs-14">Password</label>
                                                        <input type="password" id="password-field" name="#" className="form-control form-control-submit" defaultValue="password" placeholder="Password" required />
                                                        <div data-name="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                                                    </div>
                                                    <div className="form-group checkbox-reset">
                                                        <label className="custom-checkbox mb-0">
                                                            <input type="checkbox" name="#" /> <span className="checkmark" /> Keep me signed in</label> <Link to="#">Reset password</Link>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn-second-2 btn-submit full-width">Sign in</button>
                                                    </div>
                                                    <div className="form-group text-center"> <span>or</span>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn-second-2 btn-facebook full-width">
                                                            <img src={process.env.PUBLIC_URL + "/assets/img/facebook-logo.svg"} alt="btn logo" />Continue with Facebook</button>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn-second-2 btn-google full-width">
                                                            <img src={process.env.PUBLIC_URL + "/assets/img/google-logo.png"} alt="btn logo" />Continue with Google</button>
                                                    </div>
                                                    <div className="form-group text-center mb-0"> <Link to="/register">Create your account</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;