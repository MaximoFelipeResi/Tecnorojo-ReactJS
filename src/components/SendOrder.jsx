import { Container, Heading, Stack, Input, Button, Text, Center, FormControl, FormLabel, Spacer } from "@chakra-ui/react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";

const SendOrder = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [comentary, setComentary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("No pueden existir campos vacios");
    } else {
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    }
    setEmail(" ");
  };

  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  const order = {
    name,
    email,
    address,
    telephone,
    comentary,
  };

  return (
    <div>
      <Center>
        <Heading>Enviar pedidos</Heading>
      </Center>
      <br /><br />
      <Container>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <FormLabel>Nombre y apellido</FormLabel>
            <Input size="lg" onChange={(e) => setName(e.target.value)} isRequired={true}/>
            <br />
            <FormLabel >Email</FormLabel>
            <Input size="lg" onChange={(e) => setEmail(e.target.value)} isRequired={true}/>
            <br />
            <FormLabel>Direccion</FormLabel>
            <Input size="lg" onChange={(e) => setAddress(e.target.value)} isRequired={true}/>
            <br />
            <FormLabel>Numero de telefono</FormLabel>
            <Input size="lg" onChange={(e) => setTelephone(e.target.value)} isRequired={true}/>
            <br />
            <FormLabel>Comentarios</FormLabel>
            <Input size="lg" onChange={(e) => setComentary(e.target.value)} isRequired={true}/>
            <br />
            <Button colorScheme="red" type="submit" m={8}>
              Enviar informacion
            </Button>
          </form>
        </FormControl>
      </Container>
      <Center>
        <Text as="b" m={3} fontSize="xl">
          ID de la orden:{" "}
        </Text>
        <Text as="mark" fontSize="2xl">
          {orderId}
        </Text>
      </Center>
    </div>
  );
};

export default SendOrder;
