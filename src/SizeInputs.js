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
            <div className='inputs'>
                <label>Width W:</label>
                <input type="number" placeholder='128' onChange={handleWidthChange} />
                <label>Height H:</label>
                <input type="number" placeholder='128' onChange={handleHeightChange} />
                <label>Channels C:</label>
                <input type="number" placeholder='1' onChange={handleChannelChange} />
            </div>
            <button onClick={handleSetButtonClick}>Set</button>

        </div>
    );
};

export default SizeInputs;