import { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'


const FetchCountry = () => {
    const {data, loading, error} = useFetch('https://restcountries.com/v3.1/name/brasil')
   
    console.log({
      data: data && data[0]?.flag, 
      loading: loading, 
      error: error}) 

  return (
    <div>FetchCountry</div>
  )
}

export default FetchCountry
