function Table(props) {
    // Calculate sizes for each layer
    let width;
    let height;
    let newWidth;
    let newHeight;
    // If no layers, calculate output for expected new row
    if (props.data.length === 0) {
        newWidth = ((props.sizes.width - props.inputs.kernel + 2 * props.inputs.padding) / props.inputs.stride) + 1
        newHeight = ((props.sizes.height - props.inputs.kernel + 2 * props.inputs.padding) / props.inputs.stride) + 1
    }
    const calculatedDataRow = props.data.map((currentObj, index) => {
        if (index === 0) {
            width = props.sizes.width
            height = props.sizes.height
        }
        width = ((width - currentObj.kernel + 2 * currentObj.padding) / currentObj.stride) + 1
        height = ((height - currentObj.kernel + 2 * currentObj.padding) / currentObj.stride) + 1

        // Calculate output for expected new row
        if (index === props.data.length - 1) {
            newWidth = ((width - props.inputs.kernel + 2 * props.inputs.padding) / props.inputs.stride) + 1
            newHeight = ((height - props.inputs.kernel + 2 * props.inputs.padding) / props.inputs.stride) + 1
        }

        return { ...currentObj, width: width, height: height };
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Channels Out</th>
                    <th>Kernel</th>
                    <th>Stride</th>
                    <th>Padding</th>
                    <th>Width</th>
                    <th>Height</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{"input"}</td>
                    <td>{props.sizes.channels}</td>
                    <td>{"-"}</td>
                    <td>{"-"}</td>
                    <td>{"-"}</td>
                    <td>{props.sizes.width}</td>
                    <td>{props.sizes.height}</td>
                </tr>
                {calculatedDataRow.map((row, index) => (
                    <tr key={index}>
                        <td>{row.type}</td>
                        <td>{row.channels}</td>
                        <td>{row.kernel}</td>
                        <td>{row.stride}</td>
                        <td>{row.padding}</td>
                        <td>{row.width}</td>
                        <td>{row.height}</td>
                    </tr>
                ))}
                <tr className="unsubmitted-row">
                    <td>{props.inputs.type}</td>
                    <td>{props.inputs.channels}</td>
                    <td>{props.inputs.kernel}</td>
                    <td>{props.inputs.stride}</td>
                    <td>{props.inputs.padding}</td>
                    <td>{newWidth}</td>
                    <td>{newHeight}</td>
                </tr>
            </tbody>
        </table>
    );

}
export default Table;