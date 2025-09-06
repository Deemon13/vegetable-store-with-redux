import "@mantine/core/styles.css";

// import { useEffect } from "react";
import { Popover } from "@mantine/core";

import { CartListOfVegetables } from "../../components";
import { EmptyCart, CartPopupTotal } from "../../UI";

import styles from "./CartPopUp.module.css";

import { useTypedSelector } from "../../redux/hooks/redux";

// import type { VegetableType } from "../../type/types";

// interface CartPopUpProps {
// cart: VegetableType[];
// setCart: (obj: VegetableType[]) => void;
// total: number;
// setTotal: (total: number) => void;
// }

export const CartPopUp = () => {
  const selectCart = useTypedSelector((state) => state.cartReducer.products);

  // useEffect(() => {
  //   createTotalCart();
  // }, [cart]);

  // function createTotalCart() {
  //   const totalValueOfVegetables = selectCart.reduce((acc, item) => {
  //     return acc + item.price * item.amount;
  //   }, 0);

  //   setTotal(totalValueOfVegetables);
  // }

  return (
    <Popover.Dropdown className={styles.popup}>
      {selectCart.length > 0 ? <CartListOfVegetables /> : <EmptyCart />}
      <CartPopupTotal />
    </Popover.Dropdown>
  );
};
