import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Bestseller from './Bestseller';
import Cta from '../../layouts/Cta';
import Donationbox from './Donationbox';
import Shopbox from './Shopbox';
import Pagecta from './Pagecta';
import Filterproducts from './Filterproducts';
import Hotdeals from './Hotdeals';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <Bestseller/>
                <Cta/>
                <Donationbox/>
                <Shopbox/>
                <Pagecta/>
                <Filterproducts/>
                <Hotdeals/>
            </Fragment>
        );
    }
}

export default Content;