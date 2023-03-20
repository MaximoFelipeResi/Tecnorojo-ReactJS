import { useContext, useState } from "react";
import { Text, ButtonGroup, IconButton, Tooltip, Center,
Button } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../contexts/CartContext";

const ItemCount = ({ stock, id, precio, nombre }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  const incrementarCantidad = () => {
    setCount(count + 1);
  };

  const reducirCantidad = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, precio, nombre }];
      }
    });
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {count <= 1 ? (
          <Tooltip label="Stock minimo alcanzado" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={reducirCantidad} />
        )}
        <Center>
          <Button
            onClick={() => addToCart()}
            variant="solid"
            colorScheme="red"
          >
            Agregar al carrito: {count}
          </Button>
        </Center>
        {count < stock ? (
          <IconButton icon={<AddIcon />} onClick={incrementarCantidad} />
        ) : (
          <Tooltip label="Limite de stock alcanzado" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
    </>
  );
};

export default ItemCount;
