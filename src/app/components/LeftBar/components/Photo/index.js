import React from "react";
import data from "~/data";
import "./styles.scss";

const Photo = () => (
  <div className="photo mx-auto mt-3">
    <img
      src={data.personInfo.photo}
      alt={data.personInfo.name}
      className="img-fluid"
    />
  </div>
);

export default Photo;
