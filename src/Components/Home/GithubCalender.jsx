import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

const GithubCalender = () => {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
  return (
    <div>
        <GitHubCalendar 
        style = {{margin : "auto"}}
        transformData={selectLastHalfYear} 
        username="VivBelwal"
        
        >
        <ReactTooltip  delayShow={20} html/>
        </GitHubCalendar>
     

    </div>
  )
}

export default GithubCalender
