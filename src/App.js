import React, { useState } from 'react';
import SizeInputs from './SizeInputs';
import ConvLayers from './ConvLayers'
import './App.css';
import Table from './Table';


function App() {
  const [sizes, setSizes] = useState({ width: 128, height: 128, channels: 1 });
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({
    channels: '', kernel: '', stride: '', padding: '',
  });
  return (
    <div>
      <SizeInputs sizes={sizes} updateSizes={setSizes} />
      <ConvLayers data={data} updateData={setData} inputs={inputs} updateInputs={setInputs} />
      <Table data={data} sizes={sizes} inputs={inputs}/>
    </div>
  )
}

export default App;
