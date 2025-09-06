import "@mantine/core/styles.css";

import { Stack } from "@mantine/core";

import { CartVegetableCard } from "../../components";

import styles from "./CartListOfVegetables.module.css";

import { useTypedSelector } from "../../redux/hooks/redux";

// import type { VegetableType } from "../../type/types";

// interface CartListOfVegetablesProps {
//   // cart: VegetableType[];
//   setCart: (obj: VegetableType[]) => void;
// }

export const CartListOfVegetables = () =>
  // cart,
  // setCart,
  {
    const selectCart = useTypedSelector((state) => state.cartReducer.products);

    return (
      <Stack
        h={300}
        bg="var(--mantine-color-body)"
        align="stretch"
        justify="top"
        gap="md"
        className={styles["cart-list-vegetables"]}
      >
        {selectCart.map((item) => {
          return (
            <CartVegetableCard
              key={item.id}
              item={item}
              // cart={selectCart}
              // setCart={setCart}
            />
          );
        })}
      </Stack>
    );
  };
