import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Content from '../sections/login/Content';

const pagelocation = "Login";

class Login extends Component {
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
                <Content />
            </Fragment>
        );
    }
}

export default Login;