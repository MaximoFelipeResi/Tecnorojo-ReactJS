import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import ProfileWidget from "./ProfileWidget";
import { Flex, Box, Spacer, Container, Menu, MenuButton,MenuList, MenuItem, Button, Avatar } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <>
      <Container className="nav-bar" maxW="150rem" bg="white" color="#262626">
        <Flex alignItems="center" gap="2">
        <Link to={"/"}>
          <Avatar
            size="xl"
            src="data:image/png;base64,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"
          />
          </Link>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="ghost"
                  colorScheme="black"
                  m="5"
                >
                  Productos
                </MenuButton>
              </Link>
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="ghost"
                colorScheme="black"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categorias
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Apple"}`}>
                  <MenuItem>Apple</MenuItem>
                </Link>
                <Link to={`/category/${"Samsung"}`}>
                  <MenuItem>Samsung</MenuItem>
                </Link>
                <Link to={`/category/${"Motorola"}`}>
                  <MenuItem>Motorola</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="ghost"
                  colorScheme="black"
                  m="5"
                >
                  Nosotros
                </MenuButton>
              </Link>
            </Menu>

            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="ghost"
                  colorScheme="black"
                  m="5"
                >
                  Servicios
                </MenuButton>
              </Link>
            </Menu>
            
          </Box>
          <Spacer />
          <Box p="10" w="100px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
          <Box p="10" w="100px" h="100">
            <Link to={"/cart"}>
              <ProfileWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
