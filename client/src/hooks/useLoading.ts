import React from "react";

export default function useLoading(initialState: boolean) {
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
