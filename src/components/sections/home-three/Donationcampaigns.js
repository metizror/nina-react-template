import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import donationblock from "../../../data/donation/donation.json";
import { getCategories } from "../../../helper/donationhelper";

class Donationcampaigns extends Component {
    render() {
        return (
            <section className="section-padding ex-collection bg-theme-primary">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title">Our Donation Campaigns</h3>
                            </div>
                        </div>
                        {donationblock.slice(0, 4).map((item, i) => (
                            <div className="col-xl-3 col-lg-6 col-md-6" key={i}>
                                <div className="sa-causes-single sa-causes-single-2">
                                    <div className="causes-details-wrap">
                                        <div className="causes-details">
                                            <h6><Link to={"/donation-details/" + item.id}>{item.title}</Link></h6>
                                            <p>{item.shortdesc}</p>
                                            <div className="entry-thumb mtmb-spacing">
                                                <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} className="img-fluid full-width" />
                                                <div className="dontaion-category">
                                                    {getCategories(item.category).map((cat, i) => (
                                                        <Link to={"/donation/cat/" + cat.id} key={i}>{cat.title}</Link>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="cause-progress">
                                                <div className="progress-bar" style={{ width: (item.raised * 100) / item.goal + '%' }}>
                                                    <span>{new Intl.NumberFormat().format((item.raised * 100 / item.goal).toFixed(2))}%</span>
                                                </div>
                                            </div>
                                            <div className="causes-amount">
                                                <div className="left">
                                                    <p>Raised</p>
                                                    <span>${new Intl.NumberFormat().format(item.raised)}</span>
                                                </div>
                                                <div className="right">
                                                    <p>Goal</p>
                                                    <span>${new Intl.NumberFormat().format(item.goal)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area text-center">
                                        <Link className="btn-donation text-btn" to={"/donation-details/" + item.id}>donate now</Link>
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

export default Donationcampaigns;