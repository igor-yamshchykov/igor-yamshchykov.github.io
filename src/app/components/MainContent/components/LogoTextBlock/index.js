import React from "react";
import "./styles.scss";

const displayCompanyData = (data) => {
  if (Array.isArray(data)) {
    return data.map((e) => <div key={e}>{e}</div>);
  }

  return Object.entries(data).map(([key, value]) => (
    <div key={key}>
      <b>{key}</b>
      <span className="ml-1">{value}</span>
    </div>
  ));
};

const displayAchivements = (data) => (
  <div>
    <b>Achievements</b>
    <ul className="pl-3">
      {data.map((e) => (
        <li>{e}</li>
      ))}
    </ul>
  </div>
);

const LogoTextBlock = ({
  icon = null,
  logoSrc = null,
  data,
  link,
  responsibilities,
  achivements,
}) => {
  const content = (
    <div className="d-flex flex-wrap flex-md-nowrap">
      <div className="d-flex w-50">
        <div className="logo align-self-center">
          {icon}
          {logoSrc && <img src={logoSrc} className="img-fluid" />}
        </div>
        <div className="ml-3 text-dark w-75">{displayCompanyData(data)}</div>
      </div>
      {achivements && (
        <div className="ml-md-3 text-dark">
          {displayAchivements(achivements)}
        </div>
      )}
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
