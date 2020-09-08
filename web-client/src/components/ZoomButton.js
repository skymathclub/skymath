import React, {Component, useState} from 'react';
import dotenv from 'dotenv'

var rp = require('request-promise');


dotenv.config();

console.log(process.env);

function ZoomButton(props) {
    
    const onZoomClick = (res) => {
        console.log('Zoom Success');
        
    }

    return (
        <div className="App">
            <h6>Schedule Zoom Meeting</h6>
            <button
            onClick={onZoomClick}
            >
                Schedule Zoom Meeting
            </button>
        </div>
    )

}

export default ZoomButton;
