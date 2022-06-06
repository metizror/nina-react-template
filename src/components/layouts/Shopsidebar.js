import React, { Component } from 'react';
import { recentProduct } from '../../helper/shophelper';
import category from '../../data/shop/category.json';
import tags from '../../data/shop/tag.json';
import { Link, withRouter } from 'react-router-dom';
import IonRangeSlider from 'react-ion-slider'

class Shopsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceFilter: [1, 1000],
            minPrice: 1,
            maxPrice: 0,
        };
    }
    // Price filter
    onPriceChange(event) {
        this.setState({
            minPrice: event.from,
            maxPrice: event.to
        })
        if (this.state.maxPrice !== 0 && this.state.minPrice !== 0) {
            this.props.history.push(`/shop/minPrice=${this.state.minPrice}&maxPrice=${this.state.maxPrice}`);
        }
    }
    render() {
        return (
            <div className="side-bar">
                <div className="main-box padding-20 side-shop mb-xl-20">
                    <h5 className="text-light-black">Recent Products</h5>
                    {recentProduct().map((item, i) => (
                        <article className="side-post pb-xl-20 mb-xl-20 u-line" key={i}>
                            <div className="thumb-img">
                                <Link to={"/shop-details/" + item.id}>
                                    <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                </Link>
                            </div>
                            <div className="content-wrap">
                                <div className="entry-meta-content">
                                    <h6 className="entry-title">
                                        <Link to={"/shop-details/" + item.id} className="text-light-black">{item.title}</Link>
                                    </h6>
                                    <div className="entry-tye">
                                        <span className="text-light-green fw-600 fs-16">${new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}</span>{
                                            item.discount > 0 || item.discount !== '' ? <span className="text-price">${new Intl.NumberFormat().format((item.price).toFixed(2))}</span> : ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="main-box padding-20 trending-blog-cat mb-xl-20">
                    <h5 className="text-light-black">Price</h5>
                    <div className="delivery-slider">
                        <IonRangeSlider type="double" skin="round" hide_min_max={true} min={1} max={1000} from={this.state.priceFilter[0]} to={this.state.priceFilter[1]} grid={true} prefix="$" onChange={this.onPriceChange.bind(this)} />
                    </div>
                </div>
                <div className="main-box padding-20 trending-blog-cat mb-xl-20">
                    <h5 className="text-light-black">Brands</h5>
                    <div className="filter">
                        <form>
                            <label className="custom-checkbox">
                                <input type="checkbox" name="#" /> <span className="checkmark" /> Goldturn <span className="text-light-white">(3)</span>
                            </label>
                            <label className="custom-checkbox">
                                <input type="checkbox" name="#" /> <span className="checkmark" /> Silverline <span className="text-light-white">(6)</span>
                            </label>
                            <label className="custom-checkbox">
                                <input type="checkbox" name="#" /> <span className="checkmark" /> Gemtuk <span className="text-light-white">(10)</span>
                            </label>
                            <label className="custom-checkbox">
                                <input type="checkbox" name="#" /> <span className="checkmark" /> Ringwing <span className="text-light-white">(6)</span>
                            </label>
                        </form>
                    </div>
                </div>
                <div className="main-box padding-20 trending-blog-cat mb-xl-20">
                    <h5 className="text-light-black">Weight</h5>
                    <div className="filter">
                        <form>
                            <label className="custom-radio">
                                <input type="radio" name="#" /> <span className="radio" /> Small
        </label>
                            <label className="custom-radio">
                                <input type="radio" name="#" /> <span className="radio" /> Medium
        </label>
                            <label className="custom-radio">
                                <input type="radio" name="#" /> <span className="radio" /> Large
        </label>
                        </form>
                    </div>
                </div>
                <div className="main-box padding-20 blog-tags mb-xl-20">
                    <h5 className="text-light-black">Tags</h5>
                    {tags.map((item, i) => (
                        <Link to={"/shop/tag/" + item.id} key={i}>#{item.title}</Link>
                    ))}
                </div>
                <div className="main-box padding-20 trending-blog-cat mb-xl-20">
                    <h5 className="text-light-black">Categories</h5>
                    <ul>
                        {category.map((item, i) => (
                            <li className="pb-xl-20 u-line mb-xl-20" key={i}>
                                <Link to={"/shop/cat/" + item.id} className="text-light-black fw-600">{item.title}<span className="text-light-white fw-400">{item.count}</span></Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(Shopsidebar);