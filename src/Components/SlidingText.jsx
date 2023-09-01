import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const SlidingText = ({ text }) => {
  return (
    <div>
    <motion.div
      initial={{ x: "-10vw" }}
      animate={{ x: "100vw" }}
      transition={{
        duration: 15,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <Box display="flex" alignItems="center">
        <Typography variant="h4" ml={2}>
          {text}
        </Typography>
      </Box>
    </motion.div>
    </div>
  );
};

export default SlidingText;
