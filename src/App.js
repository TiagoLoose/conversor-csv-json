import { TextField, Typography, AppBar, Toolbar, formatMs } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';

import './app.css'
import conversor from './conversor';

function App() {
  const [formulario, setFormulario] = useState({})

  useEffect(() => {
    console.log(formulario)
  }, [formulario])

  function handleFormularioChange(e){
    setFormulario({...formulario, [e.target.name]: e.target.value})
  }

  async function converterParaJson(){
    try{
      const json = await conversor.csv2Json(formulario.csv);
      setFormulario({...formulario, json})
    }catch(error){
      alert(error.message)
    }
  }

  async function converterParaCsv(){
    try{
      const csv = await conversor.json2Csv(formulario.json);
      setFormulario({...formulario, csv})
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
              name="csv"
              multiline
              variant="outlined"
              rows="20"
              fullWidth
              value={formulario.csv}
              onChange={handleFormularioChange}
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
              name="json"
              multiline
              variant="outlined"
              rows="20"
              fullWidth
              value={formulario.json}
              onChange={handleFormularioChange}
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
