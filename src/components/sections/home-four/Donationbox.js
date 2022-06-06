import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import donationblock from "../../../data/donation/donation.json";
import { getCategories } from "../../../helper/donationhelper";

class Donationbox extends Component {
    render() {
        return (
            <section className="section-padding ex-collection">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title">Our Donation Campaigns</h3>
                            </div>
                        </div>
                        {donationblock.slice(0, 6).map((item, i) => (
                            <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={i}>
                                <div className="story-wrapper">
                                    <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} className="full-width img-fluid mx-auto d-block" />
                                    <div className="story-box-content story-content-wrapper">
                                        {getCategories(item.category).map((cat, i) => (
                                            <span className="story-badge bg-custom-primary text-color-secondary" key={i}>{cat.title}</span>
                                        ))}
                                        <h6><Link to={"/donation-details/" + item.id}>{item.title}</Link> </h6>
                                        <Link to={"/donation-details/" + item.id} className="btn btn-text btn-text-white">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Donationbox;