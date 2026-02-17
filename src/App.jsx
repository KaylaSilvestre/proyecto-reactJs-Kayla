import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Error from './components/Error';
import Hero from './components/Hero';
import CategoryHero from './components/CategoryHero';



function App() {

  console.log('App')
  return (
    <BrowserRouter>
    <NavBar/>
     <Routes>
      <Route path='/' element={<ItemListContainer mensaje={<Hero/>}/>}/>
      <Route path='/category/:type' element={<ItemListContainer mensaje={<CategoryHero/>} />}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
