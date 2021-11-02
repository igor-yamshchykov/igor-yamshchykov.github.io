import React from "react";
import get from "lodash.get";

const RowLayout = ({ data }) => (
  <div className="text-light">
    { data.join(', ') }
  </div>
);

export default RowLayout;
