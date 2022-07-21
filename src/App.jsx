import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <NavBar />     
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
            {/* <ItemListContainer /> */}
            {/* <ItemDetailContainer /> */}
        </Routes> 
    </BrowserRouter>
  )
}

export default App
