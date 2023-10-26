import React from "react";
import { Outlet } from "react-router-dom";

const TestWithout = ({isValid}) => {
  return (
    <div>
      <h1>Different header</h1>
      {isValid ? <Outlet /> : <h1>not authorized</h1>}
    </div>
  );
};

export default TestWithout;
