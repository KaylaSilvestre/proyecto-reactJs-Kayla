import { useEffect } from "react"

// es la función del hoc
export const withLogging = (WrappedComponent) => {

  // nuevo componente que se crea cuando se llama al hoc
  const ComponentWithLogging = (props) => {

    // efecto de montaje
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`)
    }, [])

    // mostrar el componente envuelto con sus props
    return <WrappedComponent {...props}/>
  }

  // devolvemos el nuevo componente con logging
  return ComponentWithLogging
}
