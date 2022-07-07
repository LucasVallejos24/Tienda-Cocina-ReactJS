import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer
        greeting="Hola, bienvenido a mi sitio web creado con reactJS"
      />
    </div>
  )
}

export default App
