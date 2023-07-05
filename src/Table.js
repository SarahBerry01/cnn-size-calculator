import React, { useState } from 'react';
function Table(props) {
    // Calculate sizes for each layer
    let width;
    let height;
    const calculatedDataRow = props.data.map((currentObj, index) => {
        if (index === 0) {
          width = props.sizes.width 
          height = props.sizes.height 
        }
        width = ((width - currentObj.kernel + 2 * currentObj.padding) / currentObj.stride) +1
        height = ((height - currentObj.kernel + 2 * currentObj.padding) / currentObj.stride) +1
        return { ...currentObj, width: width, height:height };
      });
      
    return (
        <table>
            <thead>
                <tr>
                    <th>Channels Out</th>
                    <th>Kernel</th>
                    <th>Stride</th>
                    <th>Padding</th>
                    <th>Calc</th>
                    <th>Width</th>
                    <th>Height</th>
                </tr>
            </thead>
            <tbody>
                {calculatedDataRow.map((row, index) => (
                    <tr key={index}>
                        <td>{row.channels}</td>
                        <td>{row.kernel}</td>
                        <td>{row.stride}</td>
                        <td>{row.padding}</td>
                        <td>{row.width}</td>
                        <td>{row.height}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}
export default Table;