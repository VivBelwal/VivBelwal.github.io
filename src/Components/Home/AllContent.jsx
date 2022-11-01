import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Project from "./Project"
import Contact from "./Contact"
import React from 'react';
import { Box, } from "@chakra-ui/react";
import Stats from "./GithubStatics"
import GithubCalender from "./GithubCalender"
import Skill from "../Skills/Skill"
const AllContent = () => {
  return (
    <Box  w="100%" position={"absolute"} top={{ lg: "80px", md: "60px", sm: "40px", base: "40px" }}>
      <Home/>
      <About/>
      <Skills/>
      <Skill />
      <Project/>
      <GithubCalender />
      <Stats />
      <Contact/>
          </Box>
  );
}

export default AllContent;
