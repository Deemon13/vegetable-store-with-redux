import "@mantine/core/styles.css";

import { Popover } from "@mantine/core";

import { Logo, CartButton } from "../../modules/UI";
import { CartPopUp } from "../../modules/components";

// interface HeaderProps {
// cart: {
//   id: number;
//   name: string;
//   price: number;
//   image?: string;
//   category?: string;
//   amount: number;
// }[];
// setCart: (
//   obj: {
//     id: number;
//     name: string;
//     price: number;
//     image?: string;
//     category?: string;
//     amount: number;
//   }[]
// ) => void;
// total: number;
// setTotal: (total: number) => void;
// }

export const Header = () => {
  return (
    <>
      <Logo />
      <Popover position="bottom-end" offset={20}>
        <CartButton />
        <CartPopUp
        // cart={cart}
        // setCart={setCart}
        // total={total}
        // setTotal={setTotal}
        />
      </Popover>
    </>
  );
};
