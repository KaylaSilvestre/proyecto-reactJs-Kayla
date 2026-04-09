// import { useState, useContext, useEffect } from "react";
// import ItemCount from "./ItemCount";
// import { LiaTruckSolid } from "react-icons/lia";
// import { RiSecurePaymentLine } from "react-icons/ri";
// import { MdOutlinePublishedWithChanges } from "react-icons/md";
// import { FaCheck } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { CartContext } from "../context/CartContext";

// const ItemDetail = ({ detail }) => {
//   const [purchase, setPurchase] = useState(false);
//   const { addItem, itemQty } = useContext(CartContext);
//   const [showAlert, setShowAlert] = useState(false);
//   const [selectedQuantity, setSelectedQuantity] = useState(0);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [selectedOption, setSelectedOption] = useState(null);

//   useEffect(() => {
//     setSelectedImage(detail.img);
//     setSelectedOption(detail.options?.[0] || null); // selecciona la primera opción por defecto
//   }, [detail]);

//   const onAdd = (cantidad) => {
//     setShowAlert(true);
//     addItem(
//       {
//         ...detail,
//         selectedImg: selectedOption?.img, // la imagen de la opción elegida
//         selectedOption, // guardamos el nombre/datos de la opción
//       },
//       cantidad
//     );
//     setPurchase(true);
//     setSelectedQuantity(cantidad);
//   };

//   const stockDisponible = detail.stock - itemQty(detail.id);

//   return (
//     <div className="container py-5">
//       <div className="row g-5">
//         {/* Foto principal */}
//         <div className="col-md-6">
//           <div
//             className="border rounded d-flex align-items-center justify-content-center mb-3 overflow-hidden"
//             style={{ height: "450px", backgroundColor: "#f5f5f5" }}
//           >
//             <img
//               src={selectedImage}
//               alt={detail.name}
//               className="img-fluid"
//               style={{ maxHeight: "100%", objectFit: "contain" }}
//             />
//           </div>

//           {/* Miniaturas */}
//           <div className="d-flex gap-2 flex-wrap">
//             {[detail.img, ...(detail.images || [])].map((foto, index) => (
//               <img
//                 key={index}
//                 src={foto}
//                 alt={`${detail.name} ${index + 1}`}
//                 className={`rounded p-1 shadow-sm ${
//                   selectedImage === foto
//                     ? "border border-2 border-dark"
//                     : "border border-light"
//                 }`}
//                 style={{
//                   width: "80px",
//                   height: "80px",
//                   objectFit: "cover",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => setSelectedImage(foto)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Información del producto */}
//         <div className="col-md-6">
//           <p className="text-uppercase text-muted small mb-2">{detail.category}</p>

//           <p className="fw-bold" style={{ fontSize: "1.8rem" }}>
//             {detail.name}
//           </p>

//           <div className="mb-3">{detail.reviews}</div>

//           <h4 className="fw-bold mb-3">${detail.price}.00</h4>

//           <hr />

//           {detail?.description && (
//             <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
//               {detail.description}
//             </p>
//           )}

//           {/* Características */}
//           <h6 className="fw-bold mt-4">Características</h6>
//           <ul className="list-unstyled">
//             {detail.features?.map((feature, index) => (
//               <li key={index} className="mb-1">
//                 <FaCheck /> {feature}
//               </li>
//             ))}
//           </ul>

//           <p className="text-success small">● En stock ({stockDisponible} disponibles)</p>

