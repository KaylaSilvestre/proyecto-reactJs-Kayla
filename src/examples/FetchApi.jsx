import {useEffect,useState} from 'react'
import FetchList from './FetchList'
import { useFetch } from '../hooks/useFetch'

const FetchApi = () => {
    const {data, loading, error}= useFetch('https://rickandmortyapi.com/api/character')
// const [data, setData]= useState([])
//THENYCATCH
// useEffect(()=>{
//     //pedir los datos
//     fetch('https://rickandmortyapi.com/api/character')
//     .then((res)=> res.json())//traducimos
//     .then((info)=> setData(info.results))// guardar la info del servicio
//     .catch((error)=> console.log(error))//atrapando el error
// },[])


//TRYCATCH/
// useEffect(()=>{
//     const getPersonajes = async()=> {
//         try {
//             const res = await  fetch('https://rickandmortyapi.com/api/character')
//             const info = await res.json()
//             setData(info.results)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     getPersonajes()
// },[])

  return (
    <div>
       <h1>FetchApi</h1> 
      {loading ? <p>Cargando...</p> :<FetchList data={data}/>}
    </div>
  )
}

export default FetchApi