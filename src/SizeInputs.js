import React, { useState } from 'react';

const SizeInputs = () => {
    const [tmpWidth, setTmpWidth] = useState('');
    const [tmpHeight, setTmpHeight] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    const handleWidthChange = (e) => {
        setTmpWidth(e.target.value);
    };

    const handleHeightChange = (e) => {
        setTmpHeight(e.target.value);
    };

    const handleSetButtonClick = () => {
        // Perform any action you need with the input values
        setWidth(tmpWidth);
        setHeight(tmpHeight);
        console.log(`Width W: ${tmpWidth}, Height H: ${tmpHeight}`);
    };

    return (
        <div className="box">
            <h2> Image input size</h2>
            <div>
                <label>Width W:</label>
                <input type="number" placeholder='128' onChange={handleWidthChange} />
                <label>Height H:</label>
                <input type="number" placeholder='128' onChange={handleHeightChange} />
                <button onClick={handleSetButtonClick}>Set</button>
            </div>
        </div>
    );
};

export default SizeInputs;