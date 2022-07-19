import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <header className="App-header">
        <NavBar />
      </header>
      <main>
        {/* <ItemListContainer /> */}
        <ItemDetailContainer />
      </main>

    </div>
  )
}

export default App
