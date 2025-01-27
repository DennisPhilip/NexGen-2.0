import React from "react";
import useDevfolioSDK from "./hooks/useDevfolioSDK";

const DevfolioButton: React.FC = () => {
  useDevfolioSDK(); 

  return (
    <div
      className="apply-button"
      data-hackathon-slug="nexgen-2" 
      data-button-theme="dark-inverted" 
      style={{height: "44px", width: "312px"}} 
    ></div>
  );
};

export default DevfolioButton;
