import React from "react";
import { render } from "react-dom";

// OGLify
import { App } from "meteor/oglify:react";

export const renderDisplay = (target) => {
  render(<App />, target);
};
