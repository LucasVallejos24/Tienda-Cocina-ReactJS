import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer />
      </main>

    </div>
  )
}

export default App
