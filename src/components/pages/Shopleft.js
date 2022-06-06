import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Topbar from '../layouts/Topbar';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Newsletter from '../layouts/Newsletter';
import Breadcrumb from '../layouts/Breadcrumbs';
import Content from '../sections/shop-left/Content';

const pagelocation = "Shop Left";

class Shopleft extends Component {
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
                <Content
                    catId={this.props.match.params.catId}
                    tagId={this.props.match.params.tagId}
                    minPrice={this.props.match.params.minPrice}
                    maxPrice={this.props.match.params.maxPrice}
                />
                <Newsletter layout="" />
                <Footer />
            </Fragment>
        );
    }
}

export default Shopleft;