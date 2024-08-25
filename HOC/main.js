// Higher Order Component is a Funciton which takes a Component as an Argument and returns a New Component.
// The New Component wraps the original One , for adding data / modifying its behaviour.

import React from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = ""; // write authentication logic here true/false
    if (!isAuthenticated) {
      return <p>Please Login to access the page</p>;
    }
    return <WrappedComponent {...props} />;
  };
};
export default withAuth;
