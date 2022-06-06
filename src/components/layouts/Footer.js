import React, { Component, Fragment } from 'react';
import instagram from '../../data/instagram.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const settings = {
    slidesPerView: 2,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: false,
    breakpoints: {
        480: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 6,
        },
        1500: {
            slidesPerView: 8,
        },
    }
};

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="section-padding bg-light-theme pt-0 u-line bg-custom-primary">
                    <Swiper wrapperTag="ul" className="u-line instagram-slider swiper-container" {...settings}>
                        {instagram.map((item, i) => (
                            <SwiperSlide tag="li" key={i}>
                                <Link to="#">
                                    <img src={process.env.PUBLIC_URL + "/" + item.image} alt="instagram" />
                                </Link>
                                <div className="insta-icon">
                                    <div>
                                        <i className="fab fa-instagram text-red-light" />
                                    </div>
                                </div>
                                {/*  */}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                                <div className="footer-contact">
                                    <h6 className="text-custom-white">About Us</h6>
                                    <div className="logo mb-xl-20">
                                        <Link to="#">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} className="img-fluid" alt="img" />
                                        </Link>
                                    </div>
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt</p>
                                </div>
                            </div>
                            <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                                <div className="footer-links">
                                    <h6 className="text-custom-white">Useful Links</h6>
                                    <ul>
                                        <li><Link to="/" className="text-white fw-500">Home</Link>
                                        </li>
                                        <li><Link to="/about" className="text-white fw-500">About Us</Link>
                                        </li>
                                        <li><Link to="/blog-details/1" className="text-white fw-500">Blog</Link>
                                        </li>
                                        <li><Link to="/donation-details/1" className="text-white fw-500">Donation</Link>
                                        </li>
                                        <li><Link to="/story-details/1" className="text-white fw-500">Story</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                                <div className="footer-links">
                                    <h6 className="text-custom-white">My Account</h6>
                                    <ul>
                                        <li><Link to="/login" className="text-white fw-500">Login</Link>
                                        </li>
                                        <li><Link to="/register" className="text-white fw-500">Signup</Link>
                                        </li>
                                        <li><Link to="/wishlist" className="text-white fw-500">Wishlist</Link>
                                        </li>
                                        <li><Link to="/checkout" className="text-white fw-500">Checkout</Link>
                                        </li>
                                        <li><Link to="/cart" className="text-white fw-500"> Cart</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                                <div className="footer-links">
                                    <h6 className="text-custom-white">Other Links</h6>
                                    <ul>
                                        <li><Link to="/donation-details/1" className="text-white fw-500">Donation Detail</Link>
                                        </li>
                                        <li><Link to="/story-details/1" className="text-white fw-500">Story Detail</Link>
                                        </li>
                                        <li><Link to="/cart" className="text-white fw-500">Track Order</Link>
                                        </li>
                                        <li><Link to="/blog-details/1" className="text-white fw-500">Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                                <div className="footer-links">
                                    <h6 className="text-custom-white">Contact info</h6>
                                    <ul className="contact-info">
                                        <li>
                                            <Link to="#" className="text-white"> <span><i className="pe-7s-timer" /></span>
                Monday - Friday: 9:00 AM - 06:00 PM</Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="text-white"> <span><i className="pe-7s-mail" /></span>
                info@example.com</Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="text-white"> <span><i className="pe-7s-call" /></span>
                (+348) 123 456 7890</Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="text-white"> <span><i className="pe-7s-map-marker" /></span>
                (+348) 123 456 7890</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copyright bg-black">
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="payment-logo mb-md-20">
                                    <div className="payemt-icon">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/footer-bottom-img.png"} alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center medewithlove align-self-center"> <Link to="#" className="text-custom-white">Made
          with Real <i className="fas fa-heart" /> Yourwebsite</Link>
                            </div>
                            <div className="col-lg-4">
                                <div className="copyright-text"> <span className="text-white">© <Link to="#" className="text-white">Yourwebsite</Link> -
            2021 | All Right Reserved</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Footer;