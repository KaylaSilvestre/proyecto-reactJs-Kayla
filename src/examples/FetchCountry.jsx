import { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'


const FetchCountry = () => {
    const {data, loading, error} = useFetch('https://restcountries.com/v3.1/name/brasil')
    // useEffect(() => { 
    //     fetch('https://restcountries.com/v3.1/name/brasil') //pedir datos a una API
    //     .then((res) => res.json()) //convertir la respuesta a JSON  
    //     .then((data) => console.log(data[0].flag)) //trabajar con los datos recibidos, guarda la data 
    //     .catch((error) => console.log(error)) //manejar errores 
    // }, [])
    console.log({
      data: data && data[0]?.flag, 
      loading: loading, 
      error: error}) 

  return (
    <div>FetchCountry</div>
  )
}

export default FetchCountry
