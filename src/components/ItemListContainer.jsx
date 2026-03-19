import { getProducts } from "../mock/asyncData";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Input from "./Input";
import Loader from "./Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import { productos } from "../mock/asyncData";
import { addDoc } from "firebase/firestore";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const { type } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //ref collect (1)
    const prodColl = type
      ? query(collection(db, "productos"), where("category", "==", type))
      : collection(db, "productos");
    // traer la info (2)
    getDocs(prodColl)
      .then((res) => {
        // limpiar data (3)
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setData(list);
      })

      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [type]);

  // //Subir productos a firebase
  // const subirProd = ()=> {
  //   console.log('subiendo data')
  //   const collASubir = collection(db, "productos")
  //   productos.map((prod)=> addDoc(collASubir, prod))
  // }

  return (
    <>
      {loading ? (
        //Loader
        <Loader
          text={
            type
              ? "Cargando productos de la categoría..."
              : "Cargando todos los productos..."
          }
        />
      ) : (
        <div>
          <h1>
            {props.mensaje}{" "}
            {type && <span style={{ textTransform: "capitalize" }}></span>}
          </h1>

          {data.length > 0 ? (
            <ItemList data={data} />
          ) : (
            <div className="text-center mt-5">
              <h2 className="fw-bold mb-3">
                Aún no hay productos en esta categoría
              </h2>
              <h5 className="text-muted">
                Estamos trabajando para traerte nuevos diseños ✨
              </h5>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
