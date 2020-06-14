import React from "react";
import "./styles.scss";

const displayData = data => {
  if (Array.isArray(data)) {
    return data.map(e => <div key={e}>{e}</div>);
  }

  return Object.entries(data).map(([key, value]) => (
    <div key={key}>
      <b>{key}</b>
      <span className="ml-1">{value}</span>
    </div>
  ));
};

const LogoTextBlock = ({ icon = null, logoSrc = null, data, link }) => {
  const content = (
    <div className="d-flex">
      <div className="logo align-self-center">
        {icon}
        {logoSrc && <img src={logoSrc} className="img-fluid" />}
      </div>
      <div className="ml-3 text-dark">{displayData(data)}</div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="text-light">
        {content}
      </a>
    );
  }

  return content;
};

export default LogoTextBlock;
