import { useEffect, useState } from "react"

export const useFetch = (url)=> {
    const [data, setData]= useState(null)
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState(null) 

    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((info)=> setData(info))
        .catch((error)=> setError(error))
        .finally(()=> setLoading(false))
    },[url])

    return {data, loading, error}
}
