import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Filterproducts from './Filterproducts';
import Shopadv from './Shopadv';
import Cta from '../../layouts/Cta';
import Advertisement from '../../layouts/Advertisement';
import Donationbox from './Donationbox';
import Shopbox from './Shopbox';
import Donation from './Donation';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Shopadv />
                <section className="recent-order section-padding bg-theme-primary">
                    <Filterproducts />
                </section>
                <Cta />
                <section className="section-padding our-product">
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-header-left">
                                    <h3 className="text-light-black header-title title">Our Featured Products</h3>
                                </div>
                            </div>
                        </div>
                        <Donation/>
                        <Shopbox />
                    </div>
                </section>
                <Advertisement/>
                <Donationbox/>
                <section className="section-padding our-product bg-theme-primary">
                    <Filterproducts />
                </section>
            </Fragment>
        );
    }
}

export default Content;