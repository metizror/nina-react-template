import React, { Component } from 'react';

class Cta extends Component {
    render() {
        return (
            <section className="section-padding advertisement-banner-1 center-bg-effect what-wedo-bg bg-cover" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/banner/banner4.jpg)" }}>
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="advertisement-text text-center mx-center-width">
                                <h3 className="text-white fw-600">We Are In A<span className="text-dark-red"> Mission</span> To Help Helpless</h3>
                                <p className="text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;