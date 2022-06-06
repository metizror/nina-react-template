import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getProduct, handleOutofStock, getCategories, getTags } from '../../../helper/shophelper';
import shopbox from '../../../data/shop/shop.json';
import { Rating, getAuthor } from '../../../helper/helper';
import Quickview from '../../layouts/Quickview';
import { OverlayTrigger, Tooltip, Modal, Tab, Nav } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs, Navigation } from 'swiper';

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

const settings = {
    spaceBetween: 15,
    loop: true
};
const settingsThumb = {
    spaceBetween: 15,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
}
// install Swiper components
SwiperCore.use([Thumbs, Navigation]);

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
            lastActiveBox: -1,
            clicks: 1,
            thumbsSwiper: null
        };
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
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
    componentDidMount() {
        this.setState({
            thumbsSwiper: null
        });
    }

    // Modal
    modalShow(index) {
        this.setState({ modalshow: true, lastActiveBox: index });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }
    render() {
        const productId = this.props.productId;
        const item = getProduct(productId);
        return (
            <Fragment>
                <section className="section-padding bg-theme-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="shop-detail-image">
                                    <div className="detail-slider">
                                        <Swiper className="swiper-container gallery-top" {...settings} navigation thumbs={{ swiper: this.state.thumbsSwiper }}>
                                            {item.image.map((image, i) => (
                                                <SwiperSlide key={i}>
                                                    <Link to="#" className="popup">
                                                        <img src={process.env.PUBLIC_URL + "/" + image} className="img-fluid full-width" alt={item.title} />
                                                    </Link>
                                                    <div className="shop-type-tag">
                                                        {item.sale === true ? <div className="product-label new type-tag">
                                                            <span>Sale</span>
                                                        </div> : ''}
                                                        {
                                                            item.discount > 0 || item.discount !== '' ? <div className="product-label discount type-tag">
                                                                <span>-{item.discount}%</span>
                                                            </div> : ''
                                                        }
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        <Swiper className="swiper-container gallery-thumbs" {...settingsThumb} onSwiper={this.state.thumbsSwiper} >
                                            {item.image.map((image, i) => (
                                                <SwiperSlide key={i}>
                                                    <img src={process.env.PUBLIC_URL + "/" + image} className="img-fluid full-width" alt={item.title} />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="shop-detail-contents mb-md-40 mt-md-40">
                                    <div className="shop-detail-content-wrapper">
                                        <h6 className="text-custom-black">{item.title}</h6>
                                    </div>
                                    <div className="ratings d-flex mb-xl-20">
                                        {Rating(item.rating)}
                                        <div className="pro-review"> <span>{item.reviews.length} Reviews</span>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <h5 className="text-light-green price-tag">
                                            <span className="text-custom-primary price-tag mr-2">${new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}</span>
                                            {
                                                item.discount > 0 || item.discount !== '' ? <span className="fw-400 fs-14">${new Intl.NumberFormat().format((item.price).toFixed(2))}</span> : ''
                                            }
                                        </h5>
                                    </div>
                                    <div className="product-full-des mb-20">
                                        <p className="mb-0">{item.shortdesc}</p>
                                    </div>
                                    <div className="availibity mt-20">
                                        <p className="text-custom-black fw-600">Avability:
      {item.stock === true ? <span className="text-success ml-2">In Stock</span> : <span className="text-danger ml-2">Out Of Stock</span>}
                                        </p>
                                    </div>
                                    <div className="quantity mb-xl-20">
                                        <p className="text-custom-black mb-0 mr-2 fw-600">Qty:</p>
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
                                            <p className="text-custom-black mb-0 fw-600">Categories:</p>
                                            <ul className="list-inline ml-2">
                                                {getCategories(item.category).slice(0, 3).map((cat, i) => (
                                                    <li className="list-inline-item" key={i}>
                                                        <Link to={"/shop/cat/" + cat.id}>{cat.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="shop-meta mt-20">
                                            <p className="text-custom-black mb-0 fw-600">Tags:</p>
                                            <ul className="list-inline ml-2">
                                                {getTags(item.tags).slice(0, 3).map((tag, i) => (
                                                    <li className="list-inline-item" key={i}>
                                                        <Link to={"/shop/tag/" + tag.id}>{tag.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="product-btn mt-20">
                                            {item.stock === true ? <button type="button" className="btn-solid with-line ml-2">Add To Cart</button> : <button type="button" className="btn-solid with-line ml-2" onClick={handleOutofStock}>Add To Cart </button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="shop-detail-description-sec">
                                    <div className="tabs">
                                        <Tab.Container defaultActiveKey="tab1">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="tab1">Description</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="tab2">Reviews ({item.reviews.length})</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="tab1" dangerouslySetInnerHTML={{ __html: item.htmldesc }}></Tab.Pane>
                                                <Tab.Pane eventKey="tab2">
                                                    {/* comments */}
                                                    <div className="comment-box p-relative">
                                                        <div id="comment-box">
                                                            <ul className="comments">
                                                                {item.reviews.map((review, i) => (
                                                                    <li key={i} className="comment">
                                                                        {getAuthor(review.user).map((author, i) => (
                                                                            <article key={i}>
                                                                                <div className="comment-avatar ">
                                                                                    <img src={process.env.PUBLIC_URL + "/" + author.image} className="rounded-circle" alt={author.name} />
                                                                                </div>
                                                                                <div className="comment-content">
                                                                                    <div className="comment-meta">
                                                                                        <div className="comment-meta-header">
                                                                                            <h6 className="text-color-secondary fw-500 author mb-3">{author.name}</h6>
                                                                                            <div className="post-date">
                                                                                                <div className="date bg-custom-black">{review.commentdate}</div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="comment-meta-reply"> <Link to="#" className="comment-reply-link btn-first red-btn text-custom-black">Reply</Link>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="comment">
                                                                                        <p>{review.comment}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </article>
                                                                        ))}
                                                                        <ul className="children">
                                                                            {review.replies.map((reply, i) => (
                                                                                <li className="comment" key={i}>
                                                                                    {getAuthor(reply.user).map((author, i) => (
                                                                                        <article key={i}>
                                                                                            <div className="comment-avatar ">
                                                                                                <img src={process.env.PUBLIC_URL + "/" + author.image} className="rounded-circle" alt={author.name} />
                                                                                            </div>
                                                                                            <div className="comment-content">
                                                                                                <div className="comment-meta">
                                                                                                    <div className="comment-meta-header">
                                                                                                        <h6 className="text-color-secondary fw-500 author mb-3">{author.name}</h6>
                                                                                                        <div className="post-date">
                                                                                                            <div className="date bg-custom-black">{reply.commentdate}</div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="comment-meta-reply"> <Link to="#" className="comment-reply-link btn-first red-btn text-custom-black">Reply</Link>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="comment">
                                                                                                    <p>{reply.comment}</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </article>
                                                                                    ))}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* comments */}
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Related products */}
                <section className="section-padding shop-description">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-header-left title">
                                    <h3 className="text-light-black header-title ">Related Items</h3>
                                    <span className="fs-14">
                                        <Link to="/shop-left">See all</Link>
                                    </span>
                                </div>
                            </div>
                            {shopbox.filter(product => { return parseInt(product.id) !== parseInt(productId) && product.category.some(r => item.category.includes(r)) }).slice(0, 4).map((product, i) => (
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" key={i}>
                                    <div className="product-box mb-md-20">
                                        <div className="product-img">
                                            <Link to={"/shop-details/" + product.id}>
                                                <img src={process.env.PUBLIC_URL + "/" + product.image[0]} className="img-fluid full-width" alt={product.title} />
                                            </Link>
                                            <div className="product-badge">
                                                {product.sale === true ?
                                                    <div className="product-label new">
                                                        <span>Sale</span>
                                                    </div>
                                                    : ''}
                                                {product.discount > 0 || product.discount !== '' ? <div className="product-label discount">
                                                    <span>-{product.discount}%</span>
                                                </div> : ''}

                                            </div>
                                            <div className="button-group">
                                                <OverlayTrigger placement="left" overlay={wishlisttip}>
                                                    <Link to="#" > <i className="pe-7s-like" /> </Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="left" overlay={quickviewtip}>
                                                    <Link to="#" onClick={(e) => this.modalShow(product.id)}> <i className="pe-7s-search" /> </Link>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="cart-hover">
                                                {product.stock === true ? <button type="button" className="btn-cart fw-600">Add To Cart</button> : <button type="button" className="btn-cart fw-600" onClick={handleOutofStock}>Add To Cart</button>}
                                            </div>
                                        </div>
                                        <div className="product-caption text-center">
                                            <div className="product-status">
                                                <ul className="product-raised">
                                                    <li><strong>Distribute:</strong> {new Intl.NumberFormat().format(product.sold)}</li>
                                                    <li><strong>Goal:</strong><span className="text-highlight"> {new Intl.NumberFormat().format(product.goal)}</span></li>
                                                </ul>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-color" style={{ width: (product.sold * 100) / product.goal + '%' }} />
                                                </div>
                                            </div>
                                            <h6 className="product-title fw-500 mt-10"><Link to={"/shop-details/" + product.id} className="text-color-secondary">{product.title}</Link></h6>
                                            <div className="product-money mt-10">
                                                <span className="text-light-green fw-600 fs-16">${new Intl.NumberFormat().format((product.price * (100 - product.discount) / 100).toFixed(2))}</span>{
                                                    product.discount > 0 || product.discount !== '' ? <span className="text-price">${new Intl.NumberFormat().format((product.price).toFixed(2))}</span> : ''
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
            </Fragment>
        );
    }
}

export default Content;