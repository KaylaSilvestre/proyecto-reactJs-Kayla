import React, { useState } from "react";

const Input = () => {
  const [name, setName] = useState("");

  const inputHandler = (event) => {
    console.log(event, "evento");
    console.log(event.target, "target");
    console.log(event.target.value, "value");
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Input</h1>
      <input
        className="form-control"
        name="nombre"
        type="text"
        placeholder="Ingrese su nombre"
        onChange={inputHandler}
      />
      <p>{name}</p>
    </div>
  );
};

export default Input;
