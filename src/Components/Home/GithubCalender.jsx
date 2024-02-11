import { Box, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const GithubCalender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 7;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear ||
        monthOfDay > currentMonth - shownMonths ||
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <Box style={{ backgroundColor: "#0E0C1D", width: "100%" }} pt="5vw">
      <Text
        display="flex"
        ml="14.5%"
        fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }}
        fontWeight={"400"}
        fontFamily="brushscriptmt"
        color="#2196f3"
      >
        {" "}
        My GitHub
        <Text
          fontSize={{ lg: "40", md: "30", sm: "20.5", base: "20" }}
          color="#f1f2b5"
          fontWeight={"400"}
          fontFamily="brushscriptmt"
          ml="5"
        >
          Calender
        </Text>
      </Text>
      <Box pt="5vw" pb="5vw" ml="5.5%" fontSize={{ lg: "10px", md: "9px", sm: "8px", base: "7px" }}>
        <GitHubCalendar
          style={{
            margin: "auto",
            color: "white",
            width: "80%",
            
            
          }}
          transformData={selectLastHalfYear}
          username="VivBelwal"
          blockSize={18}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </Box>
    </Box>
  );
};

export default GithubCalender;
