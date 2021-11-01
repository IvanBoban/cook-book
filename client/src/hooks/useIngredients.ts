import React from "react";
import Ingredient from "../model/Ingredient";

type Handlers = {
  addIngredient: () => void;
  removeIngredient: (index: number) => void;
};

const ingredient = { name: "", quantity: 0 };

export default function useIngredients(
  initialIngredients?: Array<Ingredient>
): [Array<Ingredient>, Handlers] {
  const [ingredients, setIngredients] = React.useState(
    initialIngredients ? initialIngredients : [ingredient]
  );

  const handlers = React.useMemo(
    () => ({
      addIngredient: () => {
        setIngredients([...ingredients, ingredient]);
      },
      removeIngredient: (index: number) => {
        if (ingredients.length === 1) {
          return;
        }
        setIngredients(
          ingredients.filter((_, itemIndex) => itemIndex !== index)
        );
      },
    }),
    [ingredients]
  );

  return [ingredients, handlers];
}
