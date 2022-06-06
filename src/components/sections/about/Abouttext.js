import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Abouttext extends Component {
    render() {
        return (
            <section className="aboutus section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="history-title mb-md-40">
                                <h2 className="text-light-black">See what we do for the poor people and <span className="text-light-green">the children</span></h2>
                                <p className="text-light-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <p className="text-light-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                                <Link to="/about" className="btn-solid with-line btn-big mt-20"><span>Learn More <i className="fas fa-caret-right" /></span></Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="histry-img mb-xs-20">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/about/about1.jpg"} className="img-fluid full-width" alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="histry-img mb-xl-20">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/about/about2.jpg"} className="img-fluid full-width" alt="img" />
                                    </div>
                                    <div className="histry-img">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/about/about3.jpg"} className="img-fluid full-width" alt="img" />
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

export default Abouttext;