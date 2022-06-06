import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Topbar from '../layouts/Topbar';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Newsletter from '../layouts/Newsletter';
import Content from '../sections/home-three/Content';

const pagelocation = "Homepage";

class Homethree extends Component {
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
                <Topbar/>
                <Header />
                <Content />
                <Newsletter layout="" />
                <Footer />
            </Fragment>
        );
    }
}

export default Homethree;