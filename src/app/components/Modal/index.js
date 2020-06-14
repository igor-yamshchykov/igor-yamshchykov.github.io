import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ffAdvanced from "~/assets/guide/firefox/advanced.png";
import ffColor from "~/assets/guide/firefox/color.png";
import ffPdf from "~/assets/guide/firefox/pdf.png";
import chrome from "~/assets/guide/chrome/chrome.png";
import reducer, { initialState } from "./reducer";
import "./styles.scss";

const Modal = ({ title, content, footer }) => {
  const [previewImg, setPreviewImg] = useState(null);
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.modal.isVisible);

  if (!isVisible) {
    return null;
  }

  const ImagePreview = img => (
    <div>
      <button
        type="button"
        className="close"
        onClick={() => {
          setPreviewImg(null);
        }}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <img src={img} className="img-fluid" />
    </div>
  );

  return (
    <div className="modal d-block d-print-none" id="saveModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="saveModal">
              Print
            </h5>
            <button
              onClick={() => {
                dispatch({ type: "hide" });
              }}
              type="button"
              className="close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {previewImg && ImagePreview(previewImg)}
            {!previewImg && (
              <>
                Please try not to waste paper if it's possible, you can share
                the link to this CV instead, or save it as PDF. To save it as
                PDF click the "Print" button below and change print option to
                "Save as pdf", please make sure to allow print of background
                colors to preserve the look of the document.
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <div className="text-center">Firefox</div>
                      <img
                        src={ffAdvanced}
                        alt="enable advanced print settings"
                        className="img-fluid guide-img"
                        onClick={() => setPreviewImg(ffAdvanced)}
                      />
                      <img
                        src={ffColor}
                        alt="enable background color"
                        className="img-fluid mt-1 guide-img"
                        onClick={() => setPreviewImg(ffColor)}
                      />
                      <img
                        src={ffPdf}
                        alt="save to pdf"
                        className="img-fluid mt-1 guide-img"
                        onClick={() => setPreviewImg(ffPdf)}
                      />
                    </div>
                    <div className="col-6">
                      <div className="text-center">Chrome</div>
                      <img
                        src={chrome}
                        alt="save to pdf"
                        className="img-fluid guide-img"
                        onClick={() => setPreviewImg(chrome)}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          {!previewImg && (
            <div className="modal-footer">
              <button
                id="saveCVButton"
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  dispatch({ type: "hide" });
                  window.print();
                }}
              >
                Print
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
