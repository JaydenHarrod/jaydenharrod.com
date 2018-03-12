import React, { Fragment } from 'react';
import "../styles/components/employment.scss";

const Employment = () => {
    return (
        <Fragment>
            <h2 style={{ paddingTop: "18px" }}>Employment History</h2>
            {/* <p style={{ marginBottom: "0" }}>hipages: Front End Engineer</p>
            <p className="p-date">Present</p> */}
            <p style={{ marginBottom: "0" }}>Digivizer: Junior Creative / Engineer</p>
            <p className="p-date">2016-2018</p>
            <p style={{ marginBottom: "0" }}>PickleHosting: Operations Manager</p>
            <p className="p-date">2014-2016</p>
            <p style={{ marginBottom: "0" }}>YouTube: Digital Creative</p>
            <p className="p-date">2010-2016</p>
        </Fragment>
    )
}

export default Employment;
