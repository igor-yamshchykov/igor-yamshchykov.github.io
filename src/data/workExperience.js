import React from "react";
import eleks from "~/assets/company-logos/eleks.png";
import reunite from "~/assets/company-logos/reunite.png";
import nix from "~/assets/company-logos/n-ix.png";
import softserve from "~/assets/company-logos/softserve.png";
import techmagic from "~/assets/company-logos/techmagic.png";
import fps from "~/assets/company-logos/freeze_pro_software.png";
import itera from "~/assets/company-logos/itera.png";
import vector from "~/assets/company-logos/vector.png";

export default [
  {
    logoSrc: vector,
    data: {
      "Company Name:": "Vector Software",
      "Position:": "Software Engineer",
      "Term:": "Aug 2021 - Current",
      "Project:": "Solution for managing restaurants and food delivery process"
    },
    achivements: [
      "Successfully reverse engineered project without documentation",
      "Release project to production after reverse engineering"
    ]
  },
  {
    logoSrc: eleks,
    data: {
      "Company Name:": "Eleks",
      "Position:": "Software Engineer",
      "Term:": "Sep 2020 - June 2021",
      "Project:":
        "Project aims to automate operations in AI vision. Configurable platform to deliver ML into the industries. Provides unificated interface for data scientists and non technical users."
    },
    achivements: [
      "Designed and delivered importing microservice",
      "Improved common product parts",
      "Improved Jenkins pipelines",
      "Refactored and unified tech stack on subproject",
      "Improved subproject performance"
    ]
  },
  {
    logoSrc: reunite,
    data: {
      "Personal Project:": "Reunite",
      "Position:": "Owner/Developer",
      "Term:": "Feb 2019 - Jan 2021",
      "Project:": <a href="https://reunite.com.ua">reunite.com.ua</a>
    },
    achivements: [
      "Created wireframes",
      "Developed project architecture",
      "Delivered project from scratch",
      "Went through all project phases",
      "Setup CD process"
    ]
  },
  {
    logoSrc: nix,
    data: {
      "Company Name:": "N-iX",
      "Position:": "Software Engineer",
      "Term:": "Sep 2017 - Sep 2020",
      "Project:":
        "Norwegian media news sites with posts, advertisement, ships and rigs data. Services is integrated with multiple third-parties to gather data about ships and rigs, also provides statistics etc. Besides that admin area for editors and journalists."
    },
    achivements: [
      "Successfully developed and delivered 2 subprojects",
      "Extended functionality of existing project",
      "Participated in complete project rearch, migrated to new version",
      "Successfully merged subprojects into newly developed platform"
    ]
  },
  {
    logoSrc: softserve,
    data: {
      "Company Name:": "SoftServe",
      "Position:": "Software Engineer",
      "Term:": "Feb 2016 - Sep 2017",
      "Project:":
        "System, which is aimed to offer a complete set of services for private IaaS (Cloud) for small and medium business enabling control for multiple websites, data centers, and assets across customer infrastructure."
    },
    achivements: [
      "Successfully migrated product to different tech stack",
      "Took part in project initial architecture development",
      "Improved project workflows and performance",
      "Delivered packaged reusable components library"
    ]
  },
  {
    logoSrc: techmagic,
    data: {
      "Company Name:": "TechMagic",
      "Position:": "Full-Stack Javascript Developer",
      "Term:": "Aug 2015 - Feb 2016",
      "Project:": "Working on several startup projects"
    },
    achivements: ["Successfully developed multiple startup projects"]
  },
  {
    logoSrc: fps,
    data: {
      "Company Name:": "Freeze Pro Software",
      "Position:": "Web Developer",
      "Term:": "Mar 2013 - Aug 2015",
      "Project:":
        "HR company management system, included user management, employee quizes, reportings"
    }
  },
  {
    logoSrc: itera,
    data: {
      "Company Name:": "Itera Consulting ",
      "Position:": "Web Developer",
      "Term:": "Nov 2013 - Feb 2015"
    }
  }
];
