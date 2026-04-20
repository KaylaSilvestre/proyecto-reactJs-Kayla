// import { useState, useContext, useEffect } from "react";
// import ItemCount from "./ItemCount";
// import { FaCheck } from "react-icons/fa6";
// import { CartContext } from "../context/CartContext";
// import { LiaTruckSolid } from "react-icons/lia";
// import { RiSecurePaymentLine } from "react-icons/ri";
// import { MdOutlinePublishedWithChanges } from "react-icons/md";

// const ItemDetail = ({ detail }) => {
//   const { addItem, itemQty } = useContext(CartContext);

//   const [selectedImage, setSelectedImage] = useState("");
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [customText, setCustomText] = useState("");

//   const [selectedQuantity, setSelectedQuantity] = useState(0);
//   const [showAlert, setShowAlert] = useState(false);

//   const [errorOption, setErrorOption] = useState(false);
//   const [errorColor, setErrorColor] = useState(false);
//   const [errorText, setErrorText] = useState(false);

//   const hasOptions = detail.options?.length > 0;

//   const colorMap = {
//     rojo: "#ff0000",
//     negro: "#000000",
//     blanco: "#ffffff",
//     azul: "#0000ff",
//     verde: "#00ff00",
//     amarillo: "#ffff00",
//     rosa: "#ffc0cb",
//     rosado: "#ffc0cb",
//     violeta: "#8a2be2",
//     naranja: "#ffa500",
//     gris: "#808080",
//   };

//   useEffect(() => {
//     setSelectedImage(detail.img);
//     setSelectedOption(null);
//     setSelectedColor(null);
//     setCustomText("");
//   }, [detail]);

//   const stockDisponible = detail.stock - itemQty(detail.id);

//   const onAdd = (cantidad) => {
//     let hasError = false;

//     if (hasOptions && !selectedOption) {
//       setErrorOption(true);
//       hasError = true;
//     } else {
//       setErrorOption(false);
//     }

//     const availableColors = selectedOption?.colors || detail.colors || [];

//     if (availableColors.length > 0 && !selectedColor) {
//       setErrorColor(true);
//       hasError = true;
//     } else {
//       setErrorColor(false);
//     }

//     if (detail.customText && !customText.trim()) {
//       setErrorText(true);
//       hasError = true;
//     } else {
//       setErrorText(false);
//     }

//     if (hasError) return;

//     const itemToAdd = {
//       ...detail,
//       selectedOption,
//       selectedColor,
//       selectedImg: selectedImage,
//       customText: customText.trim(),
//     };

//     addItem(itemToAdd, cantidad);
//     setShowAlert(true);
//     setSelectedQuantity(cantidad);
//   };

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     setErrorOption(false);

//     if (option?.img) setSelectedImage(option.img);

//     setSelectedColor(null);
//     setErrorColor(false);
//   };

//   const availableColors = selectedOption?.colors || detail.colors || [];

//   return (
//     <div className="container py-5">
//       <div className="row g-5">
//         {/* IMAGEN */}
//         <div className="col-md-6">
//           <div
//             className="border rounded d-flex align-items-center justify-content-center mb-3"
//             style={{ height: "450px", backgroundColor: "#f5f5f5" }}
//           >
//             <img
//               src={selectedImage}
//               alt={detail.name}
//               className="img-fluid"
//               style={{ maxHeight: "100%", objectFit: "contain" }}
//             />
//           </div>
//         </div>

//         {/* Miniaturas */}
//           <div className="d-flex gap-2 flex-wrap">
//              {[detail.img, ...(detail.images || [])].map((foto, index) => (
//        <img
//            key={index}
//             src={foto}
//             alt={`${detail.name} ${index + 1}`}
//             className={`rounded p-1 shadow-sm ${
//               selectedImage === foto
//                  ? "border border-2 border-dark"
//                    : "border border-light"
//                }`}
//                style={{
//                  width: "80px",
//                   height: "80px",
//                    objectFit: "cover",
//                   cursor: "pointer",
//                 }}
//                  onClick={() => setSelectedImage(foto)}
//               />
//              ))}
//            </div>
//          </div>


