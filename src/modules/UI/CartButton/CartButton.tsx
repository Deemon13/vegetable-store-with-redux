import "@mantine/core/styles.css";

import { Popover, Button } from "@mantine/core";

import WhiteCart from "../../../assets/white-cart.png";

import styles from "./CartButton.module.css";

import { useTypedSelector } from "../../redux/hooks/redux";

export const CartButton = () => {
  const selectCart = useTypedSelector((state) => state.cartReducer.products);

  return (
    <Popover.Target>
      <Button variant="filled" color="#54b46a" className={styles["btn-cart"]}>
        {selectCart.length > 0 && (
          <span className={styles["veg-amount"]}>{selectCart.length}</span>
        )}
        Cart
        <img src={WhiteCart} width={20} className={styles["btn-cart-icon"]} />
      </Button>
    </Popover.Target>
  );
};
