import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Topbar from '../layouts/Topbar';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Newsletter from '../layouts/Newsletter';
import Breadcrumb from '../layouts/Breadcrumbs';
import Content from '../sections/donation-details/Content';

const pagelocation = "Donation Details";

class Donationdetails extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Nina - Museum & Shop - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Topbar />
                <Header />
                <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
                <Content detailId={this.props.match.params.id}/>
                <Newsletter layout="" />
                <Footer />
            </Fragment>
        );
    }
}

export default Donationdetails;