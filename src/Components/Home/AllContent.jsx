import Home from "./Home"
import About from "./About"

import Project from "./Project"
import Contact from "./Contact"
import React from 'react';
import { Box, } from "@chakra-ui/react";
import Stats from "./GithubStatics"
import GithubCalender from "./GithubCalender"
import Skill from "../Skills/Skill"
const AllContent = () => {
  return (
    <Box  w="100%"  >
     
      <About/>
      {/* <Skills/> */}
      <Skill />
      <Project/>
      <GithubCalender />
      <Stats />
      <Contact/>
          </Box>
  );
}

export default AllContent;
