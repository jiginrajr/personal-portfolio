import React from "react";
import { Box, Typography } from "@mui/material";

const SlidingText = ({text}) => {
  return (
      <Box
        sx={{
          backgroundColor: "#f0e1da",
          border: "1px solid black",
          borderStyle: "solid none solid none",
        }}
      >
        <Box position="relative" height="5vh" display="flex" alignItems="center">
        <Typography
          sx={{
            "@keyframes looping": {
              from: {
                // transform: "translateX(0%)",
                marginLeft: "0%",
                opacity: 0
            },
            "10%":{
                opacity: 1
            },
            "90%":{
                opacity: 1
            },
            to: {
                // transform: "translateX(100%)",
                marginLeft: "90%",
                opacity: 0
              },
            },
            animation: "looping 10s infinite linear",
            animationDelay: "0.5s",
            position: "absolute",
          }}
        >
          <Box component="span">{text}</Box>
        </Typography>
        </Box>
      </Box>
  );
};

export default SlidingText;
