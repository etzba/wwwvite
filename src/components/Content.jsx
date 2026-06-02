import React from "react";

const Content = ({ title, content }) => {
  return (
    <div className="section">
      <h1>{title}</h1>
      {content}
    </div>
  );
};

export default Content;
