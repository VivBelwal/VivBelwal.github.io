import React from "react";
import Marquee from "react-fast-marquee";
import { theme } from "./theme.skills";
import "./Skills.css";
import { skillsImage } from "./skillsImage";
import { Box, Text } from "@chakra-ui/react";

function Skill() {
  const skillsData = [
    "HTML",
    "Javascript",
    "CSS",
    "React",
    "Redux",
    "TypeScript",
    "ExpressJS",
    "MongoDB",

    "GitHub",
    "NodeJS",
    "Chakra UI",

    "Postman",

    "Replit",
    "VS Code",
  ];
  //  const skillsData1 = [
  //    'MongoDB',
  //    'canva',
  //    "bootstrap",

  // ]

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  return (
    <Box id="skills" className="skills1" bgColor={"#0E0C1D"} mt={{ lg: "40px", md: "40px", sm: "10.5px", base: "0px" }}>
      <div>
        {/* <h2 style={{color : "#D6BCFA"}}>Skills</h2> */}
        <Text
          display="flex"
          mt={{ lg: "5", md: "5", sm: "2", base: "0px" }}
          ml="15%"
          fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }}
          fontWeight={"400"}
          fontFamily="brushscriptmt"
          color="#2196f3"
        >
          Skills
        </Text>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div>
                <div className="skill--box" key={id} style={skillBoxStyle}>
                  <img src={skillsImage(skill)} alt={skill} />
                  <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                </div>
              </div>
            ))}
          </Marquee>
          {/* <Hide below='md'>
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        
                        pauseOnHover={true} 
                        delay={0}
                        play={true} 
                        direction="right"
                    >
                        {skillsData1.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 
                                
                                >
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                    </Hide> */}
        </div>
      </div>
    </Box>
  );
}

export default Skill;
