const BotonMultiuso = (props)=> {
    console.log(props)
    const {color}= props
    return(
        <button style={{
            padding: "10px 16px",
            borderRadius: "8px",
            color: "white",
            backgroundColor:color,
        }}
        disabled={props.disabled}
        onClick={props.onClickHandler}

        >
            Hola
        </button>
    )
}

export default BotonMultiuso