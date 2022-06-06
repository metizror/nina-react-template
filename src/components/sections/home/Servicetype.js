import React, { Component } from 'react';
import servicetype from '../../../data/servicetype.json';

class Servicetype extends Component {
    render() {
        return (
            <section className="service-type">
                <div className="row">
                    {servicetype.map((item, i) => (
                        <div key={i} className={`col-lg-3 col-md-6 bg-custom-primary `+ item.extclass} >
                            <div className="service-box">
                                <div className="service-box-wrapper">
                                    <div className="service-icon-box">
                                        <img src={process.env.PUBLIC_URL + "/" + item.icon} alt={item.title} className="img-fluid" />
                                    </div>
                                    <div className="service-text-box">
                                        <p>{item.title}</p>
                                        <h6>{item.text}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Servicetype;