import React from "react";

type Handlers = {
  addPreparationStep: () => void;
  removePreparationStep: (index: number) => void;
};
export default function usePreparationSteps(
  initialPreparationSteps?: Array<string>
): [Array<string>, Handlers] {
  const [preparationSteps, setPreparationSteps] = React.useState(
    initialPreparationSteps ? initialPreparationSteps : [""]
  );

  const handlers = React.useMemo(
    () => ({
      addPreparationStep: () => {
        setPreparationSteps([...preparationSteps, ""]);
      },
      removePreparationStep: (index: number) => {
        if (preparationSteps.length === 1) {
          return;
        }
        setPreparationSteps(
          preparationSteps.filter((_, itemIndex) => itemIndex !== index)
        );
      },
    }),
    [preparationSteps]
  );

  return [preparationSteps, handlers];
}
