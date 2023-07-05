function Table(props) {
    return (
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
                    </tr>
                ))}
            </tbody>
        </table>
    );

}
export default Table;