import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {data.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ItemList;
