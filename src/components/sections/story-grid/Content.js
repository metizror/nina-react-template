import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import storyblock from '../../../data/story/story.json';
import { getFilteredStory } from '../../../helper/storyhelper';
import Pagination from 'react-js-pagination';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getStory(),
            activePage: 1,
            itemPerpage: 8
        };
    }
    getStory() {
        var tag = this.props.tagId ? this.props.tagId : '';
        var filteredItems = getFilteredStory(storyblock, { tag });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="col-xl-3 col-lg-6 col-md-6" key={i}>
                <div className="sa-causes-single sa-causes-single-2">
                    <div className="entry-thumb">
                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} className="img-fluid full-width" />
                        <div className="dontaion-category story-meta">
                            <p>Type: <strong>{item.name}</strong></p>
                            <p>History: <strong>{new Intl.NumberFormat().format(item.raised)} A.D</strong></p>
                        </div>
                    </div>
                    <div className="causes-details-wrap">
                        <div className="causes-details">
                            <h5><Link to={"/story-details/" + item.id}>{item.title}</Link></h5>
                            <p>{item.shortdesc.slice(0, 200)}</p>
                        </div>
                    </div>
                </div>
            </div>
        });
        return (
            <section className="our-articles bg-light-theme section-padding ">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-xl-12">
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
            </section>
        );
    }
}

export default Content;