//         {/* INFO */}
//         <div className="col-md-6">
//           {/* CATEGORIA */}
//           <p className="text-uppercase text-muted small mb-2">
//             {detail.category}
//           </p>

//           {/* NOMBRE */}
//           <p className="fw-bold" style={{ fontSize: "1.8rem" }}>
//             {detail.name}
//           </p>

//           {/* RATING */}
//           <div className="mb-3">{detail.reviews}</div>

//           {/* PRECIO DESTACADO */}
//           <h4 className="fw-bold mb-3">${detail.price}.00</h4>

//           <hr />

//           {detail?.description && (
//             <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
//               {detail.description}
//             </p>
//           )}

//           {/* FEATURES */}
//           <h6 className="fw-bold mt-3">Características</h6>
//           <ul className="list-unstyled">
//             {detail.features?.map((f, i) => (
//               <li key={i}>
//                 <FaCheck /> {f}
//               </li>
//             ))}
//           </ul>

//           <p className="text-success small">
//             ● En stock ({stockDisponible} disponibles)
//           </p>

//           {/* MODELO */}
//           {hasOptions && (
//             <div className="mb-3">
//               <label className="fw-bold">Modelo:</label>

//               <select
//                 className="form-select"
//                 value={selectedOption?.name || ""}
//                 onChange={(e) => {
//                   const opt = detail.options.find(
//                     (o) => o.name === e.target.value,
//                   );
//                   handleOptionChange(opt);
//                 }}
//               >
//                 <option value="">Seleccionar modelo</option>
//                 {detail.options.map((opt, i) => (
//                   <option key={i} value={opt.name}>
//                     {opt.name}
//                   </option>
//                 ))}
//               </select>

//               {errorOption && (
//                 <small className="text-danger">
//                   Debes seleccionar un modelo
//                 </small>
//               )}
//             </div>
//           )}

//           {/* COLOR */}
//           {availableColors.length > 0 && (
//             <div className="mb-3">
//               <label className="fw-bold">Color:</label>

//               <div className="d-flex gap-2">
//                 {availableColors.map((color, i) => {
//                   const isObject = typeof color === "object";
//                   const name = isObject ? color.name : color;
//                   const hex = !isObject ? colorMap[name.toLowerCase()] : null;
//                   const img = isObject ? color.img : null;

//                   return (
//                     <div
//                       key={i}
//                       onClick={() => {
//                         setSelectedColor(name);
//                         setErrorColor(false);
//                       }}
//                       title={name}
//                       style={{
//                         width: 32,
//                         height: 32,
//                         borderRadius: "50%",
//                         cursor: "pointer",
//                         backgroundColor: img ? "transparent" : hex,
//                         backgroundImage: img ? `url(${img})` : "none",
//                         backgroundSize: "cover",
//                         border:
//                           selectedColor === name
//                             ? "3px solid black"
//                             : "1px solid #ccc",
//                       }}
//                     />
//                   );
//                 })}
//               </div>

//               {selectedColor && (
//                 <small className="d-block mt-1">
//                   Color seleccionado: <b>{selectedColor}</b>
//                 </small>
//               )}

//               {errorColor && (
//                 <small className="text-danger">
//                   Debes seleccionar un color
//                 </small>
//               )}
//             </div>
//           )}

//           {/* TEXTO PERSONALIZADO */}
//           {detail.customText && (
//             <div className="mb-3">
//               <label className="fw-bold">Apellido / Apodo:</label>

//               <input
//                 type="text"
//                 className="form-control"
//                 value={customText}
//                 placeholder="Ej: González"
//                 onChange={(e) => {
//                   setCustomText(e.target.value);
//                   setErrorText(false);
//                 }}
//               />

//               {errorText && (
//                 <small className="text-danger">Debes ingresar un texto</small>
//               )}
//             </div>
//           )}

//           {/* STOCK + BOTÓN */}
//           <ItemCount stock={stockDisponible} onAdd={onAdd} />

