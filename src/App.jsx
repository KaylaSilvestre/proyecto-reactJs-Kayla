import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'

function App() {
  
  console.log('App')
  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje="Bienvenidos a Hecho Pa'Mi 💫"/>
    </>
  )
}

export default App
