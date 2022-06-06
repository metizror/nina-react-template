import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogpost from '../../../data/blog/blog.json';
import { getCategories } from '../../../helper/bloghelper';

class Blogpost extends Component {
    render() {
        return (
            <section className="section-padding blog-section bg-theme-primary">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left title">
                                <h3 className="text-light-black header-title">Our Latest News</h3>
                                <span className="fs-16"><Link to="/blog-left">See All</Link></span>
                            </div>
                        </div>
                        {blogpost.slice(0, 4).map((item, i) => (
                            <div className="col-xl-3 col-lg-3 col-md-6" key={i}>
                                <article className="blog-item blog-item-box">
                                    <div className="blog-item-img">
                                        <img className="blog-img" src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                        <ul className="blog-item-badge">
                                            {getCategories(item.category).slice(0, 2).map((cat, i) => (
                                                <li key={i}><Link to={"/blog/cat/" + cat.id}>{cat.title}</Link> </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="blog-item-content">
                                        <h5 className="blog-item-title"><Link to={"/blog-details/" + item.id}>{item.title}</Link></h5>
                                        <p>{item.shortdesc}</p>
                                        <div className="blog-item-details">
                                            <span className="blog-item-date"><i className="fas fa-calendar-week" /> {item.postdate}</span>
                                            <span><i className="fas fa-comment-dots" /> {item.reviews.length}</span></div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Blogpost;