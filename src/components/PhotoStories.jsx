import React from 'react';
import '../styles/components/PhotoStories.scss';

const PhotoStories = () => {
    return (
        <div className="photo-stories">
            <div className="ps-picture-container-full">
                <div className="ps-feature-image"/>
                <h3 className="ps-title">✨ Southern Highlands ✨</h3>
                <h4 className="ps-sub">NSW, Australia</h4>
            </div>

            <h2>Other Collections</h2>
            <div className="ps-other-collections">
            <div className="ps-picture-container">
                <div className="ps-collection-image"/>
                <h3 className="ps-title">🏕 Gloucester</h3>
                <h4 className="ps-sub">NSW, Australia</h4>
            </div>
            <div className="ps-picture-container">
                <div className="ps-collection-image"/>
                <h3 className="ps-title">⛰ Blue Mountains</h3>
                <h4 className="ps-sub">NSW, Australia</h4>
            </div>
            <div className="ps-picture-container">
                <div className="ps-collection-image"/>
                <h3 className="ps-title">🌲 Newcastle</h3>
                <h4 className="ps-sub">NSW, Australia</h4>
            </div>
            </div>
        </div>
    )
}

export default PhotoStories;
