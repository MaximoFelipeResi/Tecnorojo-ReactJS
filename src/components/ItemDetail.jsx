import { Center, Card, CardBody, Image, Stack, Heading,Text, CardFooter } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ phones }) => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    const db = getFirestore();

    const phoneRef = doc(db, "celulares", `${id}`);

    getDoc(phoneRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducts(snapshot.data());
      } else {
        console.log("No existe el documento!");
      }
    });
  }, []);

  const phoneFilter = phones.filter((phone) => phone.id == id);

  return (
    <>
      {phoneFilter.map((phone) => (
        <div key={phone.id}>
          <Center p="1rem">
            <Card className="prod-detail">
              <CardBody>
                <Image borderRadius="lg" src={phone.imagen} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{phone.nombre}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Descripcion: {phone.descripcion}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {phone.categoria}
                  </Text>
                  <Text color="red.500" fontSize="xl">
                    Disponible: {phone.stock}
                  </Text>
                  <Text color="green.400" fontSize="xl">
                    Precio: U$D {phone.precio}
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter className="prod-footer">
                <ItemCount
                  stock={phone.stock}
                  id={phone.id}
                  price={phone.precio}
                  name={phone.nombre}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
