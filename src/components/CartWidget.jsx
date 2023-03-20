import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <div className="cart-profile">
        <Button size="lg" variant="ghost" colorScheme="black">
          <span className="material-symbols-outlined">🛒</span>
          <span>{quantity}</span>
        </Button>
      </div>
    </>
  );
};

export default CartWidget;
