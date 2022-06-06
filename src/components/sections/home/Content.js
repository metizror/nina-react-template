import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Servicetype from './Servicetype';
import Team from './Team';
import Bestsellers from './Bestsellers';
import Gallery from './Gallery';
import Donationbox from './Donationbox';
import Productbox from './Productbox';
import Advertisement from '../../layouts/Advertisement';
import Testimonials from '../../layouts/Testimonials';
import Videocta from '../../layouts/Videocta';
import Donationcampaigns from './Donationcampaigns';
import Blogpost from './Blogpost';
import Calendar from './Calendar';

class Content extends Component {
    render() {
        return ( 
            <Fragment>
                <Banner/>
                <Servicetype/>
                <Team/>
                <Bestsellers/>
                <Videocta/>
                <Donationbox/> 
                <Productbox/>
                <Advertisement/>
                <Donationcampaigns/>
                <Calendar/>
                <Gallery/>
                <Testimonials/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;