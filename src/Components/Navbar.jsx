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
import Navbar_CSS from "../navbar.css";
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
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navColour, updateNavbar] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <Box
      bg="#0E0C1D"
      p="2vw"
      w="100%"
      position={"sticky"}
      top="0px"
      zIndex="10"
      className={navColour ? "navScroll" : "navbar"}
      // border="1px solid white"
    >
      <Flex justifyContent={"space-between"}>
        <Box w="30%" display="flex" ml="11%" _hover={{ cursor: "pointer" }}>
          <Text
            fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }}
            fontFamily="brushscriptmt"
            className={navColour ? "first-name-scroll" : "first-name"}
          >
            Vivek
          </Text>
          <Text
            fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }}
            fontFamily="brushscriptmt"
            className={navColour ? "second-name-scroll" : "second-name"}
            ml="5"
          >
            Belwal
          </Text>
        </Box>
        <Flex
          justifyContent={{
            base: "space-evenly",
            sm: "space-evenly",
            md: "space-evenly",
            lg: "space-evenly",
          }}
          w="60%"
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          color="#2196f3"
          fontSize={{ md: "20", sm: "0", base: "0" }}
          mt="2"
          className="nav-menu"
        >
          <Text>
            <Link to="home" spy={true} smooth={true}>
              Home
            </Link>
            <Box></Box>
          </Text>
          <Text>
            <Link to="aboutBox" spy={true} smooth={true}>
              About
            </Link>
            <Box></Box>
          </Text>
          <Text>
            <Link to="skills" spy={true} smooth={true}>
              Skills
            </Link>
            <Box></Box>
          </Text>
          <Text>
            <Link to="project" spy={true} smooth={true}>
              Projects
            </Link>
            <Box></Box>
          </Text>
          <Text>
            <Link to="contact" spy={true} smooth={true}>
              Contact
            </Link>
            <Box></Box>
          </Text>
          <Text>
            <a
              href="https://drive.google.com/file/d/1ln87u2TaNJ619qlEcVoXX7Q3T8pC73V3/view?usp=sharing"
              target={"_blank"}
              spy={true}
              smooth={true}
            >
              Resume
            </a>
            <Box></Box>
          </Text>
        </Flex>

        <Menu>
          <MenuButton
            bg="#f1f2b5"
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
          <MenuList
            bg="#0E0C1D"
            // w={{ lg: "120px", md: "120px", sm: "80px", base: "100px" }}

            color="#2196f3"
            border="2px solid #2196f3"
            fontFamily="brushscriptmt"
          >
            <Link to="home" smooth={true} w="5px">
              <MenuItem icon={<AddIcon />}>Home</MenuItem>
            </Link>

            <Link to="aboutBox" spy={true} smooth={true}>
              <MenuItem icon={<InfoIcon />}>About</MenuItem>
            </Link>
            <Link to="skills" spy={true} smooth={true}>
              <MenuItem icon={<StarIcon />}>Skills</MenuItem>
            </Link>

            <Link to="project" spy={true} smooth={true}>
              <MenuItem icon={<LinkIcon />}>Project</MenuItem>
            </Link>
            <Link to="contact" spy={true} smooth={true}>
              <MenuItem icon={<PhoneIcon />}>Contact</MenuItem>
            </Link>

            <a
              href="https://drive.google.com/file/d/1ln87u2TaNJ619qlEcVoXX7Q3T8pC73V3/view?usp=sharing"
              target={"_blank"}
              spy={true}
              smooth={true}
            >
              <MenuItem icon={<ExternalLinkIcon />}>Resume</MenuItem>
            </a>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
