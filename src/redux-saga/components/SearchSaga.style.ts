import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
const basicSearch = makeStyles<Theme>(() => ({
  noPadding: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    paddingTop: "8.5px !important",
    paddingBottom: "8.5px !important",
  },
}));

export default basicSearch;
