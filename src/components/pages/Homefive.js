import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Newsletter from '../layouts/Newsletter';
import Content from '../sections/home-five/Content';

const pagelocation = "Homepage";

class Homefive extends Component {
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
                <div className="header-5">
                    <Header />
                </div>
                <Content />
                <Newsletter layout="bg-theme-primary" />
                <Footer />
            </Fragment>
        );
    }
}

export default Homefive;