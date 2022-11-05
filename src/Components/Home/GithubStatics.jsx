import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Stats = () => {
  return (
    // streak 
    <Box style={{backgroundColor:"#1A202C"}} pb="5vw" >
      <Text display="flex" ml="12.5%" fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }} 
          fontWeight={"400"}
          fontFamily="brushscriptmt" color="purple.200" >My 
          <Text fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }} color="white" 
          fontWeight={"400"}
          fontFamily="brushscriptmt" ml='5' > Statistics</Text>
          
          </Text>
      <Box style={{ width: "60%", margin: "auto" , }} pt="5vw">
        <a href="https://github.com/VivBelwal">
          <img
           style={{width:"100%"}}
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com?user=VivBelwal&theme=tokyonight"
          />
        </a>
      </Box>
      {/* [![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=VivBelwal&theme=tokyonight)](https://git.io/streak-stats) */}
      <Box
        style={{
          width: "60%",
        
          display: "flex",
          margin: "auto",
          
        }}
        pt="5vw"
      >
        <Box width="47%">
        <a href="https://github.com/VivBelwal">  
          <img
          width={"100%"}
            align="right"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=VivBelwal"  //launguages
          />
        </a>
        </Box>
       
       <Box width="65%">
       <a href="https://github.com/VivBelwal">
          <img  width={"100%"}
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=VivBelwal&count_private=true&show_icons=true" //stats
          />
        </a>
       </Box>
        
      </Box>
    </Box>
  );
};

export default Stats;