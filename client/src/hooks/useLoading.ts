import React from "react";

type Handlers = {
  enableLoading: () => void;
  disableLoading: () => void;
};
export default function useLoading(initialState: boolean): [boolean, Handlers] {
  const [isLoading, setIsLoading] = React.useState(initialState);

  const handlers = React.useMemo(
    () => ({
      enableLoading: () => {
        setIsLoading(true);
      },
      disableLoading: () => {
        setIsLoading(false);
      },
    }),
    []
  );

  return [isLoading, handlers];
}
