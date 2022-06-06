import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagecta extends Component {
    render() {
        return (
            <section className="section-padding advertisement-banner-1 what-wedo-bg bg-cover" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/banner/banner4.jpg)" }}>
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="advertisement-text-1 center-block text-center">
                                <h6 className="sub-head">We do it for all people</h6>
                                <h3 className="text-white heading">Delivering help and hope to <span className="text-dark-red">children</span> through sponsorship.</h3>
                                <Link to="/register" className="btn btn-text btn-text-white">Register Today</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Pagecta;