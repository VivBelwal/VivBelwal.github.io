import {
  Box,
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
    <Box backgroundColor="#1A365D" p="2vw" w="100%" position={"fixed"} zIndex="100" >
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
          justifyContent={"space-evenly"}
          w="60%"
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          color="purple.200"
          fontSize={'20'}
          mt='2'
        >
          <Text>
           Home
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
            <Link to="resume" spy={true} smooth={true}>
              Resume
            </Link>
          </Text>
        </Flex>
        <Menu >
          <MenuButton
          w="20%"
          h=""
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
          />
          <MenuList bg="purple.200">
            <MenuItem icon={<AddIcon />}>Home</MenuItem>
            <Link to="about" spy={true} smooth={true}>
              <MenuItem icon={<InfoIcon />} >
                About
              </MenuItem>
            </Link>
            <MenuItem icon={<StarIcon />}>
              Skills
            </MenuItem>
            <MenuItem icon={<LinkIcon />} >
              Project
            </MenuItem>
            <MenuItem icon={<PhoneIcon />} >
              Contact
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} >
              Resume
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
