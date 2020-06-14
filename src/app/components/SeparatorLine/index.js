import React from "react";
import classNames from "classnames";

const Separator = (className = "text-light") => (
  <div
    className={classNames("d-flex border-bottom mt-2 mb-2", className)}
  ></div>
);

export default Separator;
