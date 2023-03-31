import React from "react";
import { Box, Typography } from "@mui/material";

const SlidingText = ({ text }) => {
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h4" ml={2}>{text}</Typography>
    </Box>
  );
};

export default SlidingText;
