import React from "react";
import "./header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Link } from "@mui/material";

const Header = () => {
  return (
    <header>
      <Box
        display="flex"
        sx={{
          width: "100%",
          height:"10vh",
          //   background: "rgb(0,30,36)",
          //   background: "linear-gradient(90deg, rgba(0,30,36,0.6278886554621849) 0%, rgba(3,139,130,0.9836309523809523) 38%, rgba(89,216,242,1) 100%)",

          //   background: "rgb(238,222,174)",
          // background: "linear-gradient(90deg, rgba(238,222,174,1) 0%, rgba(210,233,148,1) 100%)",
          background:"linear-gradient(69.81deg,rgba(255,209,139,.3) 9.22%,rgba(255,183,217,.3) 33.5%,rgba(139,186,255,.3) 78.79%)",
          color: "white",
          justifyContent: "flex-start",
          columnGap: "2rem",
          padding: "1rem",
        }}
      >
        <Link
          href="www.google.com"
          underline="none"
          sx={{ color: "black", ":hover": { color: "black" } }}
        >
          <GitHubIcon />
        </Link>
        <Link
          href="www.google.com"
          underline="none"
          sx={{ color: "black", ":hover": { color: "black" } }}
        >
          <LinkedInIcon />
        </Link>
      </Box>
    </header>
  );
};

export default Header;
