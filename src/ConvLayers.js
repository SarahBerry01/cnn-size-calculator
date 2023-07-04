import React, { useState } from 'react';

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
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="grid-container">
                    <div class="grid-item">
                        <label>
                            Channels:
                            <input type="text" name="channels" value={inputs.channels} onChange={handleInputChange} />
                        </label>
                    </div>
                    <div class="grid-item">
                        <label>
                            Kernel:
                            <input type="text" name="kernel" value={inputs.kernel} onChange={handleInputChange} />
                        </label>
                    </div>
                    <div class="grid-item">
                        <label>
                            Stride:
                            <input type="text" name="stride" value={inputs.stride} onChange={handleInputChange} />
                        </label>
                    </div>
                    <div class="grid-item">
                        <label>
                            Padding:
                            <input type="text" name="padding" value={inputs.padding} onChange={handleInputChange} />
                        </label>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>

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
                    {data.map((row, index) => (
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
        </div>
    );
}

export default ConvLayers;