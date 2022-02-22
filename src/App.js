
import './App.css';
import React, { useState } from 'react';
import Cabecera from './cabecera/cabecera';
import Cuerpo from './Cuerpo/Cuerpo';

function App() {
  const titulo = 'Bienvenido'
  const noms = ['David', 'Rut', 'German']
  const [datos, setDatos] = useState({titulo:titulo,nombres:noms});
  const anadir = ()=>{
    datos.nombres.push('Jose')
    setDatos({
      titulo:datos.titulo,
      nombres:datos.nombres,
    })
  }
  const cambiar = ()=>{
    setDatos({
      titulo:'Bienvenid@',
      nombres:datos.nombres,
    })
  }

  return (
    <div className="App">
      <Cabecera titulo = {datos.titulo} />
      <Cuerpo nombres = {datos.nombres} anadir = {anadir} cambiar = {cambiar}/>
    </div>
  );
}

export default App;
