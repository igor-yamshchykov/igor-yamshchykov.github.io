import React from "react";
import { useSelector } from "react-redux";

const Backdrop = () => {
  const isVisible = useSelector(state => state.modal.isVisible);

  return isVisible && <div class="modal-backdrop fade show d-print-none"></div>;
};

export default Backdrop;
