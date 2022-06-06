import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tags from "../../data/story/tags.json";
import { recentStory } from "../../helper/storyhelper";

class Storysidebar extends Component {
    render() {
        return (
            <div className="side-bar ">
                <div className="main-box padding-20 side-blog mb-xl-20">
                    <h5 className="text-light-black">Peoples Story</h5>
                    {recentStory().map((item, i) => (
                        <article className="side-post pb-xl-20 mb-xl-20 u-line" key={i}>
                            <div className="thumb-img">
                                <Link to={"/story-details/" + item.id}>
                                    <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} />
                                </Link>
                            </div>
                            <div className="content-wrap">
                                <div className="entry-meta-content">
                                    <h6 className="entry-title">
                                        <Link to={"/story-details/" + item.id} className="text-light-black">{item.title}</Link>
                                    </h6>
                                    <div className="entry-tye"> <span className="text-light-white fw-400">{item.name}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="main-box padding-20 blog-tags mb-xl-20">
                    <h5 className="text-light-black">Tags</h5>
                    {tags.map((item, i) => (
                        <Link to={"/story/tag/" + item.id} key={i}>#{item.title}</Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default Storysidebar;