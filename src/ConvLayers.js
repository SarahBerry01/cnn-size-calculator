function ConvLayers(props) {

    function handleConvButtonClick() {
        props.updateInputs(() => ({ ...props.inputs, type: "conv" }))
    }

    function handlePoolButtonClick() {
        // Update layer type and force  channels to be the same as start/previous layer
        if (props.data.length === 0) {
            props.updateInputs(() => ({ ...props.inputs, type: "pool", channels: props.sizes.channels }))
        } else {
            props.updateInputs(() => ({ ...props.inputs, type: "pool", channels: props.data[props.data.length - 1].channels }))
        }
    };


    const handleInputChange = (event) => {
        props.updateInputs({ ...props.inputs, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRow = { ...props.inputs };
        props.updateData([...props.data, newRow]);
    };

    return (
        <div>
            <div className='tabs'>
                <button onClick={() => handleConvButtonClick()} className={props.inputs.type === 'pool' ? 'not-selected' : 'selected'}>2D Convolution</button>
                <button onClick={() => handlePoolButtonClick()} className={props.inputs.type === 'conv' ? 'not-selected' : 'selected'}>Max Pool</button>
            </div>
            <div className= {props.inputs.type === 'pool' ? 'box-container tab-box-right-selected' : 'box-container tab-box-left-selected'}>
                <h3>Add Layer</h3>
                <form onSubmit={handleSubmit}>
                    <div className="grid conv-grid-container">

                        <div className="grid-item">
                            <label>Channels<br /></label>

                            <input type="number" name="channels" value={props.inputs.channels} onChange={handleInputChange} disabled={props.inputs.type === 'pool' ? "disabled" : ""} />
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
        </div>

    );
}

export default ConvLayers;