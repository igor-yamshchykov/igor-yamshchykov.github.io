import React from "react";
import LeftBar from "~/app/components/LeftBar";
import MainContent from "~/app/components/MainContent";
import Pagebreak from "~/app/components/Pagebreak";
import Section from "~/app/components/Section";
import ProjectCard from "~/app/components/ProjectCard";
import PrintButton from "~/app/components/PrintButton";
import Modal from "~/app/components/Modal";
import Backdrop from "~/app/components/Modal/Backdrop";
import data from "~/data";
import "./styles.scss";

const App = () => (
  <>
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 left-bar">
            <LeftBar />
          </div>
          <div className="col-12 col-md-9">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
    <Pagebreak />
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            <Section
              title="Recent Projects"
              name="recent-projects"
              className="mt-1"
              textClass="mt-3 text-dark"
            >
              <div className="row">
                {data.projects.map(e => (
                  <div className="col-12 col-md-4">
                    <ProjectCard
                      key={e.title}
                      title={e.title}
                      description={e.description}
                      duration={e.duration}
                      techStack={e.techStack}
                      responsibilities={e.responsibilities}
                    />
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
    <PrintButton />
    <Modal />
    <Backdrop />
  </>
);

export default App;
