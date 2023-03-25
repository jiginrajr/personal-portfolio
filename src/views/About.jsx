import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <section>
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
                marginLeft: "95%",
                opacity: 0
              },
            },
            animation: "looping 10s infinite linear",
            animationDelay: "2s",
            position: "absolute",
          }}
        >
          <Box component="span">About</Box>
        </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          height: "50vh",
          width: "100%",
          background:
            "linear-gradient(69.81deg,rgba(255,209,139,.3) 9.22%,rgba(255,183,217,.3) 33.5%,rgba(139,186,255,.3) 78.79%)",
        }}
      >
        <Box ml={3} border="3px solid black" p={3}>
          <Typography variant="h5" color="black">
            Front-End Developer
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default About;
