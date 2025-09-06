import "@mantine/core/styles.css";

// import { type MouseEvent } from "react";
import { SimpleGrid } from "@mantine/core";

import { VegetableCard } from "../../modules/components";

import type { VegetableType } from "../../modules/type/types";

interface VegetablesListProps {
  vegetables: VegetableType[];
  // setVegetables: (obj: VegetableType[]) => void;
  // cart: VegetableType[];
  // setCart: (obj: VegetableType[]) => void;
}

// interface VegetableType {
//   id: number;
//   name: string;
//   price: number;
//   image?: string;
//   category?: string;
//   amount?: number;
// }

export const VegetablesList = ({
  vegetables,
}: // setVegetables,
// cart,
// setCart,
VegetablesListProps) => {
  // function handleIncreaseAmount(
  //   evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  // ) {
  //   const vegetablesWithIncreaseAmount = vegetables.map((item) => {
  //     if (item.id !== Number((evt.target as HTMLElement).offsetParent?.id)) {
  //       return item;
  //     } else {
  //       item.amount += 1;
  //       return item;
  //     }
  //   });

  //   setVegetables([...vegetablesWithIncreaseAmount]);
  // }

  // function handleDecreaseAmount(
  //   evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  // ) {
  //   const vegetablesWithIncreaseAmount = vegetables.map((item) => {
  //     if (item.id !== Number((evt.target as HTMLElement).offsetParent?.id)) {
  //       return item;
  //     } else {
  //       // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  //       item.amount <= 0 ? (item.amount = 0) : (item.amount -= 1);
  //       return item;
  //     }
  //   });

  //   setVegetables([...vegetablesWithIncreaseAmount]);
  // }

  // function handleAddToCart(
  //   evt: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  // ) {
  //   let newCart = [];

  //   const vegetableToCartId = Number(
  //     (evt.target as HTMLElement).offsetParent?.id
  //   );

  //   const vegetableToCart: VegetableType | undefined = vegetables.find(
  //     (item) => item.id === vegetableToCartId
  //   );

  //   if (!vegetableToCart || vegetableToCart.amount === 0) {
  //     return;
  //   }

  //   if (cart.some((item) => item.id === vegetableToCartId)) {
  //     const vegetableExist = cart.find((item) => item.id === vegetableToCartId);
  //     const amountToAdd = vegetableToCart.amount;

  //     if (vegetableExist) {
  //       vegetableExist.amount += amountToAdd;
  //     }

  //     newCart = [...cart];
  //   } else {
  //     newCart = [...cart, vegetableToCart];
  //   }

  //   setCart([...newCart]);

  //   const vegetablesWithAmount = vegetables.map((item) => {
  //     if (item.id !== vegetableToCartId) {
  //       return item;
  //     } else {
  //       const newItem = { ...item };
  //       newItem.amount = 1;
  //       return newItem;
  //     }
  //   });

  //   setVegetables([...vegetablesWithAmount]);
  // }
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 4 }}
      spacing={{ base: 10, sm: "md" }}
      verticalSpacing={{ base: "md", sm: "md" }}
    >
      {vegetables.map(({ id, image, name, price }) => {
        return (
          <VegetableCard
            key={id}
            id={id}
            image={image}
            name={name}
            price={price}
            // amount={amount}
            // increaseAmount={(evt) => handleIncreaseAmount(evt)}
            // decreaseAmount={(evt) => handleDecreaseAmount(evt)}
            // category={""}
            // addToCart={(evt) => handleAddToCart(evt)}
          />
        );
      })}
    </SimpleGrid>
  );
};
