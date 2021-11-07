import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

interface SearchDialogProps {
  isOpen: boolean;
}

export default function SearchDialog(props: SearchDialogProps) {
  return (
    <Dialog open={props.isOpen}>
      <DialogTitle>
        Search recipe
        <SearchBar />
      </DialogTitle>

      <DialogContent></DialogContent>
    </Dialog>
  );
}
