import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M0 6a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v2.25c0 .414-.341.74-.742.843a3.001 3.001 0 0 0 0 5.814c.401.103.742.429.742.843V18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-2.25c0-.414.341-.74.742-.843a3.001 3.001 0 0 0 0-5.814C.341 8.99 0 8.664 0 8.25V6zm12 2.25a3.75 3.75 0 0 0-3.438 2.25H9.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.045A5.247 5.247 0 0 1 12 6.75a5.248 5.248 0 0 1 4.547 2.624.75.75 0 1 1-1.298.752 3.748 3.748 0 0 0-3.25-1.876zm2.25 5.25h1.188a3.751 3.751 0 0 1-6.687.374.75.75 0 1 0-1.298.752A5.248 5.248 0 0 0 12 17.25c1.91 0 3.582-1.02 4.5-2.545v1.045a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5z" clipRule="evenodd" /></svg>);