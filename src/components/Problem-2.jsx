import React, { useState } from "react";
import ModalA from "./Model/ModalA";
import ModalB from "./Model/ModalB";

const Problem2 = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            style={{ color: "#46139f" }}
            onClick={handleShowModal}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            style={{ color: "#ff7f50" }}
            onClick={handleShowModal}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>
      </div>
      <ModalA showModal={showModal} handleClose={handleCloseModal} />
      {/* <ModalB showModal={showModal} handleClose={handleCloseModal} /> */}
    </div>
  );
};

export default Problem2;
