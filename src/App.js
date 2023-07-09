import React, { useState } from 'react';
import SizeInputs from './SizeInputs';
import ConvLayers from './ConvLayers'
import './App.css';
import Table from './Table';


function App() {
  const [sizes, setSizes] = useState({ width: 128, height: 128, channels: 1 });
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({
    type:'conv', channels: '', kernel: '', stride: '', padding: '',
  });
  function clear(){
    setData([]);
  }
  return (
    <div>
    <h1>CNN Layer Size Calculator</h1>
      <div className="parentLayout">
        <SizeInputs sizes={sizes} updateSizes={setSizes} />
        <ConvLayers sizes={sizes} data={data} updateData={setData} inputs={inputs} updateInputs={setInputs} />
      </div>
      <button onClick={clear}>Clear</button>
      <Table data={data} sizes={sizes} inputs={inputs} />
    </div>

  )
}

export default App;
