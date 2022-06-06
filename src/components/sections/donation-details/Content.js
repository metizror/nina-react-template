import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPost, getCategories, getTags } from '../../../helper/donationhelper';
import { getSocialShare, getAuthor } from '../../../helper/helper';
import Sidebar from '../../layouts/Donationsidebar';

class Content extends Component {
    constructor(props) {
        super(props);
        this.openSocialPopup = this.openSocialPopup.bind(this);
    }
    // Open window
    openSocialPopup(social) {
        window.open(social.link, "MsgWindow", "width=600,height=600")
        // alert(social.title)
    }
    render() {
        const detailId = this.props.detailId;
        const item = getPost(detailId);
        return (
            <section className="our-articles bg-light-white section-padding">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8">
                            <div className="main-box padding-20 full-width sa-causes-single sa-causes-single-2  mb-md-40">
                                <div className="post-wrapper mb-xl-20">
                                    <div className="blog-item-img">
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} className="img-fluid full-width" alt={item.title} />
                                        <div className="dontaion-category">
                                            {getCategories(item.category).map((cat, i) => (
                                                <Link to={"/donation/cat/" + cat.id} key={i}>{cat.title}</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="blog-meta mb-xl-20">
                                            <h5 className="blog-title text-light-black">{item.title}</h5>
                                            <div className="cause-progress">
                                                <div className="progress-bar" style={{ width: (item.raised * 100) / item.goal + '%' }}>
                                                    <span>{new Intl.NumberFormat().format((item.raised * 100 / item.goal).toFixed(2))}%</span>
                                                </div>
                                            </div>
                                            <div className="causes-amount">
                                                <div className="left">
                                                    <p>Raised</p>
                                                    <span>${new Intl.NumberFormat().format(item.raised)}</span>
                                                </div>
                                                <div className="right">
                                                    <p>Goal</p>
                                                    <span>${new Intl.NumberFormat().format(item.goal)}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div dangerouslySetInnerHTML={{ __html: item.htmldesc }} />
                                        <hr />
                                        <div className="post-details-tags-social mb-xl-20">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-6">
                                                    <div className="tags-box">
                                                        <span className="fs-18 text-light-white"><i className="fas fa-tags" /></span>
                                                        <div className="tags">
                                                            {getTags(item.tags).map((tag, i) => (
                                                                <Link to={"/donation/tag/" + tag.id} key={i}>{tag.title}</Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="social-media-box">
                                                        <ul className="custom">
                                                            {getSocialShare(item.title).map((social, i) => (
                                                                <li key={i}>
                                                                    <Link to="#" className={social.iconstyle} onClick={(e) => this.openSocialPopup(social, i)}>
                                                                        <i className={social.iconClass} />
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-box">
                                            <div className="section-header-left">
                                                <h6 className="text-light-black header-title">{item.reviews.length} Comments</h6>
                                            </div>
                                            {item.reviews.map((review, i) => (
                                                <div key={i}>
                                                    <div className="review-box">
                                                        {getAuthor(review.user).map((author, i) => (
                                                            <div className="review-user" key={i}>
                                                                <div className="review-user-img">
                                                                    <img src={process.env.PUBLIC_URL + "/" + author.image} className="rounded-circle" alt={author.name} />
                                                                    <div className="reviewer-name">
                                                                        <p className="text-light-black fw-600">{author.name}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="review-date"> <span className="text-light-white">{review.commentdate}</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                        <p className="text-light-black">{review.comment}</p>
                                                    </div>
                                                    {review.replies.map((reply, i) => (
                                                        <div className="review-box comment-reply" key={i}>
                                                            {getAuthor(reply.user).map((author, i) => (
                                                                <div className="review-user" key={i}>
                                                                    <div className="review-user-img">
                                                                        <img src={process.env.PUBLIC_URL + "/" + author.image} className="rounded-circle" alt={author.name} />
                                                                        <div className="reviewer-name">
                                                                            <p className="text-light-black fw-600">{author.name}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="review-date"> <span className="text-light-white">{reply.commentdate}</span>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <p className="text-light-black">{reply.comment}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="comment-form">
                                            <div className="section-header-left">
                                                <h6 className="text-light-black header-title">Leave a Reply</h6>
                                            </div>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="text-light-black fw-600">Full Name</label>
                                                            <input type="text" name="#" className="form-control form-control-submit" placeholder="Full Name" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="text-light-black fw-600">Email Address</label>
                                                            <input type="email" name="#" className="form-control form-control-submit" placeholder="Email Address" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="text-light-black fw-600">Your Comment</label>
                                                            <textarea className="form-control form-control-submit" name="#" rows={6} placeholder="Your Comment" required />
                                                        </div>
                                                        <button type="submit" className="btn-second btn-submit full-width">Send</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside className="col-xl-3 col-lg-4">
                            <Sidebar />
                        </aside>
                    </div>
                </div>
            </section>

        );
    }
}

export default Content;