import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import category from "../../data/blog/blogcategory.json";
import tags from "../../data/blog/blogtags.json";
import { getRecentPost } from "../../helper/bloghelper";

class Blogsidebar extends Component {
    render() {
        return (
            <div className="side-bar">
                <div className="main-box padding-20 side-blog mb-xl-20">
                    <h5 className="text-light-black">Popular Post</h5>
                    {getRecentPost().map((item, i) => (
                        <article className="side-post pb-xl-20 mb-xl-20 u-line" key={i}>
                            <div className="thumb-img">
                                <Link to={"/blog-details/" + item.id}>
                                    <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                </Link>
                            </div>
                            <div className="content-wrap">
                                <div className="entry-meta-content">
                                    <h6 className="entry-title">
                                        <Link to={"/blog-details/" + item.id} className="text-light-black">{item.title.slice(0, 30)}...</Link>
                                    </h6>
                                    <div className="entry-tye"> <span className="text-light-white fw-400">{item.postdate}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="main-box padding-20 blog-tags mb-xl-20">
                    <h5 className="text-light-black">Tags</h5>
                    {tags.map((item, i) => (
                        <Link to={"/blog/tag/" + item.id} key={i}>#{item.title}</Link>
                    ))}
                </div>
                <div className="main-box padding-20 trending-blog-cat mb-xl-20">
                    <h5 className="text-light-black">Categories</h5>
                    <ul>
                        {category.map((item, i) => (
                            <li className="pb-xl-20 u-line mb-xl-20" key={i}>
                                <Link to={"/blog/cat/" + item.id} className="text-light-black fw-600">{item.title}<span className="text-light-white fw-400">{item.count}</span></Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Blogsidebar;