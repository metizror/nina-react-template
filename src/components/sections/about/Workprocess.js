import React, { Component } from 'react';
import workprocess from '../../../data/workprocess.json';

class Workprocess extends Component {
    render() {
        return (
            <section className="section-padding how-it-works bg-theme-primary">
                <div className="container">
                    <div className="section-header-style-2">
                        <h6 className="text-light-green sub-title">Our Process</h6>
                        <h3 className="text-light-black header-title">How Does It Work</h3>
                    </div>
                    <div className="row">
                        {workprocess.map((item, i) => (
                            <div className="col-lg-3 col-sm-6" key={i}>
                                <div className={"how-it-works-box " + item.arrowclass}>
                                    <div className="how-it-works-box-inner"> <span className="icon-box">
                                        <img src={process.env.PUBLIC_URL + "/" + item.icon} alt={item.title} />
                                        <span className="number-box">0{1 + i}</span>
                                    </span>
                                        <h6>{item.title}</h6>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Workprocess;