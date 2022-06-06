import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <section className=" p-relative">
                <div className="container-fluid no-padding">
                    <div className="row no-gutters">
                        <div className="col-md-12">
                            <div className="main-banner video-banner">
                                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                                    <source src={process.env.PUBLIC_URL + "/assets/img/video-bg.mp4"} type="video/mp4" />
                                </video>
                                <div className="overlay overlay-bg-dark-2" />
                            </div>
                            <div className="transform-center z-index">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8 align-self-center">
                                            <div className="right-side-content text-center">
                                                <h6 className="text-white">Around the world.</h6>
                                                <h1 className="text-white fw-600 fs-60">Our Helping <span className="text-dark-red">people</span> in need</h1>
                                                <p className="text-white fw-400">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfishf</p>
                                                <Link to="/shop-left" className="btn-solid with-line btn-big mt-20"><span>Shop Now <i className="fas fa-caret-right" /></span></Link>
                                            </div>
                                        </div>
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

export default Banner;