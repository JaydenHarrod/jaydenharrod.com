import React from 'react';
import { Helmet } from "react-helmet";
import { Container, Col1 } from "../components/shared/Layout";

const NotFound = () => {
    return (
        <Container>
            <Helmet>
                <title>Page Not Found | JH</title>
            </Helmet>
            <Col1>
                <h1>Page Not Found...</h1>
                <a href="/">Go To Home</a>
            </Col1>
        </Container>
    )
}

export default NotFound;