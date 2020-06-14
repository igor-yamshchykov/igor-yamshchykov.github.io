import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import "./styles.scss";

const PrintButton = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="d-print-none download-button"
      onClick={() => {
        dispatch({ type: "show" });
      }}
    >
      <i id="download-button" className="fas fa-download"></i>
    </div>
  );
};

export default PrintButton;
