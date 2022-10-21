import { Box , Text} from '@chakra-ui/react';
import React from 'react';
import BackgroundAnimation from "./BackgroundAnimation";
const Skills = () => {
  return (
    
     <Box bg="#1A365D" id="skills" w="100%"  pt="5vw" pl="5vw" >
      <Text  display="flex" ml="10%" fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }} 
          fontWeight={"400"}
          fontFamily="brushscriptmt" color="purple.200" >Skills
          <Text fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }} color="white" 
          fontWeight={"400"}
          fontFamily="brushscriptmt" ></Text>
          
          </Text>

        <Text fontSize={{ lg: "20", md: "20", sm: "15", base: "10" }} color="white" justifyContent={"center"}
           ml="30%" textAlign={"center"} mr="20%" mt="2vw"
          >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus facilis, eveniet reiciendis tenetur, ipsum, suscipit explicabo ratione voluptatem vel soluta labore. Assumenda ipsum magnam voluptate repellat tempora nostrum excepturi necessitatibus!
        </Text>
          
      
    </Box>
   
  );
}

export default Skills;
