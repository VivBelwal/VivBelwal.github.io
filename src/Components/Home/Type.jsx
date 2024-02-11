import React from "react";
import Typewriter from "typewriter-effect";
import {Text} from "@chakra-ui/react"

function Type() {
  return (
    <Text color="#2196f3" pt="2vw"
    fontSize={{ lg: "40", md: "30", sm: "20", base: "4.5vw" }}
    lineHeight={{ lg: "10", md: "8", sm: "5", base: "2" }}
     >
      
    <Typewriter
     
      options={{
        strings: [
          "Vivek Belwal",
          "A Full-Stack web developer",
          "Self-Motivated",
          "Hard-Working"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
    {/* <Text color="grey" fontSize={{ lg: "20", md: "20", sm: "15", base: "10" }}>
    A self-motivated hard-working and ambitious
aspiring full-stack web developer with hands-on
experience in building websites with MERN stack
and various web technologies including HTML, CSS,
and JavaScript.
    </Text > */}
    
    </Text>

  );
}

export default Type;