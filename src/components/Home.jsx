import { Center, Box, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="home-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src="https://guiaojoalpiojo.com/wp-content/uploads/2020/11/tecno-rojo-.jpg"
            alt="tecnorojo"
          />
        </Box>
      </Center>
      <Center fontWeight={"bold"}>
      <br/>
        <h2>Medios de pago:</h2>
      <br/>
      </Center>
      <Center>
      <br/> <br/>
        <h4>Paga en nuestros locales en hasta en 12 cuotas con tarjetas de credito y debito de todos los bancos.</h4>
      </Center>
    </div>
  );
};

export default Home;