//           {/* Selector de opciones */}
//           {detail.options && (
//             <div className="mt-3">
//               <h6 className="fw-bold">Elige tu diseño:</h6>
//               <div className="d-flex flex-wrap gap-2">
//                 {detail.options.map((option, index) => (
//                   <div
//                     key={index}
//                     className={`border rounded p-2 text-center ${
//                       selectedOption?.name === option.name
//                         ? "border-dark"
//                         : "border-light"
//                     }`}
//                     style={{ cursor: "pointer", width: "80px" }}
//                     onClick={() => {
//                       setSelectedOption(option);
//                       setSelectedImage(option.img);
//                     }}
//                   >
//                     <img
//                       src={option.img}
//                       alt={option.name}
//                       className="img-fluid mb-1"
//                       style={{ height: "60px", objectFit: "cover" }}
//                     />
//                     <small>{option.name}</small>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Contador y agregar al carrito */}
//           {purchase ? (
//             <Link className="btn btn-success mt-3" to="/cart">
//               Ir al carrito
//             </Link>
//           ) : (
//             <ItemCount stock={stockDisponible} onAdd={onAdd} />
//           )}

//           {showAlert && (
//             <div className="alert alert-success mt-3">
//               Agregaste {selectedQuantity} unidades de {detail.name} ({selectedOption?.name}) al carrito
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
//     </div>
//   );
// };

// export default ItemDetail;

import { useState, useContext, useEffect } from "react";
import ItemCount from "./ItemCount";
import { LiaTruckSolid } from "react-icons/lia";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ detail }) => {
  const { addItem, itemQty, cart } = useContext(CartContext);

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedOption, setSelectedOption] = useState(null); // opción elegida
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setSelectedImage(detail.img);
    // Por defecto la primera opción si existen
    if (detail.options?.length > 0) {
      setSelectedOption(detail.options[0]);
      if (detail.options[0].img) setSelectedImage(detail.options[0].img);
    }
  }, [detail]);

  const stockDisponible = detail.stock - itemQty(detail.id);

  const onAdd = (cantidad) => {
    if (!selectedOption) return alert("Selecciona una opción primero");

    const itemToAdd = {
      ...detail,
      selectedOption,
      selectedImg: selectedImage,
    };

    addItem(itemToAdd, cantidad);
    setShowAlert(true);
    setSelectedQuantity(cantidad);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option.img) setSelectedImage(option.img);
  };

  return (
    <div className="container py-5">
      <div className="row g-5">
        {/* Imagen del producto */}
        <div className="col-md-6">
          <div
            className="border rounded d-flex align-items-center justify-content-center mb-3 overflow-hidden"
            style={{ height: "450px", backgroundColor: "#f5f5f5" }}
          >
            <img
              src={selectedImage}
              alt={detail.name}
              className="img-fluid"
              style={{ maxHeight: "100%", objectFit: "contain" }}
            />
          </div>

          {/* Miniaturas */}
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

        {/* Información del producto */}
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

          {/* Características */}
          <h6 className="fw-bold mt-4">Características</h6>
          <ul className="list-unstyled">
            {detail.features?.map((feature, index) => (
              <li key={index} className="mb-1">
                <FaCheck /> {feature}
              </li>
            ))}
          </ul>

          <p className="text-success small">
            ● En stock ({stockDisponible} disponibles)
          </p>

          {/* Selector de opciones */}
          {detail.options?.length > 0 && (
            <div className="mb-3">
              <label className="form-label fw-bold">Elige una opción:</label>
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
                {detail.options.map((option, index) => (
                  <option key={index} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Contador de cantidad */}
          <ItemCount stock={stockDisponible} onAdd={onAdd} />

          {/* Alerta */}
          {showAlert && (
            <div className="alert alert-success mt-3">
              Agregaste {selectedQuantity} unidades de {detail.name} (
              {selectedOption?.name}) al carrito
            </div>
          )}

          <hr className="mt-4" />

          {/* Beneficios */}
          <div className="d-flex justify-content-between text-center small mt-3">
            <div>
              <LiaTruckSolid fontSize={"1.1rem"} />
              <br /> Envío rápido
            </div>
            <div>
              <RiSecurePaymentLine fontSize={"1.1rem"} />
              <br /> Pago seguro
            </div>
            <div>
              <MdOutlinePublishedWithChanges fontSize={"1.1rem"} />
              <br /> Cambios fáciles
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
