import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Topbar from '../layouts/Topbar';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Newsletter from '../layouts/Newsletter';
import Content from '../sections/home-four/Content';

const pagelocation = "Homepage";

class Homefour extends Component {
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
                <div className="header-4">
                    <Header />
                </div>
                <Content />
                <Newsletter layout="" />
                <Footer />
            </Fragment>
        );
    }
}

export default Homefour;