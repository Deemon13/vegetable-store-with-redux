import "@mantine/core/styles.css";
import { Popover } from "@mantine/core";

import { Logo, CartButton } from "../../modules/UI";
import { CartPopUp } from "../../modules/components";

export const Header = () => {
  return (
    <>
      <Logo />
      <Popover position="bottom-end" offset={20}>
        <CartButton />
        <CartPopUp />
      </Popover>
    </>
  );
};
