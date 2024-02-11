// ----------------- Chakra-UI Components --------------------------------
import { Box, Flex, Image, Text , Grid, keyframes} from "@chakra-ui/react";
// ----------------- XXXXXXXXXXXXXXXXXXXX --------------------------------

// ----------------- Style File Import  ----------------------------------
import "../../project.css";
// ----------------- XXXXXXXXXXXXXXXXXXXX --------------------------------

// ----------------- React Hooks ----------------------------------------
import React, { useEffect, useState } from "react";
// ----------------- XXXXXXXXXXXXXXXXXXXX --------------------------------

// ----------------- Carousel for Projects Images  --------------------------------
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// ----------------- XXXXXXXXXXXXXXXXXXXX --------------------------------

// ----------------- Projects Images --------------------------------
// Skin Care
import Skin_Cart from "../Images/SkinCare/Cart_Page.jpg";
import Skin_Home from "../Images/SkinCare/Home_Skin.jpg";
import Skin_Login from "../Images/SkinCare/Login_Page.jpg";
import Skin_Detail from "../Images/SkinCare/Product_Detail_Page.jpg";
import Skin_Product from "../Images/SkinCare/Product_Page.jpg";
import Skin_Category from "../Images/SkinCare/Shop_By_Category.jpg";
import Skin_SignUp from "../Images/SkinCare/Sign_In_Page.jpg";
import Skin_Care from "../Images/SkinCare/Skin_Care.jpg";
// StyleCraze
import hairCare from "../Images/StyleCraze/hair-care.png";
import hairStyle from "../Images/StyleCraze/hair-style.png";
import hair_Care from "../Images/StyleCraze/haircare.png";
import hair_Style from "../Images/StyleCraze/hairstyle.png";
// import Style_Home from "../Images/StyleCraze/Home.png";
import Style_Login from "../Images/StyleCraze/Login.png";
import makeup_1 from "../Images/StyleCraze/makeup-1.png";
import makeup from "../Images/StyleCraze/makeup.png";
import Style_Signup from "../Images/StyleCraze/Signup.png";
import skincare from "../Images/StyleCraze/skincare.png";
// LeadIQ
// import BookDemo from "../Images/LeadIQ/BookDemo.png";
// import Feature from "../Images/LeadIQ/Feature.png";
// import Lead_Home from "../Images/LeadIQ/Home.png";
// import pricing from "../Images/LeadIQ/pricing.png";
// import Privacy from "../Images/LeadIQ/Privacy.png";
// Nature Basket
import Nature_Cart from "../Images/NatureBasket/Cart.png";
import Nature_Home from "../Images/NatureBasket/Home.png";
import Nature_Login from "../Images/NatureBasket/Login.png";
import Nature_Product from "../Images/NatureBasket/product.png";
//Apna Mart
import Apna_Checkout from "../Images/ApnaMart/Apna_Checkout.png";
import Apna_Login from "../Images/ApnaMart/Apna_Login.png";
import Footer from "../Images/ApnaMart/Footer.png";
// ----------------- XXXXXXXXXXXXXXXXXXXX --------------------------------

// -----------------  --------------------------------

// ----------------- XXXXXXXXXXXXXXXXXXXX --------------------------------




import Fade from "react-reveal/Fade";
import leadIQ from "../Images/leadIQ.png";
import nature from "../Images/nature.png";
import style from "../Images/stylecraze.png";
import Github from "../Images/GitHub.png";
import Netlify from "../Images/Netlify.png";

