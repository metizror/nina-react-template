import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import cartItems from '../../../data/shop/shop.json';
import Countdown from 'react-countdown';

const qty = 1;
// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <Fragment>
            <div className="time-box">
                <span>{hours}<h6 className="mb-0">Hours</h6></span>
            </div>
            <div className="time-box">
                <span>{minutes}<h6 className="mb-0">Minutes</h6></span>
            </div>
            <div className="time-box">
                <span>{seconds}<h6 className="mb-0">Seconds</h6></span>
            </div>
        </Fragment>;
    }
};

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceTotal: cartItems.reduce((totalPrice, item) => totalPrice + item.price * qty, 0),
            cartItems: cartItems
        };
    }
    render() {
        return (
            <section className="checkout-page section-padding bg-light-white">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tracking-sec">
                                <div className="tracking-details padding-20 p-relative">
                                    <h5 className="text-light-black fw-600">Sports Shoes</h5>
                                    <span className="text-light-white">Estimated Delivery time</span>
                                    <h6 className="text-light-black fw-500 no-margin">9:00pm-9:10pm</h6>
                                    <div id="add-listing-tab" className="step-app">
                                        <ul className="step-steps">
                                            <li className="done">
                                                <Link to="#"> <span className="number" />
                                                    <span className="step-name">Order sent<br />8:38pm</span>
                                                </Link>
                                            </li>
                                            <li className="active">
                                                <Link to="#"> <span className="number" />
                                                    <span className="step-name">In the works</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#"> <span className="number" />
                                                    <span className="step-name">Out of delivery</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#"> <span className="number" />
                                                    <span className="step-name">Delivered</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tracking-map">
                                    <iframe id="pickupmap" title="map" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1572264.578242286!2d-76.35629003051189!3d39.67605529079796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!3m2!1d40.7127753!2d-74.0059728!4m5!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%20D.%20C.%2C%20DC%2C%20USA!3m2!1d38.9071923!2d-77.0368707!5e0!3m2!1sen!2sin!4v1593620930391!5m2!1sen!2sin" frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                                </div>
                            </div>
                            {/* recipt */}
                            <div className="recipt-sec padding-20">
                                <div className="recipt-name title u-line full-width mb-xl-20">
                                    <div className="recipt-name-box">
                                        <h5 className="text-light-black fw-600 mb-2">Sport Shoes</h5>
                                        <p className="text-light-white ">Estimated Delivery time</p>
                                    </div>
                                    <div className="countdown-box">
                                        <Countdown
                                            date={Date.now() + 31622400000}
                                            renderer={renderer}
                                        />
                                    </div>
                                </div>
                                <div className="u-line mb-xl-20">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="recipt-name full-width padding-tb-10 pt-0">
                                                <h5 className="text-light-black fw-600">Delivery (ASAP) to:</h5>
                                                <span className="text-light-white ">Jhon Moxley</span>
                                                <span className="text-light-white ">Home</span>
                                                <span className="text-light-white ">314 79th St</span>
                                                <span className="text-light-white ">Rite Aid, Brooklyn, NY, 11209</span>
                                                <p className="text-light-white ">(347) 123456789</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="recipt-name full-width padding-tb-10 pt-0">
                                                <h5 className="text-light-black fw-600">Delivery instructions</h5>
                                                <p className="text-light-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="ad-banner padding-tb-10 h-100">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/shop/check1.jpg"} className="img-fluid full-width" alt="banner-adv" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="u-line mb-xl-20">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h5 className="text-light-black fw-600 title">Your Order <span><Link to="#" className="fs-12">Print recipt</Link></span></h5>
                                            <p className="title text-light-white">April 15, 2021 8:38pm <span className="text-light-black">Order #123456789012345</span>
                                            </p>
                                        </div>
                                        <div className="col-lg-12">
                                            {cartItems.slice(0, 4).map((item, i) => (
                                                <div className="checkout-product" key={i}>
                                                    <div className="img-name-value">
                                                        <div className="product-img">
                                                            <Link to={"/shop-details/" + item.id}>
                                                                <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                                            </Link>
                                                        </div>
                                                        <div className="product-value"> <span className="text-light-white">{qty}</span>
                                                        </div>
                                                        <div className="product-name"> <span><Link to={"/shop-details/" + item.id}>{item.title}</Link></span>
                                                        </div>
                                                    </div>
                                                    <div className="amount">
                                                        <span className="text-light-white">ID: #{item.id}</span>
                                                    </div>
                                                    <div className="Category">
                                                        <span className="text-light-white">{item.title}</span>
                                                    </div>
                                                    <div className="price"> <span className="text-light-white">${new Intl.NumberFormat().format((item.price * qty).toFixed(2))}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="payment-method mb-md-40">
                                            <h5 className="text-light-black fw-600">Payment Method</h5>
                                            <div className="method-type"> <i className="far fa-credit-card text-dark-white" />
                                                <span className="text-light-white">Credit Card</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="price-table u-line">
                                            <div className="item"> <span className="text-light-white">Item subtotal:</span>
                                                <span className="text-light-white">${new Intl.NumberFormat().format(this.state.priceTotal.toFixed(2))}</span>
                                            </div>
                                            <div className="item"> <span className="text-light-white">Delivery fee:</span>
                                                <span className="text-light-white">$15.00</span>
                                            </div>
                                            <div className="item"> <span className="text-light-white">Tax and fees:</span>
                                                <span className="text-light-white">$10.00</span>
                                            </div>
                                            <div className="item"> <span className="text-light-white">Driver tip:</span>
                                                <span className="text-light-white">$1.00</span>
                                            </div>
                                        </div>
                                        <div className="total-price padding-tb-10">
                                            <h5 className="title text-light-black fw-500">Total: <span>${new Intl.NumberFormat().format((this.state.priceTotal + 26).toFixed(2))}</span></h5>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex"> <Link to="/checkout" className="btn-first white-btn fw-600 help-btn">Proceed to Checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;