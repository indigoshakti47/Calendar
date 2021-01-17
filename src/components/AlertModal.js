import React from "react";
import "../styles/EventModal.scss";

export default function AlertModal({ children, showAlertModal, setShowAlertModal }) {
  return (
    <div className={`modal ${!!showAlertModal ? "show" : ""}`}>
      <div
        className="modal__backdrop"
        onClick={() => setShowAlertModal(false)}
      ></div>
      <div className="modal__dialog">
        <div className="modal__header">
          <h2>Attention!</h2>
        </div>
        {children}
      </div>
    </div>
  );
}
