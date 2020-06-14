import React from "react";
import SeparatorLine from "~/app/components/SeparatorLine";
import Section from "~/app/components/Section";
import data from "~/data";
import Photo from "./components/Photo";
import Contacts from "./components/Contacts";
import Location from "./components/Location";
import TableLayout from "./components/TableLayout";

const LeftBar = () => (
  <div className="mb-2">
    <Photo />
    <h5 className="mt-2 mx-auto text-center text-light">
      {data.personInfo.name}
    </h5>
    <SeparatorLine />
    <Section title="Contacts:" name="contact-section">
      <Contacts />
    </Section>
    <SeparatorLine />
    <Section title="Location:" name="location-info">
      <Location />
    </Section>
    <SeparatorLine />
    <Section title="Languages:" name="languages-info">
      <TableLayout
        tableData={data.languages}
        tableSettings={data.languages.settings}
      />
    </Section>
    <SeparatorLine />
    <Section title="Programming Languages:" name="programming-languages">
      <TableLayout
        tableData={data.programmingLanguages}
        tableSettings={data.programmingLanguages.settings}
      />
    </Section>
    <SeparatorLine />
    <Section title="Frameworks:" name="frameworks">
      <TableLayout tableData={data.frameworks} />
    </Section>
    <SeparatorLine />
    <Section title="Databases:" name="databases">
      <TableLayout
        tableData={data.databases}
        tableSettings={data.databases.settings}
      />
    </Section>
    <SeparatorLine />
    <Section title="Web Services/Tools:" name="developer-tools">
      <div className="text-light">
        AWS, Digital Ocean, Docker, Vargant, NGINX, WSGI, Jenkins, CircleCI
      </div>
    </Section>
    <SeparatorLine />
    <Section title="Also Familiar:" name="secondary-tools">
      <div className="text-light">
        HTML, CSS, Responsive Web Design, Bootstrap
      </div>
    </Section>
  </div>
);

export default LeftBar;
