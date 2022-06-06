import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import shopblock from '../../../data/shop/shop.json';
import { handleOutofStock } from '../../../helper/shophelper';
import Quickview from '../../layouts/Quickview';
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import Countdown from 'react-countdown';

const quickviewtip = (
    <Tooltip>
        Quick View
    </Tooltip>
);
const wishlisttip = (
    <Tooltip>
        Add to Wishlist
    </Tooltip>
);
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
            <div className="counter-box">
                <span>{days}<p className="mb-0">Days</p></span>
            </div>
            <div className="counter-box">
                <span>{hours}<p className="mb-0">Hr</p></span>
            </div>
            <div className="counter-box">
                <span>{minutes}<p className="mb-0">Min</p></span>
            </div>
            <div className="counter-box">
                <span>{seconds}<p className="mb-0">Sec</p></span>
            </div>
        </Fragment>;
    }
};

class Shopbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
            lastActiveBox: -1,
        };
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
    }
    // Modal
    modalShow(index) {
        this.setState({ modalshow: true, lastActiveBox: index });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }
    render() {
        return (
            <section className="section-padding our-product">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title">Our Featured Products</h3>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-8">
                            <div className="row">
                                {shopblock.slice(0, 8).map((item, i) => (
                                    <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="product-box mb-md-20">
                                            <div className="product-img">
                                                <Link to={"/shop-details/" + item.id}>
                                                    <img src={process.env.PUBLIC_URL + "/" + item.image[0]} className="img-fluid full-width" alt={item.title} />
                                                </Link>
                                                <div className="product-badge">
                                                    {item.sale === true ?
                                                        <div className="product-label new">
                                                            <span>Sale</span>
                                                        </div>
                                                        : ''}
                                                    {item.discount > 0 || item.discount !== '' ? <div className="product-label discount">
                                                        <span>-{item.discount}%</span>
                                                    </div> : ''}

                                                </div>
                                                <div className="button-group">
                                                    <OverlayTrigger placement="left" overlay={wishlisttip}>
                                                        <Link to="#" > <i className="pe-7s-like" /> </Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="left" overlay={quickviewtip}>
                                                        <Link to="#" onClick={(e) => this.modalShow(item.id)}> <i className="pe-7s-search" /> </Link>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="cart-hover">
                                                    {item.stock === true ? <button type="button" className="btn-cart fw-600">Add To Cart</button> : <button type="button" className="btn-cart fw-600" onClick={handleOutofStock}>Add To Cart</button>}
                                                </div>
                                            </div>
                                            <div className="product-caption text-center">
                                                <div className="product-status">
                                                    <ul className="product-raised">
                                                        <li><strong>Distribute:</strong> {new Intl.NumberFormat().format(item.sold)}</li>
                                                        <li><strong>Goal:</strong><span className="text-highlight"> {new Intl.NumberFormat().format(item.goal)}</span></li>
                                                    </ul>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-color" style={{ width: (item.sold * 100) / item.goal + '%' }} />
                                                    </div>
                                                </div>
                                                <h6 className="product-title fw-500 mt-10"><Link to={"/shop-details/" + item.id} className="text-color-secondary">{item.title}</Link></h6>
                                                <div className="product-money mt-10">
                                                    <span className="text-light-green fw-600 fs-16">${new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}</span>{
                                                        item.discount > 0 || item.discount !== '' ? <span className="text-price">${new Intl.NumberFormat().format((item.price).toFixed(2))}</span> : ''
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Modal (Quick View) */}
                                <Modal show={this.state.modalshow} className="quick-view-modal" onHide={this.modalClose} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
                                    <Modal.Body>
                                        <button type="button" className="close" onClick={this.modalClose}>×</button>
                                        <Quickview productId={this.state.lastActiveBox} />
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4">
                            <div className="large-product-box  p-relative">
                                <div className="featured-product-box box-shadow">
                                    <div className="featured-pro-title">
                                        <h4 className="fs-22"><strong className="text-color-secondary"> Deal</strong> of The Week</h4>
                                    </div>
                                    <div className="featured-pro-content">
                                        <div className="featured-pro-text">
                                            <h6><Link to="#"> Artistic Souvenir Takeaway</Link></h6>
                                            <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit, sed do eiusmod</p>
                                            <p className="price">$244</p>
                                        </div>
                                    </div>
                                    <div className="featured-pro-img">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/shop/featured2.jpg"} alt="pro-img" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="featured-pro-timer">
                                        <div className="countdown-box">
                                            <Countdown
                                                date={Date.now() + 31622400000}
                                                renderer={renderer}
                                            />
                                        </div>
                                    </div>
                                    <div className="featured-pro-bottom">
                                        <ul>
                                            <li>Distribute: <strong>150000 </strong></li>
                                            <li>Goal: <strong>200000</strong> </li>
                                        </ul>
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

export default Shopbox;