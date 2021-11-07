import React from "react";

type Handlers = {
  openSearchDialog: () => void;
  closeSearchDialog: () => void;
};

export default function useSideDrawer(): [boolean, Handlers] {
  const [isSearchDialogOpen, setIsSearchDialogOpen] = React.useState(false);

  const handlers = React.useMemo(
    () => ({
      openSearchDialog: () => {
        setIsSearchDialogOpen(true);
      },
      closeSearchDialog: () => {
        setIsSearchDialogOpen(false);
      },
    }),
    []
  );
  return [isSearchDialogOpen, handlers];
}
