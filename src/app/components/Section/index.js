import React from "react";
import classNames from "classnames";
import "./styles.scss";

const Section = ({
  name,
  title,
  children,
  className = "mt-2",
  textClass = "text-light"
}) => (
  <section aria-label={name} className={classNames("section", className)}>
    <h6 className={classNames("title", textClass)}>{title}</h6>
    {children}
  </section>
);

export default Section;
