import React, { useState } from 'react';

import './App.css';
import Modal from './components/Modal';

function App() {

  const [mostrarModal1, setmostrarModal1] = useState(false);
  const [mostrarModal2, setmostrarModal2] = useState(false);

  return (
    <div className="App">
      <p>Click en el botón para mostrar el modal que desea</p>
      <div className="btn-group btn-group-sm">
        <button
          className="btn btn-primary"
          type="button"
          onClick={(e) => setmostrarModal1(!mostrarModal1)}
        >{mostrarModal1 ? 'Ocultar' : 'Mostrar'} modal</button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={(e) => setmostrarModal2(!mostrarModal2)}
        >{mostrarModal2 ? 'Ocultar' : 'Mostrar'} otro modal</button>
      </div>
      <Modal
        contenido="Contenido del modal 1"
        mostrar={mostrarModal1}
        nombre="modal1"
        titulo="Modal 1"
        onCerrarModal={() => setmostrarModal1(false)}
      />
      <Modal
        botones={(<button className="btn btn-success" type="button" onClick={() => alert('Hello')}>Hello</button>)}
        contenido="Contendo del modal 2"
        mostrar={mostrarModal2}
        nombre="modal2"
        titulo="Modal 2"
        onCerrarModal={() => setmostrarModal2(false)}
      />
    </div>
  );
}

export default App;
