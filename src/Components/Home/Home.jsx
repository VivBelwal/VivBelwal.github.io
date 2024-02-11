import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import resume from "../../Components/Resume/viv.pdf";
import BackgroundAnimation from "./BackgroundAnimation";
import home from "../../home.css";
import profile from "../Images/Profile.jpg";
import Type from "./Type";
export default function Home() {
  // const downloadTxtFile = (e) =>{
  // e.href = "https://drive.google.com/u/0/uc?id=1ln87u2TaNJ619qlEcVoXX7Q3T8pC73V3&export=download";
  // e.download = resume;
  // }

  return (
    <Box pt="2%" pb = '2%' id="home" w='100%'>
      <Flex  justifyContent={"space-evenly"} w="100%">
        <Box w="25%" mt='3vw' ml="8vw"  display="flex" justifyContent={"center"} alignItems="center">
          <Image
            src="https://ca.slack-edge.com/T0445MYTCTF-U045097RDRA-0d70e77c5a60-512"
            borderRadius={"50%"}
            w="100%"
          />
        </Box>
        <Box w="60%" mt="5vw" >
          <Text
            fontSize={{ lg: "40", md: "30", sm: "20", base: "20" }}
            color="#f1f2b5"
          >
            Hi, I am ...
          </Text>
          <Spacer />
          <Type />
          <Box pos="relative">
          <a
            href="https://drive.google.com/u/0/uc?id=1ln87u2TaNJ619qlEcVoXX7Q3T8pC73V3&export=download"
            target="_blank"
            download={true}
          >
            <Button
            // position={"absolute"}
            // left ="35%"
            m="auto"
              mt="2vw"
              bg={"#2196f3"}
              color="#f1f2b5"
              _hover={{ color: "black" }}
              display="flex"
              gap="15%"
              w={{ lg: "120px", md: "120px", sm: "100px", base: "90px" }}
              h={{ lg: "50px", md: "40px", sm: "30px", base: "20px" }}
              fontSize={{ lg: "20px", md: "20px", sm: "15px", base: "10px" }}
            >
              Resume <DownloadIcon color={"#f1f2b5"} />{" "}
            </Button>
          </a>
          </Box>
          
        </Box>
      </Flex>
      <Box w="20%" display={"flex"}>
        <BackgroundAnimation w="100%" />
      </Box>
    </Box>
  );
}
