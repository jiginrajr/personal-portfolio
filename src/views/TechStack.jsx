import React from "react";
import SlidingText from "../Components/SlidingText";
import reactLogo from "../assets/react.svg";
import reduxLogo from "../assets/redux.png";
import jsLogo from "../assets/js.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import bootstrapLogo from "../assets/bootstrap.png";
import muiLogo from "../assets/mui.png";
import { Box } from "@mui/material";

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
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          gap={10}
        >
          {StackList.map((item) => (
            <Box
              key={item.alt}
              component="img"
              src={item.imgSrc}
              alt={item.alt}
              width={100}
              height={100}
            />
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default TechStack;
