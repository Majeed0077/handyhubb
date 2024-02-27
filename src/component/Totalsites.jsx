import React, {useState, useEffect } from "react";
import NumberCounter from "react-countup";
import './TotalSites.css';

const Experience = ({ totalSites }) => {
  
  const [sitesCount, setSitesCount] = useState(0);
  useEffect(() => {
    setSitesCount(totalSites);
  }, [totalSites]);

  return (
    <div className="experience">
      <div className="achievement">
        <span>Total </span>
        <span>Websites</span> 
      </div>
      <NumberCounter start={0} end={sitesCount} duration={3} />
    </div>
  );
};

export default Experience;
