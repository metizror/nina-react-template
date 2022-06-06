import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getProduct, handleOutofStock, getCategories, getTags } from '../../helper/shophelper';
import { Rating } from '../../helper/helper';

class Quickview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    };

    DecreaseItem = () => {
        if (this.state.clicks < 1) {
            this.setState({
                clicks: 0,
            });
        } else {
            this.setState({
                clicks: this.state.clicks - 1,
            });
        }
    };
    handleChange(event) {
        this.setState({ clicks: event.target.value });
    }
    render() {
        const productId = this.props.productId;
        const modalContent = getProduct(productId);
        return (
            <div className="product-details-inner">
                <div className="row">
                    <div className="col-lg-5 align-self-center">
                        <div className="shop-detail-image">
                            <div className="detail-slider">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <Link to={"/shop-details/" + modalContent.id} className="popup">
                                                <img src={process.env.PUBLIC_URL + "/" + modalContent.image[0]} className="img-fluid full-width" alt={modalContent.title} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="shop-detail-contents mb-md-40 mt-md-40">
                            <div className="shop-detail-content-wrapper">
                                <h3 className="text-custom-black">{modalContent.title}</h3>
                            </div>
                            <div className="ratings d-flex mb-xl-20">
                                {Rating(modalContent.rating)}
                                <div className="pro-review"> <span>{modalContent.reviews.length} Reviews</span>
                                </div>
                            </div>
                            <div className="price">
                                <h4 className="text-custom-red price-tag">
                                    <span className="text-custom-red price-tag mr-2">${new Intl.NumberFormat().format((modalContent.price * (100 - modalContent.discount) / 100).toFixed(2))}</span>
                                    {
                                        modalContent.discount > 0 || modalContent.discount !== '' ? <span className="text-light-white fw-400 fs-14">${new Intl.NumberFormat().format((modalContent.price).toFixed(2))}</span> : ''
                                    }
                                </h4>
                            </div>
                            <div className="product-full-des mb-20">
                                <p className="mb-0">{modalContent.shortdesc}</p>
                            </div>
                            <div className="availibity mt-20">
                                <h6 className="text-custom-black fw-600">Avability:
          {modalContent.stock === true ? <span className="text-success ml-2">In Stock</span> : <span className="text-danger ml-2">Out Of Stock</span>}
                                </h6>
                            </div>
                            <div className="quantity mb-xl-20">
                                <h6 className="text-custom-black mb-0 mr-2 fw-600">Qty:</h6>
                                <div className="product-qty-input">
                                    <button className="minus-btn" type="button" name="button" onClick={this.DecreaseItem}> <i className="fas fa-minus" />
                                    </button>
                                    <input type="text" className="form-control form-control-qty text-center" name="name" value={this.state.clicks} onChange={this.handleChange.bind(this)} readOnly />
                                    <button className="plus-btn" type="button" name="button" onClick={this.IncrementItem}> <i className="fas fa-plus" />
                                    </button>
                                </div>
                            </div>
                            <div className="shop-bottom">
                                <div className="shop-meta mt-20">
                                    <h6 className="text-custom-black mb-0 fw-600">Categories:</h6>
                                    <ul className="list-inline ml-2">
                                        {getCategories(modalContent.category).slice(0, 3).map((cat, i) => (
                                            <li className="list-inline-item" key={i}>
                                                <Link to={"/shop/cat/" + cat.id}>{cat.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="shop-meta mt-20">
                                    <h6 className="text-custom-black mb-0 fw-600">Tags:</h6>
                                    <ul className="list-inline ml-2">
                                        {getTags(modalContent.tags).slice(0, 3).map((tag, i) => (
                                            <li className="list-inline-item" key={i}>
                                                <Link to={"/shop/tag/" + tag.id}>{tag.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="product-btn mt-20">
                                    {modalContent.stock === true ? <button type="button" className="btn-solid with-line ml-2">Add To Cart <i className="pe-7s-cart" /></button> : <button type="button" className="btn-solid with-line ml-2" onClick={handleOutofStock}>Add To Cart <i className="pe-7s-cart" /></button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quickview;