import { FunctionComponent } from "react";
import { CircularProgress, Stack } from "@mui/material";

const Loader: FunctionComponent = () => (
  <Stack direction="row" justifyContent="center" sx={{ width: "99vw" }}>
    <Stack alignItems="center" marginBottom={10}>
      <CircularProgress size={40} thickness={4} variant="indeterminate" />
    </Stack>
  </Stack>
);

Loader.propTypes = {};

export default Loader;
