import React from "react";
import { Box, Typography } from "@mui/material";
import SlidingText from "../Components/SlidingText";

const About = () => {
  return (
    <section>
      <SlidingText text="About"/>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          height: "100vh",
          minWidth: "100vw",
          // background:
          //   "linear-gradient(69.81deg,rgba(255,209,139,.3) 9.22%,rgba(255,183,217,.3) 33.5%,rgba(139,186,255,.3) 78.79%)",
          backgroundColor:"#eceff1"
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
