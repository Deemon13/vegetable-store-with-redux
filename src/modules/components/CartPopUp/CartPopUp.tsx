import "@mantine/core/styles.css";
import { Popover } from "@mantine/core";

import { useTypedSelector } from "../../redux/hooks/redux";

import { CartListOfVegetables } from "../../components";
import { EmptyCart, CartPopupTotal } from "../../UI";

import styles from "./CartPopUp.module.css";

export const CartPopUp = () => {
  const selectCart = useTypedSelector((state) => state.cartReducer.products);

  return (
    <Popover.Dropdown className={styles.popup}>
      {selectCart.length > 0 ? <CartListOfVegetables /> : <EmptyCart />}
      <CartPopupTotal />
    </Popover.Dropdown>
  );
};
