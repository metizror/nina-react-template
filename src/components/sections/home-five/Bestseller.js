import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopblock from '../../../data/shop/shop.json';
import { handleOutofStock } from '../../../helper/shophelper';
import Quickview from '../../layouts/Quickview';
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";

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


class Bestseller extends Component {
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
            <section className="recent-order section-padding">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left title">
                                <h3 className="text-light-black header-title">NINA Museum Design Store</h3>
                                <span className="fs-16"><Link to="/shop-left">See All Bestseller</Link></span>
                            </div>
                        </div>
                        {shopblock.slice(0, 6).map((item, i) => (
                            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6" key={i}>
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
            </section>
        );
    }
}

export default Bestseller;