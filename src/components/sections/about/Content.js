import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Blogpost from './Blogpost';
import Workprocess from './Workprocess';
import Testimonials from '../../layouts/Testimonials';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Abouttext/>
                <Workprocess/>
                <Testimonials/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;