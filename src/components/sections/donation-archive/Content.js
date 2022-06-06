import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import donationblock from "../../../data/donation/donation.json";
import { getCategories, getFilteredposts } from "../../../helper/donationhelper";
import Sidebar from '../../layouts/Donationsidebar';
import Pagination from 'react-js-pagination';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getpost(),
            activePage: 1,
            itemPerpage: 12
        };
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
    }
    // Modal
    modalShow(index) {
        this.setState({ modalshow: true, lastActiveBox: index });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }
    getpost() {
        var cat = this.props.catId ? this.props.catId : '';
        var tag = this.props.tagId ? this.props.tagId : '';
        var filteredItems = getFilteredposts(donationblock, { cat, tag });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
                <div className="sa-causes-single sa-causes-single-2">
                    <div className="entry-thumb">
                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} className="img-fluid full-width" />
                        <div className="dontaion-category">
                            {getCategories(item.category).map((cat, i) => (
                                <Link to={"/donation/cat/" + cat.id} key={i}>{cat.title}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="causes-details-wrap">
                        <div className="causes-details">
                            <h5><Link to={"/donation-details/" + item.id}>{item.title}</Link></h5>
                            <p>{item.shortdesc}</p>
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
                    </div>
                    <div className="btn-area text-center">
                        <Link className="btn-donation text-btn" to={"/donation-details/" + item.id}>donate now</Link>
                    </div>
                </div>
            </div>
        });
        return (
            <section className="our-articles bg-light-white section-padding ">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <aside className="col-xl-3 col-lg-4 mb-md-40">
                            <Sidebar />
                        </aside>
                        <div className="col-xl-9 col-lg-8">
                            <div className=" full-width">
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
            </section>
        );
    }
}

export default Content;