import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarjeta from './Tarjeta'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hola clase como estan ?</h1>
     <Tarjeta/>
     <p>Descripcion extra</p>
    </>
  )
}

export default App
