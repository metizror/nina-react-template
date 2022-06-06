import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getBlog, getCategories, getTags } from '../../../helper/bloghelper';
import { getSocialShare, getAuthor } from '../../../helper/helper';
import Sidebar from '../../layouts/Blogsidebar';

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
        const blogId = this.props.blogId;
        const item = getBlog(blogId);
        return (
            <section className="our-articles bg-light-theme section-padding">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8">
                            <div className="main-box padding-20 full-width mb-md-40">
                                <div className="post-wrapper mb-xl-20">
                                    <div className="blog-item-img">
                                        <img src={process.env.PUBLIC_URL + "/" + item.image[0]} className="img-fluid full-width" alt={item.title} />
                                        <ul className="blog-item-badge">
                                            {getCategories(item.category).slice(0, 2).map((cat, i) => (
                                                <li key={i}>
                                                    <Link to={"/blog/cat/" + cat.id}>{cat.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="blog-meta mb-xl-20">
                                            <h5 className="blog-title text-light-black">{item.title}</h5>
                                            <div className="blog-meta-author">
                                                {getAuthor(item.author).map((author, i) => (
                                                    <p className="text-light-white mb-0 fs-16" key={i}>
                                                        <span><i className="fas fa-user" /></span> <Link to={"/blog/author/" + author.id}> {author.name}</Link>
                                                    </p>
                                                ))}
                                                <p className="text-light-white mb-0 fs-16"><span><i className="fas fa-calendar-week" /></span>
                                                    <Link to={"/blog-details/" + item.id}> {item.postdate}</Link>
                                                </p>
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
                                                                <Link to={"/blog/tag/" + tag.id} key={i}>{tag.title}</Link>
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