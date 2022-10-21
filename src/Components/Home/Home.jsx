import { Box, Flex, Image,Spacer,Text} from "@chakra-ui/react";
import BackgroundAnimation from "./BackgroundAnimation";


import Type from "./Type"
export default function  Home(){

    return <Box bgColor={"#1A365D"}  p="3vw" >
     
    
      <Flex 
       gap="10%"
       justifyContent={"space-evenly"}>
        <Box w="25%" ml="6vw">
        <Image  src='https://ca.slack-edge.com/T0445MYTCTF-U045097RDRA-0d70e77c5a60-512' borderRadius={"50%"} position="relative" zIndex={2} w="100%"/>
        
        </Box>
        <Box w="50%" >
          <Text 
     fontSize= {{ lg: "40", md: "30", sm: "20", base: "20" }}
     color = "grey"
     >
          Hi, I am ...
          </Text>
          <Spacer />
        < Type />
        </Box>
    
     
        
      </Flex>
      <Box w="20%" display={"flex"}><BackgroundAnimation w="100%" />
      </Box>
     
    
    
    </Box>
}