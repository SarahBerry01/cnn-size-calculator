import React, { useState } from 'react';

function Table(props) {
    return (
        <div className='box-container'>
            
            <table>
                <thead>
                    <tr>
                        <th>Channels Out</th>
                        <th>Kernel</th>
                        <th>Stride</th>
                        <th>Padding</th>
                        <th>Calc</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.channels}</td>
                            <td>{row.kernel}</td>
                            <td>{row.stride}</td>
                            <td>{row.padding}</td>
                            <td>{row.padding * row.channels}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>);

}


function ConvLayers() {
    const [data, setData] = useState([]);
    const [inputs, setInputs] = useState({
        channels: '', kernel: '', stride: '', padding: '',
    });

    const handleInputChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRow = { ...inputs };
        setData([...data, newRow]);
        setInputs({ channels: '', kernel: '', stride: '', padding: '' }); // Clear input values after submission
        console.log(data);
    };

    return (
        <div>
            <div className='box-container'>
                <h3>Add Convolution Layer</h3>
                <form onSubmit={handleSubmit}>
                    <div class="grid-container">

                        <div class="grid-item">
                            <label>Channels<br /></label>

                            <input type="number" name="channels" value={inputs.channels} onChange={handleInputChange} />
                        </div>
                        <div class="grid-item">
                            <label>Kernel<br /></label>

                            <input type="number" name="kernel" value={inputs.kernel} onChange={handleInputChange} />
                        </div>
                        <div class="grid-item">
                            <label>Stride<br /></label>
                            <input type="number" name="stride" value={inputs.stride} onChange={handleInputChange} />
                        </div>
                        <div class="grid-item">
                            <label>Padding<br /></label>
                            <input type="number" name="padding" value={inputs.padding} onChange={handleInputChange} />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Table data={data}/>

        </div>
    );
}

export default ConvLayers;