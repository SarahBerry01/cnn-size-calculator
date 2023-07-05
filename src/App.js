import React, {useState} from 'react';
import SizeInputs from './SizeInputs';
import ConvLayers from './ConvLayers'
import './App.css';
import Table from './Table';


function App() {
  const [sizes, setSizes] = useState({width: 128, height: 128, channels: 1});
  const [data, setData] = useState( []);
  return (
    <div>
    <SizeInputs sizes={sizes} updateSizes={setSizes}/>
    <ConvLayers data={data} updateData={setData}/>
    <Table data={data} sizes={sizes}/>
    </div>
  )
}

export default App;
