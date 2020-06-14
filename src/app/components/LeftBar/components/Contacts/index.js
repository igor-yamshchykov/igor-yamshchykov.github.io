import React from "react";
import data from "~/data";

const Contacts = () => (
  <section aria-label="contact-section" className="mt-2">
    <div className="contacts ml-2">
      <div className="text-light">
        <i className="fab fa-skype"></i>
        <span className="ml-1">{data.personInfo.skype}</span>
      </div>
      <div className="text-light">
        <i className="fab fa-linkedin"></i>
        <a
          href="https://www.linkedin.com/in/iyamshchykov"
          className="text-light linkedin-link ml-1"
        >
          {data.personInfo.linkedin}
        </a>
      </div>
    </div>
  </section>
);

export default Contacts;
