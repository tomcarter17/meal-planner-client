import { type SxProps } from "@mui/material";
import { Box, CircularProgress } from "@mui/material";

interface SpinnerProps {
  sx?: SxProps;
}

export const Spinner = (props: SpinnerProps) => (
  <Box
    alignItems="center"
    component="div"
    height="100%"
    justifyContent="center"
    sx={props.sx}
    style={{ display: "flex" }}
    width="100%"
  >
    <CircularProgress />
  </Box>
);
