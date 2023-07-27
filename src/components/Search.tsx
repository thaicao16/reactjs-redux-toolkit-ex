import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  BoxProps,
} from "@mui/material";
import Box from "@mui/material/Box/Box";
import basicSearch from "./Search.style";
import { ReactComponent as SearchIcon } from "../assets/images/ic_search.svg";
import { ReactComponent as SearchFilterIcon } from "../assets/images/ic_search_filter.svg";
import { useState } from "react";

export default function Search({
  onSearchData,
  placeHolder,
}: BasicSearchProps) {
  const classes = basicSearch();

  const [searchState, setSearchState] = useState("");

  const updateSearchValue = (event: { target: { value: string } }) => {
    setSearchState(event.target.value);
    onSearchData(event.target.value);
  };

  const handleClickSearch = () => {
    onSearchData(searchState);
  };

  const handleMouseDownSearch = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box>
      <OutlinedInput
        fullWidth
        id="textField-search"
        classes={{ input: classes.noPadding }}
        sx={{
          backgroundColor: "#F8F8F8",
          width: { md: "450px", lg: "800px" },
          margin: "30px",
        }}
        type="search"
        defaultValue={searchState}
        placeholder={placeHolder}
        onChange={(event) => {
          updateSearchValue(event);
        }}
        inputProps={{
          style: {
            padding: "0px !important",
            marginLeft: 0,
            marginRight: 0,
            minWidth: 50,
          },
        }}
        startAdornment={
          <InputAdornment position="start">
            <IconButton
              disableRipple
              sx={{ paddingLeft: 0.5, paddingRight: 0 }}
              onClick={handleClickSearch}
              onMouseDown={handleMouseDownSearch}
              edge="start"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              sx={{ paddingLeft: 0, paddingRight: 0.5 }}
              onClick={handleClickSearch}
              onMouseDown={handleMouseDownSearch}
              edge="end"
            >
              <SearchFilterIcon />
            </IconButton>
          </InputAdornment>
        }
        label=""
      />
    </Box>
  );
}

interface BasicSearchProps extends BoxProps {
  onSearchData: (searchValue: string) => void;
  placeHolder: string;
}
