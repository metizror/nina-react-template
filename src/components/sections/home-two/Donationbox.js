import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import donationblock from "../../../data/donation/donation.json";
import { getCategories } from "../../../helper/donationhelper";

class Donationbox extends Component {
    render() {
        return (
            <section className="ex-collection section-padding bg-theme-primary">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title">Discover The Museum</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {donationblock.slice(0, 3).map((item, i) => (
                            <div className="col-lg-4" key={i}>
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