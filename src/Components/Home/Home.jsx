import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image,Spacer,Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import resume from "../../Components/Resume/viv.pdf";
import BackgroundAnimation from "./BackgroundAnimation";


import Type from "./Type"
export default function  Home(){


const downloadTxtFile = (e) =>{
e.href = "https://drive.google.com/file/d/1ln87u2TaNJ619qlEcVoXX7Q3T8pC73V3/view?usp=sharing";
e.download = resume;
}
   
    return <Box bgColor={"#1A202C"}  p="3vw" >
     
    
      <Flex 
       gap="10%"
       justifyContent={"space-evenly"}>
        <Box w="25%" ml="6vw">
        <Image  src='https://ca.slack-edge.com/T0445MYTCTF-U045097RDRA-0d70e77c5a60-512' borderRadius={"50%"} position="relative" zIndex={2} w="100%"/>
        
        </Box>
        <Box w="50%" mt="3vw"  >
          <Text 
     fontSize= {{ lg: "40", md: "30", sm: "20", base: "20" }}
     color = "grey"
     >
          Hi, I am ...
          </Text>
          <Spacer />
        < Type />
        <a href="https://drive.google.com/file/d/1ln87u2TaNJ619qlEcVoXX7Q3T8pC73V3/view?usp=sharing"
        target="_blank"
        download={true}>
        <Button mt="2vw" bg={"blue.500"} color="white" _hover={{color : "black"}}
       onClick={downloadTxtFile}
      download={true}>Resume  <DownloadIcon  color={"white"}/> </Button>
        </a>
        
        </Box>
    
     
        
      </Flex>
      <Box w="20%" display={"flex"}><BackgroundAnimation w="100%" />
      </Box>
     
    
    
    </Box>
}