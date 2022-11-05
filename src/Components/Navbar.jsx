import {
  Box,
  Container,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  LinkIcon,
  AttachmentIcon,
  PhoneIcon,
  StarIcon,
  ViewIcon,
  InfoIcon,
} from "@chakra-ui/icons";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <Box backgroundColor="#1A202C" p="2vw" w="100%" position={"fixed"} zIndex="100" >
      <Flex justifyContent={"space-between"}  >
        <Box w="30%" display='flex' ml="11%">
          <Text 
          fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }} 
          color="purple.200" 
          fontWeight={"400"}
          fontFamily="brushscriptmt"  >
            Vivek
          </Text>
          <Text fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }} color="white" 
          fontWeight={"400"}
          fontFamily="brushscriptmt" ml='5'  >
            Belwal
          </Text>
        </Box>
        <Flex
          justifyContent={{ base: "space-evenly", sm: "space-evenly", md: "space-evenly", lg: "space-evenly" }}
          w="60%"
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          color="purple.200"
          fontSize={{  md: "20", sm: "0", base: "0" }}
          mt='2'
        >
          <Text>
           
           <Link to="home" spy={true} smooth={true}>
           Home
            </Link>
          </Text>
          <Text>
            <Link to="about" spy={true} smooth={true}>
              About
            </Link>
          </Text>
          <Text>
            <Link to="skills" spy={true} smooth={true}>
              Skills
            </Link>
          </Text>
          <Text>
            <Link to="project" spy={true} smooth={true}>
              Project
            </Link>
          </Text>
          <Text>
            <Link to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </Text>
          <Text>
            <a href="https://drive.google.com/file/d/1ln87u2TaNJ619qlEcVoXX7Q3T8pC73V3/view?usp=sharing" 
            target={"_blank"}
            spy={true} smooth={true}>
              Resume
            </a>
          </Text>
        </Flex>
        
        <Menu >
          <MenuButton
          w="10%"
          h=""
          bg="white"
            display={{
              base: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            }}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            mr="8vw"
          />
          <MenuList bg="#1A202C" w="10%" color="black" ml="2vw" pl="2vw" pr="2vw" fontFamily="brushscriptmt">
          <Link to="home" spy={true} smooth={true}>
          <MenuItem icon={<AddIcon />}>Home</MenuItem>
            </Link>
            
            <Link to="about" spy={true} smooth={true}>
              <MenuItem icon={<InfoIcon />} >
            
              About
           
              </MenuItem>
            </Link>
            <Link to="skills" spy={true} smooth={true}>
            <MenuItem icon={<StarIcon />}>
              Skills
            </MenuItem>
            </Link>
            
            <Link to="project" spy={true} smooth={true}>
            <MenuItem icon={<LinkIcon />} >
            
              Project
           
            </MenuItem>
            </Link>
            <Link to="contact" spy={true} smooth={true}>
             
              <MenuItem icon={<PhoneIcon />} >
              Contact
           </MenuItem>
            </Link>
           
            <a href="https://drive.google.com/file/d/1ln87u2TaNJ619qlEcVoXX7Q3T8pC73V3/view?usp=sharing" 
            target={"_blank"}
            spy={true} smooth={true}>
            
            <MenuItem icon={<ExternalLinkIcon />} >
            Resume
            </MenuItem>
            </a>
           
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
