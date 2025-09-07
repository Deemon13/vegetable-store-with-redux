import "@mantine/core/styles.css";
import { type MouseEvent } from "react";
import { Button } from "@mantine/core";

import type { CartVegetableType } from "../../type/types";

import { useTypedDispatch } from "../../redux/hooks/redux";
import { increaseAmount, decreaseAmount } from "../../redux/reducers/CartSlice";

import { transformNameOfVegetable } from "../../../modules/utils";

import IconDecrease from "../../../assets/Rectangle 70.png";
import IconIncrease from "../../../assets/Union.png";

import styles from "./CartVegetableCard.module.css";

interface CartVegetableCardProps {
  item: CartVegetableType;
}

export const CartVegetableCard = ({ item }: CartVegetableCardProps) => {
  const dispatch = useTypedDispatch();
  function handleIncreaseAmountCart(
    evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    if ((evt.target as Element).nodeName !== "BUTTON") {
      return;
    }

    dispatch(increaseAmount(item));
  }

  function handleDecreaseAmountCart(
    evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    if ((evt.target as Element).nodeName !== "BUTTON") {
      return;
    }

    if (item.amount <= 1) {
      return;
    }

    dispatch(decreaseAmount(item));
  }

  return (
    <div id={String(item.id)} className={styles["cart-vegetable-card"]}>
      <img src={item.image} width="64" height="64" alt="vegetable-image" />
      <div className={styles["cart-vegetable-card-data"]}>
        <div className={styles["cart-vegetable-card-info"]}>
          <div className={styles["cart-vegetable-card-descr"]}>
            <span>{transformNameOfVegetable(item.name, "-").name}</span>
            <span>{transformNameOfVegetable(item.name, "-").weight}</span>
          </div>
          <div className={styles["cart-vegetable-card-price"]}>
            $ {item.price}
          </div>
        </div>
        <div className={styles["cart-vegetable-card-actions"]}>
          <Button
            variant="filled"
            color="gray"
            size="xs"
            radius="md"
            onClick={handleDecreaseAmountCart}
            className={styles["btn-decrease-amount-cart"]}
          >
            <img src={IconDecrease} width={10} />
          </Button>
          <span className={styles["cart-vegetable-amount"]}>{item.amount}</span>
          <Button
            variant="filled"
            color="gray"
            size="xs"
            radius="md"
            onClick={handleIncreaseAmountCart}
            className={styles["btn-increase-amount-cart"]}
          >
            <img src={IconIncrease} width={10} />
          </Button>
        </div>
      </div>
    </div>
  );
};
