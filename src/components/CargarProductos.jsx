import { collection, addDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import { nuevosProductos } from "../mock/nuevosProd";

const UploadProducts = () => {
  const subirProductos = async () => {
    try {
      const productosRef = collection(db, "productos");

      for (let item of nuevosProductos) {
        await addDoc(productosRef, item);
      }

      alert("Productos subidos correctamente");
    } catch (error) {
      console.error(error);
      alert("Error al subir productos");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={subirProductos}>Subir productos</button>
    </div>
  );
};

export default UploadProducts;