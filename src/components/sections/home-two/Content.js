import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Banner from './Banner';
import Bestsellers from './Bestsellers';
import Cta from '../../layouts/Cta';
import Advertisement from '../../layouts/Advertisement';
import Testimonials from '../../layouts/Testimonials';
import Donationbox from './Donationbox';
import Filterproduct from './Filterproduct';
import Donationcampaigns from './Donationcampaigns';
import Shopbox from './Shopbox';
import Blogpost from './Blogpost';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <Abouttext/> 
                <Bestsellers/>
                <Cta/>
                <Donationbox/>
                <Filterproduct/>
                <Advertisement/>
                <Donationcampaigns/>
                <Shopbox/>
                <Testimonials/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;