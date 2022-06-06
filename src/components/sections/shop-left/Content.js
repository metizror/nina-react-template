import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopbox from '../../../data/shop/shop.json';
import { handleOutofStock, getFilteredproducts } from '../../../helper/shophelper';
import Quickview from '../../layouts/Quickview';
import Sidebar from '../../layouts/Shopsidebar';
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import Pagination from 'react-js-pagination';

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

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getproducts(),
            activePage: 1,
            itemPerpage: 12,
            modalshow: false,
            lastActiveBox: -1
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
    getproducts() {
        var cat = this.props.catId ? this.props.catId : '';
        var tag = this.props.tagId ? this.props.tagId : '';
        var minPrice = this.props.minPrice ? this.props.minPrice : '';
        var maxPrice = this.props.maxPrice ? this.props.maxPrice : '';
        var filteredItems = getFilteredproducts(shopbox, { cat, tag, priceFilter: [minPrice, maxPrice] });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
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
        });
        return (
            <section className="section-padding our-product bg-light-white">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 mb-md-40">
                            <Sidebar />
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="full-width">
                                <div className="row">
                                    {paginationData}
                                </div>
                                {/* Modal (Quick View) */}
                                <Modal show={this.state.modalshow} className="quick-view-modal" onHide={this.modalClose} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
                                    <Modal.Body>
                                        <button type="button" className="close" onClick={this.modalClose}>×</button>
                                        <Quickview productId={this.state.lastActiveBox} />
                                    </Modal.Body>
                                </Modal>
                            </div>
                            {/* Pagination Start */}
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.itemPerpage}
                                totalItemsCount={this.state.data.length}
                                pageRangeDisplayed={this.state.data.length}
                                onChange={this.handlePageChange.bind(this)}
                                innerClass="custom-pagination pagination mb-0"
                                activeLinkClass="active"
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                            {/* Pagination End */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;