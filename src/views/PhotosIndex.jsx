import React from 'react';
import { Helmet } from "react-helmet";
import { Container, Col1 } from "../components/shared/Layout";
import SocialIcons from "../components/SocialIcons";
import PhotoStories from "../components/PhotoStories";

const PhotosIndex = () => {
    return (
        <Container>
            <Helmet>
                <title>Developer | JH</title>
            </Helmet>
            <Col1>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1>Photos</h1>
                    <SocialIcons />
                </div>
                <PhotoStories />
            </Col1>
        </Container>
    )
}

export default PhotosIndex;
