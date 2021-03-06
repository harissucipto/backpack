import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M5 14a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm7 0a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm9-2a2 2 0 1 1-2-2 2 2 0 0 1 2 2z" /></svg>);