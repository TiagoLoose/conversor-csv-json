import { TextField, Typography, AppBar, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

import './app.css'
import conversor from './conversor';

function App() {
  const [csv, setCsv] = useState('')
  const [json, setJson] = useState('')

  function handleCsvChange(e){
    setCsv(e.target.value)
  }

  function handleJsonChange(e){
    setJson(e.target.value)
  }

  async function converterParaJson(){
    try{
      let json = await conversor.csv2Json(csv);
      setJson(json)
    }catch(error){
      alert(error.message)
    }
  }

  async function converterParaCsv(){
    try{
      let csv = await conversor.json2Csv(json);
      setCsv(csv)
    }catch (error){
      alert(error.message)
    }
  }

  return (
    <div id="container">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Conversor CSV JSON
          </Typography >
        </Toolbar>
      </AppBar>
      <div id="input-container">
        <div id="csv-container">
          <div>
            <TextField
              id="csv-input"
              label="CSV"
              multiline
              variant="outlined"
              rows="20"
              fullWidth
              value={csv}
              onChange={handleCsvChange}
            />
          </div>
          <div id="csv-buttons">
            <Button variant="contained" color="primary" onClick={converterParaJson}>Converter para JSON</Button>
          </div>
        </div>

        <div id="json-container">
          <div>
            <TextField
              id="json-input"
              label="JSON"
              multiline
              variant="outlined"
              rows="20"
              fullWidth
              value={json}
              onChange={handleJsonChange}
            />
          </div>
          <div id="json-buttons">
            <Button variant="contained" color="primary" onClick={converterParaCsv}>Converter para CSV</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
