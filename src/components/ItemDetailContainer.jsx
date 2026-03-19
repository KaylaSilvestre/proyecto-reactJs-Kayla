import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProduct } from "../mock/asyncData";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [invalid, setInvalid] = useState(null);
  // const param =useParams()
  // console.log(param)

  const { id } = useParams();

  console.log(id);

  //Firebase
  useEffect(() => {
    //Referencia al producto (1)
    const prodRef = doc(db, "productos", id);
    //Traer datos (2)
    getDoc(prodRef)
      .then((res) => {
        if (res.data()) {
          setDetail({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (invalid) {
    return (
      <div>
        <h1>El producto no existe.</h1>
      </div>
    );
  }

  return (
    <div>
      {loading ? (
        <Loader text="Cargando detalle del producto..." />
      ) : (
        <ItemDetail detail={detail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
