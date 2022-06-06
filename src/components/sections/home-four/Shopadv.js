import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopadv from '../../../data/shopadv.json';


class Shopadv extends Component {
    render() {
        return (
            <section className="list-adv2">
                <div className="row">
                    {shopadv.map((item, i) => (
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" key={i}>
                            <div className="item-adv2 category-block fade-out-in">
                                <Link to="/shop-details/1" className="adv-thumb-link">
                                    <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} />
                                </Link>
                                <div className="banner-info text-center">
                                    <h3 className="text-white title30 play-font font-italic">{item.title}</h3>
                                    <p className="desc text-white opaci">{item.description}</p>
                                    <Link to="/shop-details/1" className="btn btn-text btn-text-white mt-20">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Shopadv;