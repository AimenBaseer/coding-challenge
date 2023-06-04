import { Button, Stack, TextField } from "@mui/material";
import { ChangeEvent, FunctionComponent } from "react";

interface Props {
  handleChangeSearch: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSearchClick: () => void;
}
const SearchBar: FunctionComponent<Props> = ({
  handleChangeSearch,
  handleSearchClick,
}) => {
  return (
    <Stack direction="row" className="self-center">
      <TextField
        id="filled-basic"
        label="Search"
        variant="outlined"
        className="w-72 self-center"
        placeholder="search by NFT title"
        onChange={handleChangeSearch}
      />
      <Button variant="contained" onClick={handleSearchClick}>
        Search
      </Button>
    </Stack>
  );
};

export default SearchBar;
