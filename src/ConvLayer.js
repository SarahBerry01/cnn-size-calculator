import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const ConvLayer = () => {
    const [tmpWidth, setTmpWidth] = useState('');
    const [tmpHeight, setTmpHeight] = useState('');
    const [tmpChannels, setTmpChannels] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [channels, setChannels] = useState('');


    const handleWidthChange = (e) => {
        setTmpChannels(e.target.value);
    };

    const handleChannelChange = (e) => {
        setTmpWidth(e.target.value);
    };

    const handleHeightChange = (e) => {
        setTmpHeight(e.target.value);
    };

    const handleSetButtonClick = () => {
        setWidth(tmpWidth);
        setHeight(tmpHeight);
        setChannels(tmpChannels);
    };

    const options = [
        'one', 'two', 'three'
      ];
      const defaultOption = options[0];

    return (
        <div className="box">
            <h2> 2D Convolution Layer </h2>
            <div className="grid-conv-layer">
                <div className="grid-item"><label>Out Channels:</label></div>
                <div className="grid-item"><label>Kernel Size:</label></div>
                <div className="grid-item"><label>Stride:</label></div>
                <div className="grid-item"><label>Padding:</label></div>

                <div className="grid-item"><input type="number" placeholder='128' onChange={handleWidthChange} /></div>
                <div className="grid-item"><input type="number" placeholder='128' onChange={handleHeightChange} /></div>
                <div className="grid-item"><input type="number" placeholder='1' onChange={handleChannelChange} /></div>
                <div className="grid-item"><input type="number" placeholder='1' onChange={handleChannelChange} /></div>

                </div>
            <button onClick={handleSetButtonClick}>Add</button>

        </div>
    );
};

export default ConvLayer;