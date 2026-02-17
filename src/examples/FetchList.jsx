import React from 'react'
import FetchCard from './FetchCard'

const FetchList = ({data}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
      {data.map((pj) => <FetchCard key={pj.id} pj={pj} />)} 
    </div>
  )
}

export default FetchList
