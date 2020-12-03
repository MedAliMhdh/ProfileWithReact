import React from "react";

const Fullname = (props) => {
  console.log(props);
  return (
    <h1>
      {props.name || "your name"} {props.lastName || "your last name"}
    </h1>
  );
};
export default Fullname;
