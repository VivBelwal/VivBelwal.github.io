import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import background from "../../background.css";
const About = () => {
  let aboutText =
    " A self-motivated and result-oriented full-stack web developer with more than 1200 hours of add-on coding experience in building user-centric websites. Looking for a challenging role in a growth-oriented organization to showcase my skill through dedicated effort.";
  aboutText = aboutText.trim().split(" ");

  let arr = new Array(40).fill(0);
  return (
   
    <Box id="aboutBox"  pb={{ lg: "10", md: "10px", sm: "8", base: "2" }}>
      <Grid templateColumns="repeat(10, 1fr)" >
        {arr.map((ele) => (
          <Box className="boxes zoomOut" h={{ lg: "100px", md: "90px", sm: "80px", base: "70px" }}></Box>
        ))}
      </Grid>

      <Box w="20%" position={"absolute"} left="13%" top="10%">
        <Text
          display="flex"
          ml="10%"
          fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }}
          fontWeight={"400"}
          fontFamily="brushscriptmt"
          color="#2196f3"
        >
          About
          <Text
            fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }}
            color="#f1f2b5"
            fontWeight={"400"}
            fontFamily="brushscriptmt"
            ml="5"
          >
            {" "}
            Me
          </Text>
        </Text>
      </Box>

      <Flex
        flexWrap="wrap"
        id="myProfile"
        gap={{ lg: "2", md: "2", sm: "2", base: "1" }}
        w={{ lg: "60%", md: "60%", sm: "60%", base: "70%" }}
        position={"absolute"}
        top={{ lg: "40%", md: "30%", sm: "25%", base: "30%" }}
        
        left="22%"
      >
        {aboutText.map((ele) => (
          <Text
            display="flex"
            fontSize={{ lg: "20", md: "20", sm: "15", base: "10" }}
            color="#f1f2b5"
            className="text-about"
            textAlign={"center"}
          >
            {ele}
          </Text>
        ))}
      </Flex>
    </Box>
  );
};

export default About;
