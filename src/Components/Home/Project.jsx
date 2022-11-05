import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
// import '../App.css'
import { SimpleGrid } from "@chakra-ui/react";
import BackgroundAnimation from "./BackgroundAnimation";
import { Grid, GridItem } from "@chakra-ui/react";
import { keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import leadIQ from "../Images/leadIQ.png";
import nature from "../Images/nature.png";
import style from "../Images/stylecraze.png";
import Github from "../Images/GitHub.png";
const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out 2`;

const Project = () => {
  const myProjects = [
    {
      title: "Stylecraze Clone",
      image: `${style}`,
      description:
        "StyleCraze primarily focuses on health & wellness, skin care, hair care...",
      techStack: ["Java Script", "HTML", "CSS"],
      features: ["Social sign-in/sign-up", "Fixed navbar"],
      Glink: "https://github.com/VivBelwal/inexpensive-cause-3321",
      Netlify: "https://stunning-kashata-f9a0b3.netlify.app/index.html",
    },
    {
      title: "LeadIQ Clone",
      image: `${leadIQ}`,
      description:
        "The LeadIQ platform is built to help you prospect smarter and build pipeline faster.",
      techStack: ["Java Script", "HTML", "CSS"],
      features: [
        "Social sign-in/sign-up",
        "Fixed navbar",
        "Pricing and booking a demo",
        "Different payment gateway",
      ],
      Glink: "https://github.com/VivBelwal/silent-toes-7433",
      Netlify: "https://verdant-pegasus-7472d3.netlify.app/",
    },
    {
      title: "Nature's Basket Clone",
      image: `${nature}`,
      description:
        "Nature's Basket is an Indian grocery delivery chain of retail stores focused in gourmet food.",
      techStack: ["Java-Script", "Chakra UI", "React"],
      features: [
        "Social sign-in/sign-up",
        "Fixed navbar",
        "Adding products to the cart",
        "Fetching data from own server",
      ],
      Glink: "https://github.com/VivBelwal/yielding-tongue-8280",
      Netlify: "https://nature-basket.vercel.app/",
    },
  ];

  return (
    <Box bg="#1A202C" id="project" w="100%" pt="5vw" pl="5vw">
      <Text
        display="flex"
        ml="10%"
        fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }}
        fontWeight={"400"}
        fontFamily="brushscriptmt"
        color="purple.200"
      >
        Project
        <Text
          fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }}
          color="white"
          fontWeight={"400"}
          fontFamily="brushscriptmt"
        ></Text>
      </Text>

      {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus facilis, eveniet reiciendis tenetur, ipsum, suscipit explicabo ratione voluptatem vel soluta labore. Assumenda ipsum magnam voluptate repellat tempora nostrum excepturi necessitatibus!
       */}

      {/* ................Projects in Simple Grid Format.................  */}
      <SimpleGrid
        columns={[1, 2, 2, 3]}
        w="80%"
        m="auto"
        mt="3vw"
        gap={{ lg: "5px", md: "5px", sm: "2px", base: "2px" }}
      >
        {myProjects.map((projects) => (
          <Fade bottom>
            <Box
              _hover={{ opacity: "0.8", cursor: "pointer" }}
              bg="blue.500"
              w="80%"
              pl="2vw"
              pr="2vw"
              borderRadius={"10"}
            >
              <Text
                fontSize={{ lg: "20", md: "20", sm: "15", base: "15" }}
                pt="1"
                color="white"
                justifyContent={"center"}
                textAlign={"center"}
              >
                {projects.title}
              </Text>
              <Image src={projects.image} alt={projects.title} pt="1vw" />
              <Text
                fontSize="15px"
                mt="1vw"
                color="white"
                justifyContent={"center"}
                textAlign={"center"}
              >
                {projects.description}
              </Text>
              <Box display={"flex"}>
                {/* {projects.features.map((feature) => (
              <Text fontSize={{ lg: "15", md: "15", sm: "10", base: "7" }} color="white" display={"flex"}
               
          >{feature}</Text>
          ))} */}
              </Box>
              <Box display={"flex"} gap="1vw" ml="1vw">
                {projects.techStack.map((tech) => (
                  <Text
                    fontSize={{ lg: "12", md: "12", sm: "10", base: "10" }}
                    color="white"
                    display={"flex"}
                    mt="1vw"
                  >
                    {tech}
                  </Text>
                ))}
              </Box>
              <Box
                display={"flex"}
                mb="1vw"
                pb="1vw"
                mt="1vw"
                gap="5vw"
                fontSize={{ lg: "15", md: "15", sm: "10", base: "7" }}
              >
                <a href={projects.Glink} target="_blank">
                  <Button>
                    <Image src={`${Github}`} w="30px" alt="github" />
                  </Button>
                </a>

                <a href={projects.Netlify} target="_blank">
                  <Button>
                    <Text
                      fontSize={{ lg: "15", md: "15", sm: "15", base: "15" }}
                    >
                      {" "}
                      Netlify
                    </Text>
                  </Button>
                </a>
              </Box>
            </Box>
          </Fade>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Project;
