import React, { useState } from 'react';

function SizeInputs(props) {
    const [inputs, setInputs] = useState({
        width: 128, height: 128, channels: 1,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateSizes(inputs);
    };

    const handleInputChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };
    return (
        <div className='box-container'>
            <h3>Input Image Size</h3>
            <form onSubmit={handleSubmit}>
                <div className="grid size-grid-container">

                    <div className="grid-item">
                        <label>Width<br /></label>

                        <input type="number" name="width" value={inputs.width} onChange={handleInputChange} />
                    </div>
                    <div className="grid-item">
                        <label>Height<br /></label>

                        <input type="number" name="height" value={inputs.height} onChange={handleInputChange} />
                    </div>
                    <div className="grid-item">
                        <label>Channels<br /></label>
                        <input type="number" name="channels" value={inputs.channels} onChange={handleInputChange} />
                    </div>
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
export default SizeInputs;