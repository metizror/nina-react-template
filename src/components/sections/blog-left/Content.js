import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogpost from '../../../data/blog/blog.json';
import { getCategories, getFilteredPosts } from '../../../helper/bloghelper';
import Sidebar from '../../layouts/Blogsidebar';
import Pagination from 'react-js-pagination';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getPost(),
            activePage: 1,
            itemPerpage: 9
        };
    }
    getPost() {
        var cat = this.props.catId ? this.props.catId : '';
        var tag = this.props.tagId ? this.props.tagId : '';
        var author = this.props.authorId ? this.props.authorId : '';
        var filteredItems = getFilteredPosts(blogpost, { cat, tag, author });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
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
        });
        return (
            <section className="our-articles bg-light-theme section-padding ">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <aside className="col-xl-3 col-lg-4 mb-md-40">
                            <Sidebar />
                        </aside>
                        <div className="col-xl-9 col-lg-8">
                            <div className="full-width">
                                <div className="row">
                                    {paginationData}
                                </div>
                            </div>
                            {/* Pagination Start */}
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.itemPerpage}
                                totalItemsCount={this.state.data.length}
                                pageRangeDisplayed={this.state.data.length}
                                onChange={this.handlePageChange.bind(this)}
                                innerClass="custom-pagination pagination mb-0"
                                activeLinkClass="active"
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                            {/* Pagination End */}
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default Content;