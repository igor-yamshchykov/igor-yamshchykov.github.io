import React from "react";

const pythonFrameworks = (
  <ul>
    <li>Django</li>
    <li>Flask</li>
    <li>Tornado</li>
    <li>DRF</li>
  </ul>
);

const javascriptFrameworks = (
  <ul>
    <li>Express</li>
    <li>Koa</li>
    <li>React</li>
    <li>Ember</li>
  </ul>
);

export default {
  data: [["Python", pythonFrameworks], ["Javascript", javascriptFrameworks]],
  settings: {
    data: [{}, { className: "text-center" }]
  }
};
