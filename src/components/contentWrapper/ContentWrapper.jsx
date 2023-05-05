import React from "react";
import "./style.scss";

// This file will center our whole element in the center and give spaces to both left and right side
const ContentWrapper = ({ children }) => {
  return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
