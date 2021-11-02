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
    <PrintButton />
    <Modal />
    <Backdrop />
  </>
);

export default App;
