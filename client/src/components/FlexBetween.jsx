import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Style component
// PROS : allows us to reuse the sets of css properties
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export default FlexBetween;
