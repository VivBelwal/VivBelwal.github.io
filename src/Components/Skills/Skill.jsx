import React from 'react';
import Marquee from "react-fast-marquee";
import {theme} from './theme.skills'
import './Skills.css'
import { skillsImage } from './skillsImage'
import { Box, Hide, Text } from '@chakra-ui/react';

function Skill() {
 const skillsData = [
   'HTML',
   'Javascript',
   'CSS',
   'React', 
   "Redux", 
   "TypeScript",
   "ExpressJS",
   'MongoDB', 
   "AWS",
   "GitHub",
   "NodeJS",
   "Chakra UI",
   
   "Postman",
   
   "Replit",
   "VS Code"
   
]
 const skillsData1 = [     
   'MongoDB',   
   'canva',
   "bootstrap",
   
]


    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <Box id ="skills" className="skills1" bgColor={"#1A202C"}  >
            <div >
                {/* <h2 style={{color : "#D6BCFA"}}>Skills</h2> */}
                <Text  display="flex" ml="15%" fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }} 
          fontWeight={"400"}
          fontFamily="brushscriptmt" color="purple.200" >Skills
          
          
          </Text>
            </div>
            <div className="skillsContainer" >
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
                            <div >
                              
 <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 
                                style={{color: theme.tertiary}}
                                >
                                    {skill}
                                </h3>
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
    )
}

export default Skill