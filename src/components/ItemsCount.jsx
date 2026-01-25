import { useState } from "react"

const ItemCount = (props)=> {
    // const [variableDeEstado, FuncionModificadora] = useState(valor por Defecto)
    const [count, setCount]= useState(1) 
    console.log('itemCount')

    const sumar = ()=> {
        if (count < props.stock) {
         setCount(count + 1)   
        }
    }

    const restar = ()=> {
        if (count > 0) {
            setCount(count -1)
        }
    }

    return(
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount
