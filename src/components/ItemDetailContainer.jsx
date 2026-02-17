import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProduct } from "../mock/asyncData";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  // const param =useParams()
  // console.log(param)

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    getOneProduct(id)
      .then((res) => setDetail(res))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <ItemDetail detail={detail} />
    </div>
  );
};

export default ItemDetailContainer;
