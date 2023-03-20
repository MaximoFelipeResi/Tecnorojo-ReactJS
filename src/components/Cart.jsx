
import { FormControl, FormLabel, Input, FormHelperText, Button, Container, Box, Textarea, Center, Heading, Card, CardHeader, CardBody, CardFooter, Text, Image } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import ItemCount from "./ItemCount";
import SendOrder from "./SendOrder";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const handleRemoveProduct = (productId) => {
    const db = firebase.firestore();
    db.collection("celulares").doc(productId).delete();
  };

  return (
    <>
      <Center bg="red" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Carrito
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
          <Container key={item.id} className="main-prods">
            <Card maxW="sm">
              <CardHeader>
                <Text size="md">{item.nombre}</Text>
              </CardHeader>
              <CardBody>
                <Text as="b">Cantidad: {item.quantity}</Text>
                <Text>Precio: U$D {item.precio}</Text>
                <Image>{item.imagen}</Image>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="white"
                  onClick={() => handleRemoveProduct(celulares.id)}
                >
                  🗑️
                </Button>
              </CardFooter>
            </Card>
          </Container>
        );
      })}
      <SendOrder />
    </>
  );
};

export default Cart;
