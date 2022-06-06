import React, { Component, Fragment } from 'react';
import Adv from './Adv';
import Banner from './Banner';
import Bestsellers from './Bestsellers';
import Donationbox from './Donationbox';
import Filterproducts from './Filterproducts';
import Team from './Team';
import Cta from '../../layouts/Cta';
import Testimonials from '../../layouts/Testimonials';
import Donationcampaigns from './Donationcampaigns';
import Shopbox from './Shopbox';
import Blogpost from './Blogpost';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <Team/>
                <Filterproducts/>
                <Adv/>
                <Donationbox/>
                <Bestsellers/>
                <Cta/>
                <Donationcampaigns/>
                <Shopbox/>
                <Testimonials/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;