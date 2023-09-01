import React from "react";
import SlidingText from "../Components/SlidingText";
import reactLogo from "../assets/react.svg";
import reduxLogo from "../assets/redux.png";
import jsLogo from "../assets/js.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import bootstrapLogo from "../assets/bootstrap.png";
import muiLogo from "../assets/mui.png";
import { Box, Grid } from "@mui/material";

const StackList = [
  { alt: "css", imgSrc: cssLogo },
  { alt: "html", imgSrc: htmlLogo },
  { alt: "javascript", imgSrc: jsLogo },
  { alt: "react", imgSrc: reactLogo },
  { alt: "redux", imgSrc: reduxLogo },
  { alt: "material ui", imgSrc: muiLogo },
  { alt: "bootstrap", imgSrc: bootstrapLogo },
];

const TechStack = () => {
  return (
    <section>
      <SlidingText text="TechStack" />
      <Box>
        <Grid
          container
          justifyContent="space-around"
          sx={{height: "100vh",minWidth: "100vw", backgroundColor:"#eceff1",}}
        >
          {StackList.map((item) => (
            <Grid item xs={6} sm={4} mt={2} display="flex" justifyContent="center" alignItems="center" >
              <Box
                key={item.alt}
                component="img"
                src={item.imgSrc}
                alt={item.alt}
                width={100}
              />
            </Grid>
          ))}
      </Grid>
        </Box>
    </section>
  );
};

export default TechStack;
