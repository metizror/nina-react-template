import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div className="page-404 loader" id="page-404" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/404.jpg)" }}>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="404-img">
                                    <h1 className="text-404">4<span className="text-white">0</span>4</h1>
                                </div>
                                <div className="caption white-block">
                                    <h5 className="text-custom-white rubik full-width">Opps! Page Not Found. <Link to="/" className="text-custom-white">Try Again</Link></h5>
                                    <Link to="/" className="btn btn-text mt-20">Go Back Home </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Content;