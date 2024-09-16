import React, { useContext } from "react";

const Message = ({ text }) => {
  return (
    <div className="absolute top-16 left-10 z-50 text-purple-900">{text}</div>
  );
};

export default Message;
