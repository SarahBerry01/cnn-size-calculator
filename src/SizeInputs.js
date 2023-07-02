import React, { useState } from 'react';

const SizeInputs = () => {
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

    return (
        <div className="box">
            <h2> Image input size</h2>
            <div className="grid-container">
                <div className="grid-item"><label>Width W:</label></div>
                <div className="grid-item"><label>Height H:</label></div>
                <div className="grid-item"><label>Channels C:</label></div>
                <div className="grid-item"><input type="number" placeholder='128' onChange={handleWidthChange} /></div>
                <div className="grid-item"><input type="number" placeholder='128' onChange={handleHeightChange} /></div>
                <div className="grid-item"><input type="number" placeholder='1' onChange={handleChannelChange} /></div>
            </div>
            <button onClick={handleSetButtonClick}>Set</button>

        </div>
    );
};

export default SizeInputs;