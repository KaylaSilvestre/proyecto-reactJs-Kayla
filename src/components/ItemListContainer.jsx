import { getProducts } from "../mock/asyncData";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (type) {
          //filtrar
          setData(res.filter((prod) => prod.category === type));
        } else {
          setData(res);
        }
      })
      .catch((error) => console.log(error));
  }, [type]);

  console.log(type);

  return (
    <div>
      {props.mensaje}

      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
