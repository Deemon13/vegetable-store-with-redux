import "@mantine/core/styles.css";
import { SimpleGrid } from "@mantine/core";

import type { VegetableType } from "../../modules/type/types";

import { VegetableCard } from "../../modules/components";

interface VegetablesListProps {
  vegetables: VegetableType[];
}

export const VegetablesList = ({ vegetables }: VegetablesListProps) => {
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
          />
        );
      })}
    </SimpleGrid>
  );
};
