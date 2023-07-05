function ConvLayers(props) {

    const handleInputChange = (event) => {
        props.updateInputs({ ...props.inputs, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRow = { ...props.inputs };
        props.updateData([...props.data, newRow]);
    };

    return (

        <div className='box-container'>
            <h3>Add Convolution Layer</h3>
            <form onSubmit={handleSubmit}>
                <div className="conv-grid-container">

                    <div className="grid-item">
                        <label>Channels<br /></label>

                        <input type="number" name="channels" value={props.inputs.channels} onChange={handleInputChange} />
                    </div>
                    <div className="grid-item">
                        <label>Kernel<br /></label>

                        <input type="number" name="kernel" value={props.inputs.kernel} onChange={handleInputChange} />
                    </div>
                    <div className="grid-item">
                        <label>Stride<br /></label>
                        <input type="number" name="stride" value={props.inputs.stride} onChange={handleInputChange} />
                    </div>
                    <div className="grid-item">
                        <label>Padding<br /></label>
                        <input type="number" name="padding" value={props.inputs.padding} onChange={handleInputChange} />
                    </div>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>

    );
}

export default ConvLayers;