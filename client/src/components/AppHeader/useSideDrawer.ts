import React from "react";

type Handlers = {
  openSideDrawer: () => void;
  closeSideDrawer: () => void;
};

export default function useSideDrawer(): [boolean, Handlers] {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = React.useState(false);

  const handlers = React.useMemo(
    () => ({
      openSideDrawer: () => {
        setIsSideDrawerOpen(true);
      },
      closeSideDrawer: () => {
        setIsSideDrawerOpen(false);
      },
    }),
    []
  );
  return [isSideDrawerOpen, handlers];
}
