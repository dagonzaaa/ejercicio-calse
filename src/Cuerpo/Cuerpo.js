function Cuerpo(datos) {
  var final = [];
  var indice = 0;
  for (let nombre of datos.nombres) {
    final.push(
      <li key={indice}>
        {nombre}
      </li>
    )
    indice++
  };
    return (
      <div>
          <ul>{final}</ul>
          <button onClick={datos.anadir}>Añadir Jose</button>
          <button onClick={datos.cambiar}>Cambiar titulo</button>
      </div>
    );
  }
  
  export default Cuerpo;