import React, { Fragment } from 'react';
import "../styles/components/blogpanel.scss";

const BlogPanel = () => {
    return (
        <Fragment>
            <h2 style={{ paddingTop: "18px" }}>Writing</h2>
            <div className="blog-container">
                <a href="https://medium.com/@JaydenHarrod/dealing-with-city-distractions-ae4d133d17dc" rel="noopener noreferrer" target="_blank" className="status">
                    Dealing With City Distractions
                </a>
                <p className="p-date">Feb 4th, 2018</p>
            </div>
            <div className="blog-container">
                <a href="https://medium.com/@JaydenHarrod/life-logging-goal-setting-guide-2018-689ffd7b271a" rel="noopener noreferrer" target="_blank" className="status">
                    You&#x27;re Setting Goals Wrong
                </a>
                <p className="p-date">Jan 9th, 2018</p>
            </div>
        </Fragment>
    )
}

export default BlogPanel;