import apnaMart from "../Images/apnaMart.png";
import { skillsImage } from "../Skills/skillsImage";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out 2`;

const Project = () => {
  const [left, setLeft] = useState("0%");
  const [change, setChange] = useState(true);
  const run = () => {
    if (change) {
      setLeft("100%");
      setChange(false);
    } else {
      setLeft("0%");
      setChange(true);
    }
  };
  const start = () => {
    run();
    // setInterval(run, 5000);
  };
  useEffect(() => {}, []);

  const myProjects = [
    {
      title: "Skin Care",
      images: [
        Skin_Care,
        Skin_Home,
        Skin_Login,
        Skin_Category,
        Skin_Detail,
        Skin_Product,
        Skin_SignUp,
        Skin_Cart,
      ],
      description:
        "Welcome to Skin Care. For over 24 years we have been your number 1 destination for premium beauty, delivering the latest in innovative clinical skincare and luxury spa products. ",
      techStack: [
        "Javascript",
        "Chakra UI",
        "React",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "HTML",
        "CSS",
      ],
      features: [
        "- Authenication is provided where data is getting stored in the Mongodb Database.",

        "- Products page where all the products is provided and user buy it accordingly.",
        "- Special Admin login is provided.",
        "- All components are cross-device cross platform compatible.",
      ],
      Glink: "https://github.com/AnasQu7/Skinstore-Clone",
      Netlify: "https://timely-cucurucho-1b7757.netlify.app/",
      NIcon: Netlify,
    },
    {
      title: "Stylecraze Clone",
      images: [
        style,
        hairCare,
        Style_Login,
        hairStyle,
        hair_Care,
        makeup,
        Style_Signup,
        hair_Style,
        skincare,
        makeup_1,
      ],
      description:
        "StyleCraze primarily focuses on health & wellness, skin care, hair care...",
      techStack: ["Javascript", "HTML", "CSS"],
      features: ["- Social sign-in/sign-up", "- Fixed navbar"],
      Glink: "https://github.com/VivBelwal/inexpensive-cause-3321",
      Netlify: "https://stunning-kashata-f9a0b3.netlify.app/index.html",
      NIcon: Netlify,
    },

    // {
    //   title: "LeadIQ Clone",
    //   images: [leadIQ, BookDemo, Feature, pricing, Privacy],
    //   description:
    //     "The LeadIQ platform is built to help you prospect smarter and build pipeline faster.",
    //   techStack: ["Javascript", "HTML", "CSS"],
    //   features: [
    //     "- Social sign-in/sign-up",
    //     "- Fixed navbar",
    //     "- Pricing and booking a demo",
    //     "- Different payment gateway",
    //   ],
    //   Glink: "https://github.com/VivBelwal/silent-toes-7433",
    //   Netlify: "https://verdant-pegasus-7472d3.netlify.app/",
    //   NIcon: Netlify,
    // },
    {
      title: "Nature's Basket Clone",
      images: [nature, Nature_Cart, Nature_Login, Nature_Product],
      description:
        "Nature's Basket is an Indian grocery delivery chain of retail stores focused in gourmet food.",
      techStack: ["Javascript", "Chakra UI", "React"],
      features: [
        "- Social sign-in/sign-up",
        "- Fixed navbar",
        "- Adding products to the cart",
        "- Fetching data from own server",
      ],
      Glink: "https://github.com/VivBelwal/yielding-tongue-8280",
      Netlify: "https://nature-basket.vercel.app/",
      NIcon: Netlify,
    },
    {
      title: "Apna Mart",
      images: [apnaMart, Apna_Checkout, Footer, Apna_Login],
      description:
        "Apna Mart- India Ki Apni Dukaan - is a multicategory online shopping platform and provide home delivery.",
      techStack: [
        "Javascript",
        "Chakra UI",
        "React",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
      ],
      features: [
        "- Social sign-in/sign-up",
        "- Fixed navbar",
        "- Adding products to the cart",
        "- Full Stack Website",
      ],
      Glink: "https://github.com/Lokesh777/Apna-Mart",
      Netlify: "https://fascinating-gnome-6dd32e.netlify.app/",
      NIcon: Netlify,
    },
  ];
  const [fade, setFade] = useState("left");

  return (
    <Box
      // bgGradient="linear(to-r, #F1F2B5, #135058)"
      bg="#0E0C1D"
      id="project"
      w="100%"
      pt="1vw"
      pl="5vw"
      pb="5vw"
    >
      <Text
        display="flex"
        ml="10%"
        fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }}
        fontWeight={"400"}
        fontFamily="brushscriptmt"
        color="#2196f3"
      >
        Projects
        <Text
          fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }}
          color="F0F0F0"
          fontWeight={"400"}
          fontFamily="brushscriptmt"
        ></Text>
      </Text>

      {myProjects.map((ele, i) => (
        <Fade left>
          <Grid
            templateColumns={{
              lg: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              sm: "repeat(1, 1fr)",
              base: "repeat(1, 1fr)",
            }}
            w={"80%"}
            borderRadius="20px"
            color={"white"}
            overflow="hidden"
            alignContent={"center"}
            // border="5px solid #135058"
            className="project-individual-box"
            m="auto"
            mt="5%"
            pos="relative"
            p="2%"
            gap="5"
          >
            <Box className="top-border borders-animation"></Box>
            <Box className="left-border borders-animation"></Box>
            <Box className="bottom-border borders-animation"></Box>
            <Box className="right-border borders-animation"></Box>
            <Box className="image-box">
              <Carousel
                autoPlay={true}
                stopOnHover={true}
                preventMovementUntilSwipeScrollTolerance={true}
                centerMode={true}
                infiniteLoop={true}
              >
                {ele.images.map((img) => (
                  <Box>
                    <Image
                      src={img}
                      alt={ele.title}
                      width="100%"
                      borderLeftRadius={"15px"}
                      className="images"
                    />
                  </Box>
                ))}
              </Carousel>
            </Box>
            <Box color="white" className="project-detail-box">
              <Text
                fontSize={{
                  lg: "larger",
                  md: "larger",
                  sm: "larger",
                  base: "larger",
                }}
                mb="2"
                bgGradient="linear(to-r, #F1F2B5, teal)"
                className="project-title"
              >
                {ele.title}
              </Text>
              <Text
                fontSize={{
                  lg: "large",
                  md: "large",
                  sm: "medium",
                  base: "medium",
                }}
                mb="2"
                bgGradient="linear(to-r, #eee, #333)"
                className="project-title"
              >
                {ele.description}
              </Text>

              <Box
                display={"flex"}
                gap="1vw"
                w="fit-content"
                flexWrap={"wrap"}
                m="auto"
                mb="2"
              >
                {ele.techStack.map((tech) => (
                  // <Text
                  //   fontSize={{ lg: "12", md: "12", sm: "10", base: "10" }}
                  //   fontWeight="5000"
                  //   color=" #1A202C"
                  //   display={"flex"}
                  //   mt="1vw"

                  // >
                  <Box className="tech-used">
                    <Image
                      w={{ lg: "30px", md: "25px", sm: "20px", base: "15px" }}
                      h={{ lg: "30px", md: "25px", sm: "20px", base: "15px" }}
                      mt="1vw"
                      bg="white"
                      display={"flex"}
                      src={skillsImage(tech)}
                      alt={tech}
                    />
                  </Box>
                ))}
              </Box>
              {ele.features.map((feature) => (
                <Text
                  display={"flex"}
                  textUnderlineOffset={"0.5"}
                  fontSize={{
                    lg: "large",
                    md: "large",
                    sm: "medium",
                    base: "medium",
                  }}
                  bgGradient="linear(to-r, #eee, #333)"
                  className="project-title"
                >
                  {feature}
                </Text>
              ))}

              <Flex w="50%" justifyContent={"space-between"} m="auto" mt="2">
                <a href={ele.Glink} target="_blank" w="50%">
                  <Box
                    w={{ lg: "50px", md: "40px", sm: "10", base: "7" }}
                    h={{ lg: "50px", md: "40px", sm: "10", base: "7" }}
                    bg="white"
                    borderRadius="50%"
                  >
                    <Image src={`${Github}`} w="100%" alt="github" />
                  </Box>
                </a>
                <a href={ele.Netlify} target="_blank" w="50%">
                  <Image
                    src={`${ele.NIcon}`}
                    w={{ lg: "50px", md: "40px", sm: "10", base: "7" }}
                    h={{ lg: "50px", md: "40px", sm: "10", base: "7" }}
                    alt="deployed"
                  />

                  {/* <Text
                      fontSize={{ lg: "15", md: "15", sm: "15", base: "15" }}
                    >
                      {" "}
                      Netlify
                    </Text> */}
                </a>
              </Flex>
            </Box>
          </Grid>
        </Fade>
      ))}
    </Box>
  );
};

export default Project;
