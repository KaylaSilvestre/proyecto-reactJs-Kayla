import React, { useState } from 'react'

const Input = () => {
    const [name, setName]= useState('')

    const inputHandler =(event)=>{
        console.log(event, 'evento')
        console.log(event.target, 'target')
        console.log(event.target.value, 'value')
        setName(event.target.value)
    }

    const noVocales = (e)=> {
        console.log(e.key)
        if('aeiou'.includes(e.key.toLowerCase())){
            console.log('VOcal!')
            e.preventDefault()
        }
    }

  return (
    <div>
        <h2>Input</h2>
        <input className='form-control' name='nombre-completo' type='text' placeholder='Ingresa tu nombre' onChange={inputHandler}/>
        <p>{name}</p>
        <h3>No Vocales</h3>
         <input className='form-control' name='no-vocales' type='text' placeholder='NO VOCALES!'onKeyDown={noVocales} />
    </div>
  )
}

export default Input