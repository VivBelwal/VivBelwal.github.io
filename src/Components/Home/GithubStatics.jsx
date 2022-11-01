import React from "react";

const Stats = () => {
  return (
    // streak 
    <div>
      <div style={{ width: "40%", margin: "auto" }}>
        <a href="https://github.com/VivBelwal">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com?user=VivBelwal&theme=tokyonight"
          />
        </a>
      </div>
      {/* [![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=VivBelwal&theme=tokyonight)](https://git.io/streak-stats) */}
      <div
        style={{
          width: "60%",
          height: "300px",
          display: "flex",
          margin: "auto",
        }}
      >
        <a href="https://github.com/VivBelwal">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=VivBelwal"  //launguages
          />
        </a>
        <a href="https://github.com/VivBelwal">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=VivBelwal&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;