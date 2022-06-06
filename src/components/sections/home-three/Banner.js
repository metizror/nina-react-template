import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <section className="p-relative single-banner">
                <img src={process.env.PUBLIC_URL + "/assets/img/banner/banner1.jpg"} className="img-fluid full-width" alt="img" />
                <div className="transform-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 align-self-center">
                                <div className="right-side-content text-center">
                                    <h6 className="text-custom-white">Around the world.</h6>
                                    <h1 className="text-custom-white fw-600 fs-60">Our Helping <span className="text-dark-red">people</span> in need</h1>
                                    <p className="text-custom-white fw-400">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfishf</p>
                                    <Link to="/shop-left" className="btn-solid with-line btn-big mt-20"><span>Explore<i className="fas fa-caret-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay overlay-bg-dark-2" />
            </section>
        );
    }
}

export default Banner;