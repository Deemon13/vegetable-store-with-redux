import { useState } from "react";
import { Card, Image, Text, Button, Group } from "@mantine/core";

import { transformNameOfVegetable } from "../../utils";

import { useTypedDispatch } from "../../redux/hooks/redux";
import { addToCart } from "../../redux/reducers/CartSlice";

import IconDecrease from "../../../assets/Rectangle 70.png";
import IconIncrease from "../../../assets/Union.png";
import IconCart from "../../../assets/cart.png";

import styles from "./VegetableCard.module.css";

interface VegetableTypeCard {
  id: number;
  name: string;
  price: number;
  image?: string;
}

export const VegetableCard = ({
  id,
  image,
  name,
  price,
}: VegetableTypeCard) => {
  const product = { id, image, name, price };
  const [amount, setAmount] = useState(1);

  const dispatch = useTypedDispatch();

  function handleIncreaseAmount() {
    setAmount((prev) => prev + 1);
  }

  function handleDecreaseAmount() {
    if (amount <= 1) {
      return;
    }
    setAmount((prev) => prev - 1);
  }

  function handleAddToCart() {
    dispatch(addToCart({ product, amount }));
  }

  return (
    <Card id={String(id)} shadow="sm" padding="md" radius="lg" withBorder>
      <Card.Section className={styles["vegetable-img-wrapper"]}>
        <Image
          src={image}
          width={276}
          height={276}
          alt={image ? name : ""}
          className={styles["vegetable-img"]}
        />
      </Card.Section>

      <Group
        justify="space-between"
        mt="md"
        mb="xs"
        className={styles["vegetable-data"]}
      >
        <Text fw={500}>
          <span className={styles["vegetable-name"]}>
            {transformNameOfVegetable(name, "-").name}
          </span>
          <span className={styles["vegetable-weight"]}>
            {transformNameOfVegetable(name, "-").weight}
          </span>
        </Text>
        <div>
          <Button
            variant="filled"
            color="gray"
            size="xs"
            radius="md"
            onClick={handleDecreaseAmount}
            className={styles["btn-decrease-amount-list"]}
          >
            <img src={IconDecrease} width={10} />
          </Button>
          <span className={styles["vegetable-amount"]}>{amount}</span>
          <Button
            variant="filled"
            color="gray"
            size="xs"
            radius="md"
            onClick={handleIncreaseAmount}
            className={styles["btn-increase-amount-list"]}
          >
            <img src={IconIncrease} width={10} />
          </Button>
        </div>
      </Group>

      <Group
        justify="space-between"
        mt="md"
        mb="xs"
        className={styles["vegetable-adding-cart"]}
      >
        <Text size="sm" c="dimmed">
          <span className={styles["vegetable-price"]}>$ {price}</span>
        </Text>

        <Button
          id={String(id)}
          variant="light"
          color="#3B944E"
          mt="md"
          radius="md"
          onClick={handleAddToCart}
          className={styles["btn-add-cart"]}
        >
          Add to cart
          <img src={IconCart} width={20} alt="btn-cart-icon" />
        </Button>
      </Group>
    </Card>
  );
};
