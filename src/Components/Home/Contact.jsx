import { Box,Button,Flex,Image,Text } from '@chakra-ui/react';
import React from 'react';
import BackgroundAnimation from "./BackgroundAnimation";
import { skillsImage } from '../Skills/skillsImage';
const Contact = () => {
  return (
   
   <Box  bg="#1A202C" id="contact" w="100%"  pt="5vw" pl="5vw" pb="10" >
      <Text  display="flex" ml="10%" fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }} 
          fontWeight={"400"}
          fontFamily="brushscriptmt" color="purple.200" >Contact
         
          
          </Text>

        <Text fontSize={{ lg: "20", md: "20", sm: "15", base: "10" }} color="white" justifyContent={"center"}
         ml="30%" textAlign={"center"} mr="20%"  mt="2vw"
          >
           Contact Number - +91 9548726449
        </Text>
        <a   href="mailto:04vivek10belwal@gmail.com" target={"_blank"}>
        <Text fontSize={{ lg: "20", md: "20", sm: "15", base: "10" }} color="white" justifyContent={"center"}
         ml="30%" textAlign={"center"} mr="20%"  mt="2vw" _hover={{color : "purple.200"}}
          >
           
          
           Email Address - 04vivek10belwal@gmail.com
        </Text>
        </a>
        <Text fontSize={{ lg: "20", md: "20", sm: "15", base: "10" }} color="white" justifyContent={"center"}
         ml="30%" textAlign={"center"} mr="20%"  mt="2vw"
          >
           Address - Dehradun, Uttarakhand
        </Text>
         <Box display={"flex"} m="auto" w="50%" pt="3vw" ml="30%" >
         <a href='https://github.com/VivBelwal' target={"_blank"}>
            <Box width={"40%"}  m="auto">
              <Image src={skillsImage("github")} w ="100%" alt ="git" />
              </Box>
            </a>
            <a href='https://www.linkedin.com/in/vivek-belwal/' target={"_blank"}>
            <Box width={"30%"} m="auto">
              <Image src={skillsImage("linkdin")} alt ="linkdin" />
              </Box>
            </a>
            <a href="mailto:04vivek10belwal@gmail.com" target={"_blank"}>
            <Box width={"30%"}  m="auto">
              <Image src={skillsImage("gmail")} alt ="gmail" />
              </Box>
            </a>
         </Box>
           
          
      
    </Box>
 
  );
}

export default Contact;
