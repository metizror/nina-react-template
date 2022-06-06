import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Topbar from '../layouts/Topbar';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Newsletter from '../layouts/Newsletter';
import Breadcrumb from '../layouts/Breadcrumbs';
import Content from '../sections/story-grid/Content';

const pagelocation = "Story Grid";

class Storygrid extends Component {
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
                    tagId={this.props.match.params.tagId}
                />
                <Newsletter layout="" />
                <Footer />
            </Fragment>
        );
    }
}

export default Storygrid;