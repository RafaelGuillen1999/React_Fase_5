import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fase 5_Operar_Grupo 04</h1>
      <div className="card">
        <p>
          <h1>Integrantes</h1>
          <h2>Rafael Gustavo Guillen Mendoza</h2>
          <h3>Camilo De Jesus Martinez Carrillo</h3>

          <h5><a href="index.html">Clic para ir al proyecto </a></h5>
        </p>
      </div>
      <p className="read-the-docs">
        <h6>&copy; 2023 Derechos de Autor</h6>
        <h6><a href="/Correo: rgguillenm@unadvirtual.edu.co">Correo: rgguillenm@unadvirtual.edu.co</a></h6>
        <h6><a href="/Skype:https://join.skype.com/invite/usgra6lv5aMh">https://join.skype.com/invite/usgra6lv5aMh</a></h6>
        <h6><a href="/Fecha">Fecha: 28/05/2023</a></h6>
      </p>
    </>
  )
}

export default App
