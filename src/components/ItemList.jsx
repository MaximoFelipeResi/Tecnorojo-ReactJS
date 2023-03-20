import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ phones }) => {
  return (
    <>
      <Container className="products">
        {phones?.map((phone) => (
          <Item
            key={phone.id}
            id={phone.id}
            nombre={phone.nombre}
            descripcion={phone.descripcion}
            precio={phone.precio}
            stock={phone.stock}
            categoria={phone.categoria}
            imagen={phone.imagen}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