//           {/* ALERTA */}
//           {showAlert && (
//             <div className="alert alert-success mt-3">
//               Agregaste {selectedQuantity} unidad(es) de <b>{detail.name}</b>
//               {selectedOption ? ` (${selectedOption.name})` : ""}
//               {selectedColor ? ` - ${selectedColor}` : ""}
//               {customText ? ` - "${customText}"` : ""}
//             </div>
//           )}

//           <hr className="mt-4" />

//           {/* Beneficios */}
//           <div className="d-flex justify-content-between text-center small mt-3">
//             <div>
//               <LiaTruckSolid fontSize={"1.1rem"} />
//               <br /> Envío rápido
//             </div>
//             <div>
//               <RiSecurePaymentLine fontSize={"1.1rem"} />
//               <br /> Pago seguro
//             </div>
//             <div>
//               <MdOutlinePublishedWithChanges fontSize={"1.1rem"} />
//               <br /> Cambios fáciles
//             </div>
//           </div>
//         </div>
//       </div>
     
//   </div>
//   );
// };
// export default ItemDetail;

import { useState, useContext, useEffect } from "react";
import ItemCount from "./ItemCount";
import { FaCheck } from "react-icons/fa6";
import { CartContext } from "../context/CartContext";
import { LiaTruckSolid } from "react-icons/lia";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

