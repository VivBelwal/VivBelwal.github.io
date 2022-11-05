import { Box,Text } from '@chakra-ui/react';
import React from 'react';
import BackgroundAnimation from "./BackgroundAnimation";
const About = () => {
  return (
    <Box bg="#1A202C" id="about" w="100%" pt="5vw" pl="5vw" pb="5vw">
      <Text  display="flex" ml="10%" fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }} 
          fontWeight={"400"}
          fontFamily="brushscriptmt" color="purple.200" >About
          <Text fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }} color="white" 
          fontWeight={"400"}
          fontFamily="brushscriptmt" ml='5' > Me</Text>
          
          </Text>

        <Text fontSize={{ lg: "20", md: "20", sm: "15", base: "10" }} color="white" justifyContent={"center"}
           ml="30%" textAlign={"center"} mr="20%"  mt="2vw"
          >
          A self-motivated and result-oriented full-stack web developer with more than 1200 hours of add-on coding experience in building user-centric websites. Looking for a challenging role in a growth-oriented organization to showcase my skill through dedicated effort.   </Text>
          
      
    </Box>
  );
}

export default About;
