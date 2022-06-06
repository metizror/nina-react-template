import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import donationblock from "../../../data/donation/donation.json";
import { getCategories } from "../../../helper/donationhelper";

class Donation extends Component {
    render() {
        return (
            <div className="row">
                {donationblock.slice(0, 2).map((item, i) => (
                    <div className="col-lg-6 col-md-12" key={i}>
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
        );
    }
}

export default Donation;