const ItemDetail = ({ detail }) => {
  const { addItem, itemQty } = useContext(CartContext);

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [customText, setCustomText] = useState("");

  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const [errorOption, setErrorOption] = useState(false);
  const [errorColor, setErrorColor] = useState(false);
  const [errorText, setErrorText] = useState(false);

  const hasOptions = detail.options?.length > 0;

  const colorMap = {
    rojo: "#ff0000",
    negro: "#000000",
    blanco: "#ffffff",
    azul: "#0000ff",
    verde: "#00ff00",
    amarillo: "#ffff00",
    rosa: "#ffc0cb",
    rosado: "#ffc0cb",
    violeta: "#8a2be2",
    naranja: "#ffa500",
    gris: "#808080",
  };

  useEffect(() => {
    setSelectedImage(detail.img);
    setSelectedOption(null);
    setSelectedColor(null);
    setCustomText("");
  }, [detail]);

  const stockDisponible = detail.stock - itemQty(detail.id);

  const onAdd = (cantidad) => {
    let hasError = false;

    if (hasOptions && !selectedOption) {
      setErrorOption(true);
      hasError = true;
    } else {
      setErrorOption(false);
    }

    const availableColors = selectedOption?.colors || detail.colors || [];

    if (availableColors.length > 0 && !selectedColor) {
      setErrorColor(true);
      hasError = true;
    } else {
      setErrorColor(false);
    }

    if (detail.customText && !customText.trim()) {
      setErrorText(true);
      hasError = true;
    } else {
      setErrorText(false);
    }

    if (hasError) return;

    const itemToAdd = {
      ...detail,
      selectedOption,
      selectedColor,
      selectedImg: selectedImage,
      customText: customText.trim(),
    };

    addItem(itemToAdd, cantidad);
    setShowAlert(true);
    setSelectedQuantity(cantidad);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setErrorOption(false);

    if (option?.img) setSelectedImage(option.img);

    setSelectedColor(null);
    setErrorColor(false);
  };

  const availableColors =
    selectedOption?.colors || detail.colors || [];

  return (
    <div className="container py-5">
      <div className="row g-5">

        {/* IZQUIERDA */}
        <div className="col-md-6">

          {/* IMAGEN PRINCIPAL */}
          <div
            className="border rounded d-flex align-items-center justify-content-center mb-3"
            style={{ height: "450px", backgroundColor: "#f5f5f5" }}
          >
            <img
              src={selectedImage}
              alt={detail.name}
              className="img-fluid"
              style={{ maxHeight: "100%", objectFit: "contain" }}
            />
          </div>

          {/* MINIATURAS */}
          <div className="d-flex gap-2 flex-wrap">
            {[detail.img, ...(detail.images || [])].map((foto, index) => (
              <img
                key={index}
                src={foto}
                alt={`${detail.name} ${index + 1}`}
                className={`rounded p-1 shadow-sm ${
                  selectedImage === foto
                    ? "border border-2 border-dark"
                    : "border border-light"
                }`}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedImage(foto)}
              />
            ))}
          </div>
        </div>

        {/* DERECHA */}
        <div className="col-md-6">

          <p className="text-uppercase text-muted small mb-2">
            {detail.category}
          </p>

          <p className="fw-bold" style={{ fontSize: "1.8rem" }}>
            {detail.name}
          </p>

          <div className="mb-3">{detail.reviews}</div>

          <h4 className="fw-bold mb-3">${detail.price}.00</h4>

          <hr />

          {detail?.description && (
            <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
              {detail.description}
            </p>
          )}

          <h6 className="fw-bold mt-3">Características</h6>
          <ul className="list-unstyled">
            {detail.features?.map((f, i) => (
              <li key={i}>
                <FaCheck /> {f}
              </li>
            ))}
          </ul>

          <p className="text-success small">
            ● En stock ({stockDisponible} disponibles)
          </p>

          {/* MODELO */}
          {hasOptions && (
            <div className="mb-3">
              <label className="fw-bold">Modelo:</label>

              <select
                className="form-select"
                value={selectedOption?.name || ""}
                onChange={(e) => {
                  const opt = detail.options.find(
                    (o) => o.name === e.target.value
                  );
                  handleOptionChange(opt);
                }}
              >
                <option value="">Seleccionar modelo</option>
                {detail.options.map((opt, i) => (
                  <option key={i} value={opt.name}>
                    {opt.name}
                  </option>
                ))}
              </select>

              {errorOption && (
                <small className="text-danger">
                  Debes seleccionar un modelo
                </small>
              )}
            </div>
          )}

          {/* COLORES */}
          {availableColors.length > 0 && (
            <div className="mb-3">
              <label className="fw-bold">Color:</label>

              <div className="d-flex gap-2">
                {availableColors.map((color, i) => {
                  const isObject = typeof color === "object";
                  const name = isObject ? color.name : color;
                  const hex = !isObject
                    ? colorMap[name.toLowerCase()]
                    : null;
                  const img = isObject ? color.img : null;

                  return (
                    <div
                      key={i}
                      onClick={() => {
                        setSelectedColor(name);
                        setErrorColor(false);
                      }}
                      title={name}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        cursor: "pointer",
                        backgroundColor: img ? "transparent" : hex,
                        backgroundImage: img ? `url(${img})` : "none",
                        backgroundSize: "cover",
                        border:
                          selectedColor === name
                            ? "3px solid black"
                            : "1px solid #ccc",
                      }}
                    />
                  );
                })}
              </div>

              {errorColor && (
                <small className="text-danger">
                  Debes seleccionar un color
                </small>
              )}
            </div>
          )}

          {/* TEXTO */}
          {detail.customText && (
            <div className="mb-3">
              <label className="fw-bold">Apellido / Apodo:</label>

              <input
                type="text"
                className="form-control"
                value={customText}
                onChange={(e) => {
                  setCustomText(e.target.value);
                  setErrorText(false);
                }}
              />

              {errorText && (
                <small className="text-danger">
                  Debes ingresar un texto
                </small>
              )}
            </div>
          )}

          {/* CANTIDAD */}
          <ItemCount stock={stockDisponible} onAdd={onAdd} />

          {/* ALERTA */}
          {showAlert && (
            <div className="alert alert-success mt-3">
              Agregaste {selectedQuantity} unidad(es) de{" "}
              <b>{detail.name}</b>
              {selectedOption && ` (${selectedOption.name})`}
              {selectedColor && ` - ${selectedColor}`}
              {customText && ` - "${customText}"`}
            </div>
          )}

          <hr className="mt-4" />

          {/* BENEFICIOS */}
          <div className="d-flex justify-content-between text-center small mt-3">
            <div>
              <LiaTruckSolid />
              <br /> Envío rápido
            </div>
            <div>
              <RiSecurePaymentLine />
              <br /> Pago seguro
            </div>
            <div>
              <MdOutlinePublishedWithChanges />
              <br /> Cambios fáciles
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;