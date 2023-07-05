import React, { useState } from 'react';


function ConvLayers(props) {
    const [inputs, setInputs] = useState({
        channels: '', kernel: '', stride: '', padding: '',
    });

    const handleInputChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRow = { ...inputs };
        props.updateData([...props.data, newRow]);
    };

    return (

        <div className='box-container'>
            <h3>Add Convolution Layer</h3>
            <form onSubmit={handleSubmit}>
                <div className="conv-grid-container">

                    <div className="grid-item">
                        <label>Channels<br /></label>

                        <input type="number" name="channels" value={inputs.channels} onChange={handleInputChange} />
                    </div>
                    <div className="grid-item">
                        <label>Kernel<br /></label>

                        <input type="number" name="kernel" value={inputs.kernel} onChange={handleInputChange} />
                    </div>
                    <div className="grid-item">
                        <label>Stride<br /></label>
                        <input type="number" name="stride" value={inputs.stride} onChange={handleInputChange} />
                    </div>
                    <div className="grid-item">
                        <label>Padding<br /></label>
                        <input type="number" name="padding" value={inputs.padding} onChange={handleInputChange} />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}

export default ConvLayers;