import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const wishlistlength = 5;
const cartlength = 5;

class Topbar extends Component {
    render() {
        return (
            <div className="top-header">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="top-left">
                                <ul className="top-info">
                                    <li><Link to="#"><i className="fas fa-phone-alt" /> +000 123 45678</Link></li>
                                    <li><Link to="#"><i className="fas fa-envelope" /> info@example.com</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="righ-sec">
                                <div className="top-right">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-facebook-square" /></Link> </li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-twitter-square" /></Link> </li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-instagram" /></Link> </li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-linkedin" /></Link> </li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-youtube" /></Link> </li>
                                    </ul>
                                </div>
                                <div className="right-side-navigation">
                                    <ul>
                                        <li className="wishlist"> <Link to="/wishlist" className="text-dark-red"><i className="pe-7s-like" /></Link>
                                            <span className="cart">{wishlistlength}</span>
                                        </li>
                                        <li className="cart"> <Link to="/cart" className="text-dark-red"><i className="pe-7s-cart" /></Link>
                                            <span className="cart">{cartlength}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;