const { Box } = require("@mui/material");
const { styled, display } = require("@mui/system");

const FlexBetween = styled(Box)({
  display: " flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
