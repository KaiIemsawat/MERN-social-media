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

// Notes :
// 'styled(Box)' <- 'box' allows us to pass any type of css property and use it as component property
// Much like 'padding' and 'backgroundColor' from the tag below in 'navbar/index.jsx'
{
    /* <FlexBetween padding="1rem 6%" backgroundColor={alt}>Navbar</FlexBetween> */
}
