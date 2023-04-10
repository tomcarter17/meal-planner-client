import { Box } from "@suid/material/Box";
import CircularProgress from "@suid/material/CircularProgress";
import type { SxProps } from "@suid/system/sxProps";

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
